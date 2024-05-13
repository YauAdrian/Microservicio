import { Injectable } from '@nestjs/common';

@Injectable()
export class MicappService {
  getHello(): string {
    return 'Hola estoy en puerto 3001';
  }
}
