import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  clienteid: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  correo: string;

}