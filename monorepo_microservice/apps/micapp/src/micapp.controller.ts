import { Controller, Get } from '@nestjs/common';
import { MicappService } from './micapp.service';
import { EventPattern } from '@nestjs/microservices';
@Controller()
export class MicappController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly micappService: MicappService) {}

 /* @Get()
  getHello(): string {
    return this.micappService.getHello();
  }*/
  @EventPattern('new_mail')
  handleNewMail(data:any){
    console.log('Este es el evento main:',data)
  }
}
