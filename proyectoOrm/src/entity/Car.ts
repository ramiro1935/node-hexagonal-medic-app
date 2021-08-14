import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number
    @Column({ type: "varchar", length: 100})
    manufacture: string
    @Column({ type: "text"})
    description: string
    @Column({ type: "varchar", length: 20})
    color: string
    @Column({type: "int"})
    year: number
    @Column({type: "bool"})
    isSold: boolean

    /*@OneToOne((type) => User, { cascade: true })
    @JoinColumn()*/
    /*@ManyToOne(type => User, user => user.cars)*/
    @ManyToMany(type => User, user => user.cars)
    @JoinTable()
    users: User[]
}