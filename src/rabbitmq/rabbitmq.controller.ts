import { Body, Controller, Post } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq.service';
import { RabbitMQRequestDto } from './dto/rabbitmq-request.dto';

@Controller('rabbitmq')
export class RabbitmqController {
  constructor(private readonly rabbitmqService: RabbitmqService) {}
  @Post('send-message')
  async sendMessage(@Body() rabbitMQRequestDto: RabbitMQRequestDto) {
    return await this.rabbitmqService.sendMessage(rabbitMQRequestDto);
  }
  @Post('emit-message')
  async emitMessage(@Body() rabbitMQRequestDto: RabbitMQRequestDto) {
    return await this.rabbitmqService.emitMessage(rabbitMQRequestDto);
  }
}
