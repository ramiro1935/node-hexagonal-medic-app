import {createConnection} from "typeorm";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

createConnection().then( async(connection) => {
    console.log('Connected to database')
    const userRepo = connection.getRepository(User)
    
    const car1 = new Car()
    car1.manufacture = "Hyundai"
    car1.color = "black"
    car1.description = "SUV Santa fe"
    car1.isSold = true
    car1.year = 2014
    
    const car2 = new Car()
    car2.manufacture = "Kia"
    car2.color = "white"
    car2.description = "SUV Rio"
    car2.isSold = false
    car2.year = 2020

    const user = new User()
    user.firstName = "Ramiro"
    user.lastName = "Arivilca"
    user.gender = 1
    user.cars = [car1, car2]

    const userInserted = await userRepo.save(user)
    console.log(userInserted)
    

}).catch(console.log);
