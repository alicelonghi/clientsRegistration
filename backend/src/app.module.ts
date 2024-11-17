import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule } from './modules/clients/clients.module';
import { GeocodingModule } from './modules/geocoding/geocoding.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    ClientsModule,
    GeocodingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
