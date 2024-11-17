import { Module } from '@nestjs/common';
import { GeocodingService } from './geocoding.service';
import { GeocodingController } from './geolocation.controller';

@Module({
  providers: [GeocodingService],
  exports: [GeocodingService],
  controllers: [GeocodingController],
})
export class GeocodingModule {}
