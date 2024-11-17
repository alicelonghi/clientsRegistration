import { Module } from '@nestjs/common';
import { ClientsModule } from './modules/clients/clients.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GeocodingModule } from './modules/geocoding/geocoding.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://alicelonghi:mzhW1I7qmFfwVYsX@cluster-delivery-app.5durz.mongodb.net/',
    ),
    ClientsModule,
    GeocodingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
