// app/Core/Auth/Services/AuthService.ts
import { IAuthService } from '../interfaces/IAuthService'
import UserEntity from '../entities/UserEntity'
import User from 'App/Models/User'
import { AuthContract } from '@ioc:Adonis/Addons/Auth'

export default class AuthService implements IAuthService {
  constructor(private auth: AuthContract) {}

  public async login(phoneNumber: string, password: string) {
    const token = await this.auth.use('api').attempt(phoneNumber, password)
    return { token }
  }

  public async register(userData: UserEntity) {
    const user = await User.create({
      phone_number: userData.phoneNumber,
      password: userData.password,
    })
    return user
  }
}
