import { Request, Response, NextFunction } from 'express'
import { IError } from "./errors.handler"

export const validator = (schema: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        console.log(res.locals.parameters)
      const result = schema.validate(res.locals.parameters)
      if (result.hasOwnProperty('error')) {
        const listError: string[] = []
  
        for (const detail of result.error.details) {
          listError.push(detail.message)
        }
  
        if (listError.length > 0) {
          const error: IError = new Error('Error in parameters')
          error.status = 411
          error.message = 'Error in parameters'
          error.name = 'Error Parameters'
          error.stack = listError.join(', ')
          return next(error)
        }
      }
      next()
    }
  }
  