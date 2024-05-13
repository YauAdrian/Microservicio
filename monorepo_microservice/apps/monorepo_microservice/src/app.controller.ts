import { Body,Controller, Post,Get} from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async newCliente(@Body()body:any): Promise <string>{
    return await this.appService.newCliente(body)
  }
  
}
