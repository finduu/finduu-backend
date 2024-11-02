import AuthService from 'App/core/Auth/service/AuthService'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersRegisterValidator from 'App/Validators/UsersRegisterValidator'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ request, response, auth }: HttpContextContract) {
    try {
      if (!auth) {
        return response.status(400).send({ message: 'Auth not available' })
      }
      const authService = new AuthService(auth)
      const { phone_number, password } = request.all()
      const token = await authService.login(phone_number, password)
      const user = auth.user!

      return response.ok({ token, user, message: 'Login Efectuado Com Sucesso' })
    } catch (error) {
      return response.status(500).send({ message: 'Erro ao efetuar login.' })
    }
  }

  public async register({ request, response }: HttpContextContract) {
    try {
      const data = await request.validate(UsersRegisterValidator)
      const user = await User.create(data)
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
}
