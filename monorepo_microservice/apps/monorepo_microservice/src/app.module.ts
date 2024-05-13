import {  Module, } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices'
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { Cliente } from './cliente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      
       type:'sqlite',
       database: './db/db.db',
       entities:[Cliente],
       synchronize: true
      }),  
    TypeOrmModule.forFeature([Cliente]),
    ClientsModule.register([
      {
        name:'Usuario_service',
        transport: Transport.REDIS,
        options:{
          host: 'localhost',
          port:6379
        }

      },
    ]),
  ],
      controllers: [AppController],
      providers: [AppService],
    })
  export class AppModule{}
  
  
  













/*inports: [
  ClientsModule.register([
    { 
    name: 'MAIL_SERVICE',
    transport : Transport.REDIS},
     options: (
      host: 'localhost',
      port: 6479,

     )
     }
  ]),
],
controllers: [ AppController],
providers: [AppService],
})
export class AppModule {}*/

