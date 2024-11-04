import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegisterUserUseCase from 'App/core/auth/use-cases/RegisterUserUseCase'
import AuthService from 'App/core/auth/domain/services/AuthService'
import UserRepository from '../../database/UserRepository'
import UsersRegisterValidator from 'App/Validators/UsersRegisterValidator'
import { LoginUseCase } from 'App/core/auth/use-cases/LoginUserUseCase'
export default class AuthController {
  private registerUserUseCase: RegisterUserUseCase

  constructor() {
    const userRepository = new UserRepository()
    this.registerUserUseCase = new RegisterUserUseCase(new AuthService(null, userRepository))
  }

  public async register({ request, response }: HttpContextContract) {
    try {
      const { full_name, phone_number, password, municipe_id, email} =
        await request.validate(UsersRegisterValidator)
      const user = await this.registerUserUseCase.execute(
        full_name,
        phone_number,
        password,
        municipe_id,
        email
      )
      return response.ok({ message: 'Usuário Registrado', user })
    } catch (error) {
      if (error.code === 'E_VALIDATION_FAILURE') {
        return response.status(400).send({
          message: error.messages.errors[0].message,
        })
      }
      console.error('Erro ao registrar usuário:', error)
      return response.status(500).send({
        message: 'Erro inesperado ao registrar o usuário. Por favor, tente novamente mais tarde.',
        error: error.message,
      })
    }
  }

  public async login({ auth, request, response }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])

    const userRepository = new UserRepository()
    const authService = new AuthService(auth, userRepository)
    const loginUseCase = new LoginUseCase(authService, userRepository)

    try {
      const result = await loginUseCase.execute({ email, password })
      return response.ok(result)
    } catch (error) {
      return response.unauthorized({ message: error.message })
    }
  }
}
