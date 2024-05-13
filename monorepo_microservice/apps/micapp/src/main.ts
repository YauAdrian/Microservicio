import { NestFactory } from '@nestjs/core';
import { MicappModule } from './micapp.module';
import {Transport, MicroserviceOptions} from '@nestjs/microservices';
async function bootstrap() {
  //const app = await NestFactory.create(MicappModule);
  //await app.listen(3001);
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      MicappModule,
      {
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
        },
      },
    );
    await app.listen();
  }
  bootstrap();