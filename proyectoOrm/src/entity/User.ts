import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
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
/*    @OneToOne(type => Car)
    car: Car*/

    @OneToMany(type => Car, car => car.user, { cascade: true })
    cars: Car[]
}