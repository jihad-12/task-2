import { Entity, PrimaryGeneratedColumn, Column, } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  mobilePhone: string;

  @Column('float')
  balance: number;
}
