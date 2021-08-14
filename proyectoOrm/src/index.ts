import { createConnection, getConnection, getRepository } from 'typeorm'
import { Car } from './entity/Car'
import { User } from './entity/User'

createConnection()
  .then(async connection => {
    /* getRepository(User)
    const users = getRepository(User)
      .createQueryBuilder('usuario')
      .where('usuario.id = :id', { id: 1 })
      //.getOne()
      .getSql()

    const obj = getConnection()
      .createQueryBuilder()
      .select(['usuario.firstName', 'usuario.lastName'])
      .from(User, 'usuario')
      .where("usuario.id = :id", { id: 1})
      
      const userOne = await obj.getOne()
      const userOneSQL = await obj.getSql()
    console.log({ userOne }, {userOneSQL})*/

    const update = await getRepository(User)
      .createQueryBuilder()
      .update(User)
      .set({ firstName: 'Denis', lastName: 'Miranda' })
      .where({ id: 1 })
      .execute()
    console.log({ update })
    const users = await getRepository(User).find()
    console.log({ users })

    /*const userDeleted = await getRepository(User)
      .createQueryBuilder()
      .delete()
      .from(User)
      .where({ id: 2 })
      .execute()
    console.log({ userDeleted })
    const usersAtEnd = await getRepository(User).find()
    console.log({ usersAtEnd })*/
  })
  .catch(console.log)
