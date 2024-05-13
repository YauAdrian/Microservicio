import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MicappController } from './micapp.controller';
import { MicappService } from './micapp.service';


@Module({
  imports: [
    ClientsModule.register([
      {name : 'MAIL_SERVICE', transport : Transport.REDIS },
    ])
  ],
  controllers: [MicappController],
  providers: [MicappService],
})
export class MicappModule {}