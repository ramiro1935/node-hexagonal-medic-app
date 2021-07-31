import express from 'express'
import { ErrorHandler } from '../../shared/helpers/errors.handler'
import { UserController } from './user.controller'
import { schemas } from './user.schema'
import { merge } from '../../shared/helpers/parameters.handler'
import { validator } from '../../shared/helpers/validator.handler'

const route = express.Router()
const userController = new UserController()

route.get('/', ErrorHandler.asyncError(userController.list))
route.post(
  '/',
  merge(),
  validator(schemas.INSERT),
  ErrorHandler.asyncError(userController.insert)
)
route.get(
  '/page/:page',
  merge(),
  validator(schemas.GET_PAGE),
  ErrorHandler.asyncError(userController.getPage)
)

route.get(
  '/:id',
  merge(),
  validator(schemas.GET_ONE),
  ErrorHandler.asyncError(userController.getOne)
)
route.put(
  '/:id',
  merge(),
  validator(schemas.UPDATE),
  ErrorHandler.asyncError(userController.update)
)
route.delete(
  '/:id',
  merge(),
  validator(schemas.DELETE),
  ErrorHandler.asyncError(userController.delete)
)

export { route }
