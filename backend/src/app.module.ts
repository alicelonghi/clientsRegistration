import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule } from './modules/clients/clients.module';
import { GeocodingModule } from './modules/geocoding/geocoding.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://alicelonghi:mzhW1I7qmFfwVYsX@cluster-delivery-app.5durz.mongodb.net/delivery-app?retryWrites=true&w=majority',
    ),
    ClientsModule,
    GeocodingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
