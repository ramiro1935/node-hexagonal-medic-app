import { Request, Response } from 'express'
import { UserUseCase } from '../application/user.usecase'
import { UserOperation } from '../infraestructure/user.operation'
import { UserModel } from '../domain/user.model'
import { UserRepository } from '../application/user.repository'
import { Result } from '../../shared/application/result.repository'
import { UserRequestDto, UserResponseDto } from '../application/user.dto'

const userOperation: UserRepository = new UserOperation()
const userUseCase = new UserUseCase(userOperation)
export class UserController {
  async list(request: Request, response: Response) {
    const result: Result<UserResponseDto> = await userUseCase.list()
    response.json(result)
    //return Promise.reject({ status: 404, message: 'user forbidden', stack: 'loque sea'})
  }

  async getOne(request: Request, response: Response) {
    const id = Number(request.params.id)

    const result: Result<UserResponseDto> = await userUseCase.getOne(id)
    response.json(result)
  }

  async update(request: Request, response: Response) {
    const user: Partial<UserModel> = {
      photo: 'andrea.jpg',
    }
    const id = Number(request.params.id)
    const result: Result<UserResponseDto> = await userUseCase.update(id, user)
    response.json(result)
  }

  async delete(request: Request, response: Response) {
    const id = Number(request.params.id)
    const result: Result<UserResponseDto> = await userUseCase.delete(id)
    response.json(result)
  }

  async getPage(request: Request, response: Response) {
    const page = Number(request.params.page)
    const result: Result<UserResponseDto> = await userUseCase.getPage(page)
    response.json(result)
  }

  async insert(request: Request, response: Response) {
    const { name, email, password, photo, roles } = request.body as {
      name: string
      email: string
      password: string
      photo: string
      roles: number[]
    }
    const user: Omit<UserRequestDto, 'id'> = {
      name,
      email,
      password,
      photo,
      roles,
    }
    const result: Result<UserResponseDto> = await userUseCase.insert(user)
    response.json(result)
  }
}
