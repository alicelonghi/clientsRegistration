import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Geolocation {
  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;
}

@Schema()
export class Address {
  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  number: number;

  @Prop({ required: true })
  neighborhood: string;

  @Prop({ required: true })
  complement: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  country: string;

  @Prop({ type: Geolocation, required: false })
  geolocation?: Geolocation;
}

@Schema()
export class Client {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  weight: number;

  @Prop({ type: Address, required: true })
  address: Address;
}

// schemas
export const GeolocationSchema = SchemaFactory.createForClass(Geolocation);
export const AddressSchema = SchemaFactory.createForClass(Address);
export const ClientSchema = SchemaFactory.createForClass(Client);
