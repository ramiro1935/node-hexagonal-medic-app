import { ObjectType, Repository, getRepository } from 'typeorm'
import yenv from 'yenv'
const env = yenv()

//Se pasa el tipo no el valor
export abstract class OperationRepository<T> {
  //Paraa obtener el valor (entidad)
  /*private entity: ObjectType<T>

    constructor(entity: ObjectType<T>){
        this.entity = entity
    }*/
  constructor(private entity: ObjectType<T>) {
    this.entity = entity
  }

  async getOne(id: number): Promise<T> {
    const repository: Repository<T> = getRepository(this.entity)
    const data: T = await repository.findOne({ where: { id } })
    return data
  }

  async getPage(page: number): Promise<{ data: T[]; total: number }> {
    const repository: Repository<T> = getRepository(this.entity)
    const [data, total] = await repository.findAndCount({
      skip: page * env.PAGE_SIZE,
      take: env.PAGE_SIZE,
    })
    return { data, total }
  }

  async update(id: number, medic: Partial<T>): Promise<T> {
    const repository: Repository<T> = getRepository(this.entity)
    let recordToUpdate = await repository.findOne({ where: { id } })
    recordToUpdate = { ...recordToUpdate, ...medic }
    return await repository.save(recordToUpdate)
  }

  async delete(id: number): Promise<T> {
    const repository: Repository<T> = getRepository(this.entity)
    const recordToDelete = await repository.findOne({ where: { id } })
    if (recordToDelete) {
      await repository.delete(recordToDelete)
      return recordToDelete
    }
    return null
  }

 
  async insert(data: T): Promise<T> {
    const repository: Repository<T> = getRepository(this.entity)
    const newRegister: T = await repository.save(data)
    return newRegister //medicmodel hace match con medicentity
  }

  async list(
    where: Object = {},
    relations: string[] = [],
    order: Object = {}
  ): Promise<T[]> {
    const repository: Repository<T> = getRepository(this.entity)
    const data: T[] = await repository.find({where, relations})
    return data
  }
}
