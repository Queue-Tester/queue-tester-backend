import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  Transport,
  ClientProxyFactory,
} from '@nestjs/microservices';
import { RabbitMQRequestDto } from './dto/rabbitmq-request.dto';

@Injectable()
export class RabbitmqService {
  private client: ClientProxy;

  async initializeClient(
    rabbitmqUrl: string,
    queueName: string,
  ): Promise<void> {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [rabbitmqUrl],
        queue: queueName,
      },
    });
  }

  async sendMessage(rabbitMQRequestDto: RabbitMQRequestDto) {
    await this.initializeClient(
      rabbitMQRequestDto.rabbitmqUrl,
      rabbitMQRequestDto.queueName,
    );
    if (!this.client) {
      throw new Error('Client not initialized. Call initializeClient first.');
    }

    return this.client.send<string, string>(
      rabbitMQRequestDto.patternName,
      rabbitMQRequestDto.message,
    );
  }
  async emitMessage(rabbitMQRequestDto: RabbitMQRequestDto) {
    await this.initializeClient(
      rabbitMQRequestDto.rabbitmqUrl,
      rabbitMQRequestDto.queueName,
    );
    if (!this.client) {
      throw new Error('Client not initialized. Call initializeClient first.');
    }

    return this.client.emit<string, string>(
      rabbitMQRequestDto.patternName,
      rabbitMQRequestDto.message,
    );
  }
}
