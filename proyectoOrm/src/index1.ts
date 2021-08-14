import {createConnection} from "typeorm";
import { User } from "./entity/User";

createConnection().then(async (connection) => {
    console.log('Connected to database')
    const user = new User()
    user.firstName = "Ramiro"
    user.lastName = "Arivilca"
    user.gender=1

    await connection.manager.save(user)

    const users = await connection.manager.find(User);
    console.log({users})
}).catch(console.log);
