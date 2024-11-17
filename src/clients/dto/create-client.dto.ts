import {
  IsString,
  IsNumber,
  IsOptional,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class Geolocation {
  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;
}

class Address {
  @IsString()
  street: string;

  @IsNumber()
  number: number;

  @IsString()
  neighborhood: string;

  @IsString()
  complement: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Geolocation)
  geolocation?: Geolocation;
}

export class CreateClientDto {
  @IsString()
  name: string;

  @IsNumber()
  weight: number;

  @IsObject()
  @ValidateNested()
  @Type(() => Address)
  address: Address;
}
