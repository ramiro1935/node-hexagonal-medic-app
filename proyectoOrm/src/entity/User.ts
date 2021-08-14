import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from './Car';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    firstName: string
    @Column()
    lastName: string
    @Column()
    gender: number
    
    /*@OneToOne(type => Car)*/
    /*@OneToMany(type => Car, car => car.user, { cascade: true })*/
    @ManyToMany(type => Car, car => car.users, { cascade: true })
    cars: Car[]
}