import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://alicelonghi:mzhW1I7qmFfwVYsX@cluster-delivery-app.5durz.mongodb.net/',
    ),
    ClientsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
