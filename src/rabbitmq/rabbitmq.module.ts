import { Module } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq.service';
import { RabbitmqController } from './rabbitmq.controller';
import { ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule],
  controllers: [RabbitmqController],
  providers: [RabbitmqService],
})
export class RabbitmqModule {}
