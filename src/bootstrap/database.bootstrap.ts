import { Connection, createConnection } from 'typeorm'
import { IServerBootstrap } from './server.interface'
import yenv from 'yenv'

const env = yenv()
let client: Connection
export class DatabaseBootstrap implements IServerBootstrap {
  async initialize(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      const parametersConnection = {
        type: env.DATABASE.MYSQL.TYPE,
        host: env.DATABASE.MYSQL.HOST,
        port: env.DATABASE.MYSQL.PORT,
        username: env.DATABASE.MYSQL.USERNAME,
        password: env.DATABASE.MYSQL.PASSWORD,
        database: env.DATABASE.MYSQL.DATABASE,
        entities: [env.DATABASE.MYSQL.ENTITIES],
        synchronize: env.DATABASE.MYSQL.SYNCHRONIZE,
        extra: { connectionLimit: env.DATABASE.MYSQL.EXTRA_CONNECTIONS}

      }
      createConnection(parametersConnection)
        .then(connection => {
          console.log('Connected to database')
          client = connection
          resolve(true)
        })
        .catch(error => {
          console.log('Error connecting to database', error)
          reject(error)
        })
    })
    return promise
  }

  closeConnection(): void {
    try {
        client.close()
    }
    catch(error) {
        console.log('Error at closing database', error)
        throw new Error(error)
    }
  }
}
