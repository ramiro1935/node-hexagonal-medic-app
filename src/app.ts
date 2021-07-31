import express, { Application } from 'express'
import { route as RouteUser } from './user/adapter/user.route'
import { route as RouteMedic } from './medic/adapter/medic.route'
import { ErrorHandler } from './shared/helpers/errors.handler'

const app: Application = express()

// Middlewares


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/users', RouteUser)
app.use('/medics', RouteMedic)

// Manejo de excepciones


app.use('**', ErrorHandler.notFound)
app.use(ErrorHandler.genericError)

export default app
