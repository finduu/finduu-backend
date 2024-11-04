import { IAuthService } from '../domain/ports/IAuthService'
import { IUserRepository } from '../domain/repositories/IUserRepository'
import AuthService from '../domain/services/AuthService'
import User from '../infra/database/models/User'
import UserRepository from '../infra/repositories/UserRepository'

interface LoginInput {
  email: string
  password: string
}

export class LoginUseCase {
  private authService: AuthService
  private userRepository: UserRepository

  constructor(authService: AuthService, userRepository: UserRepository) {
    this.authService = authService
    this.userRepository = userRepository
  }

  public async execute({ email, password }: LoginInput): Promise<{ token: string } | null> {
    const authResult = await this.authService.login(email, password)
    if (!authResult) {
      throw new Error('Invalid credentials')
    }
    return authResult
  }
}
