import { createConnection } from 'typeorm'
import { Car } from './entity/Car'
import { User } from './entity/User'

createConnection()
  .then(async connection => {
    console.log('Connected to database')
    const userRepo = connection.getRepository(User)
    const carRepo = connection.getRepository(Car)

    const users = await userRepo.find({ relations: ["cars"]})
    const cars = await carRepo.find({ relations: ["users"]})

    console.log("Users", JSON.stringify(users, null,"\t"))
    console.log("Cars", JSON.stringify(cars, null,"\t"))
    
  })
  .catch(console.log)
