import {createConnection} from "typeorm";
import { Car } from "./entity/Car";

createConnection().then( async(connection) => {
    console.log('Connected to database')

  /*  const car = new Car()
    car.manufacture = "Kia"
    car.description="santa fe"
    car.year=2022
    car.isSold=true
    car.color="yellow patito"
    

    const carRepo = connection.getRepository(Car)
    const carInserted = await carRepo.save(car)
    console.log({carInserted})*/
    const carRepo = connection.getRepository(Car)
    const [cars, cardCount] = await carRepo.findAndCount()
    console.log({cars, cardCount})

    const allCars = await carRepo.find()
    console.log({allCars})
   
}).catch(console.log);
