// core/application/useCases/RegisterUserUseCase.ts
import UserEntity from '../domain/entities/UserEntity'
import AuthService from '../domain/services/AuthService'

export default class RegisterUserUseCase {
  constructor(private authService: AuthService) {}

  public async execute(
    fullName: string,
    phoneNumber: string,
    password: string,
    municipeId: number
  ) {
    try {
      const userEntity = new UserEntity(fullName, phoneNumber, password, municipeId)
      return await this.authService.register(userEntity)
    } catch (error) {
      console.error('Error during user registration:', error)
      throw error
    }
  }
}
