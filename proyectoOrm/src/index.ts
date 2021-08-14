import {
  Brackets,
  createConnection,
  getConnection,
  getRepository,
} from 'typeorm'
import { Car } from './entity/Car'
import { User } from './entity/User'

createConnection()
  .then(async connection => {
    const user = await getRepository(User)
      .createQueryBuilder('user')
      .where('user.id = :id', { id: 1 })
      .getOne()

    const userParameters = await getRepository(User)
      .createQueryBuilder('user')
      .where('user.id =:id')
      .setParameters({ id: 1 })
      .getOne()
    console.log({ userParameters })

    const userAge = await getRepository(User)
      .createQueryBuilder('user')
      .where('user.age > :min && user.age < :max', { min: 20, max: 26 })
      .getMany()
    console.log({ userAge })

    const userInAge = await getRepository(User)
      .createQueryBuilder('user')
      .where('user.age IN(:...ages)', { ages: [26] })
      .getMany()
    console.log({ userInAge })

    const userORWhere = await getRepository(User)
      .createQueryBuilder('user')
      .where('user.age > :min', { min: 20 })
      .orWhere('user.firstName = :name', { name: 'Denis' })
      .getMany()
    console.log({ userORWhere })

    const userBrackets = getRepository(User)
      .createQueryBuilder('user')
      .where('user.id > :id', { id: 1 })
      .andWhere(
        new Brackets(qb => {
          qb.where('user.firstName = :firstName', {
            firstName: 'Denis',
          }).orWhere('user.age > :age', {age: 20})
        })
      )
      
    console.log(await userBrackets.execute())
    console.log(userBrackets.getSql())

  })
  .catch(console.log)
