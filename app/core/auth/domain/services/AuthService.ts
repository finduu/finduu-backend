import { IUserRepository } from '../repositories/IUserRepository'
import UserEntity from '../entities/UserEntity'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class AuthService {
  private auth
  private userRepository: IUserRepository

  constructor(auth: HttpContextContract['auth'] | null, userRepository: IUserRepository) {
    this.auth = auth
    this.userRepository = userRepository
  }

  public async register(userEntity: UserEntity) {
    try {
      return await this.userRepository.create(userEntity)
    } catch (error) {
      console.error('Error in AuthService while registering user:', error)
      throw error
    }
  }

  public async login(email: string, password: string): Promise<{ token: string } | null> {
    console.log(email, password)

    try {
      const token = await this.auth.use('api').attempt(email, password, {
        expiresIn: '7 days',
      })
    
      console.log(token)
    
      return { token: token.toJSON().token }
    } catch (error) {
      console.error('Erro ao tentar autenticar:', error)
      return null
    }
    
  }
}
