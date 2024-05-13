import { Inject,Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Cliente } from './cliente.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor
  (@InjectRepository(Cliente) 
  private readonly clienteRepository : Repository<Cliente>

) {}

 
  async newCliente (user: any) : Promise <string> {
    try{
      const nuevoCliente = this.clienteRepository.create(user);
      await this.clienteRepository.save(nuevoCliente);
      return 'Cliente nuevo';
    }catch(error){
throw new Error ('Error Crack ${error.message}');

    }
    
  
    }



  }
  

