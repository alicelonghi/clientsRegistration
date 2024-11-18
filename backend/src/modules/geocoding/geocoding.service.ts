import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GeocodingService {
  private readonly geocodingUrl = 'https://nominatim.openstreetmap.org/search';

  async getCoordinates(
    address: string,
  ): Promise<{ latitude: number; longitude: number }> {
    try {
      const response = await axios.get(this.geocodingUrl, {
        params: {
          q: address,
          format: 'json',
        },
        headers: {
          'User-Agent': 'MyApp/1.0',
        },
      });

      if (response.data.length > 0) {
        const location = response.data[0];
        return {
          latitude: parseFloat(location.lat),
          longitude: parseFloat(location.lon),
        };
      } else {
        throw new HttpException(
          'Endereço não encontrado',
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (error) {
      throw new HttpException(
        'Erro na API de Geocodificação',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
