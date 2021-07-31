import express, { Request, Response } from 'express'
import { ErrorHandler } from '../../shared/helpers/errors.handler'
import { merge } from '../../shared/helpers/parameters.handler'
import { validator } from '../../shared/helpers/validator.handler'
import { schemas } from '../domain/medic.schema'
import { MedicController } from './medic.controller'

const route = express.Router()
const medicController = new MedicController()

route.get('/', ErrorHandler.asyncError(medicController.list))
route.post(
  '/',
  merge(),
  validator(schemas.INSERT),
  ErrorHandler.asyncError(medicController.insert)
)
route.get(
  '/page/:page',
  merge(),
  validator(schemas.GET_PAGE),
  ErrorHandler.asyncError(medicController.getPage)
)
route.get(
  '/:id',
  merge(),
  validator(schemas.GET_ONE),
  ErrorHandler.asyncError(medicController.getOne)
)
route.put(
  '/:id',
  merge(),
  validator(schemas.UPDATE),
  ErrorHandler.asyncError(medicController.update)
)
route.delete(
  '/:id',
  merge(),
  validator(schemas.DELETE),
  ErrorHandler.asyncError(medicController.delete)
)

export { route }
