import { Controller, Get, Query } from '@nestjs/common';
import { GeocodingService } from './geocoding.service';

@Controller('geocoding')
export class GeocodingController {
  constructor(private readonly geocodingService: GeocodingService) {}

  @Get('coordinates')
  async getCoordinates(@Query('address') address: string) {
    return this.geocodingService.getCoordinates(address);
  }
}
