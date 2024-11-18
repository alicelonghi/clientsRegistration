import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

import { Client, ClientDocument } from './entities/client.entity';
import { GeocodingService } from 'src/modules/geocoding/geocoding.service';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
    private geocodingService: GeocodingService,
  ) {}

  async create(createClientDto: CreateClientDto) {
    if (createClientDto.address) {
      const address = `${createClientDto.address.street}, ${createClientDto.address.number}, ${createClientDto.address.city}, ${createClientDto.address.state}, ${createClientDto.address.country}`;
      const geolocation = await this.geocodingService.getCoordinates(address);

      if (geolocation) {
        createClientDto.address.geolocation = {
          latitude: geolocation.latitude,
          longitude: geolocation.longitude,
        };
      }
    }

    const client = new this.clientModel(createClientDto);
    return client.save();
  }

  findAll() {
    return this.clientModel.find();
  }

  findOne(id: string) {
    return this.clientModel.findById(id);
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    return this.clientModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: UpdateClientDto,
      },
      {
        new: true,
      },
    );
  }
  async removeAll() {
    try {
      const result = await this.clientModel.deleteMany({});
      return { message: 'Todos os clientes foram deletados', result };
    } catch (error) {
      throw new Error('Erro ao apagar todos os clientes');
    }
  }

  remove(id: string) {
    return this.clientModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
