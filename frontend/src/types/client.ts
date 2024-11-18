export interface Geolocation {
  latitude: number;
  longitude: number;
  _id: string;
}

export interface Address {
  street: string;
  number: number;
  neighborhood: string;
  complement?: string;
  city: string;
  state: string;
  country: string;
  geolocation: Geolocation;
  _id: string;
}

export interface Client {
  _id: string;
  name: string;
  weight: number;
  address: Address;
  __v: number;
}
