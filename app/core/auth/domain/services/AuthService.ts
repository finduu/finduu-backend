// core/domain/services/AuthService.ts
import { IUserRepository } from '../repositories/IUserRepository'
import UserEntity from '../entities/UserEntity'

export default class AuthService {
  constructor(private userRepository: IUserRepository) {}

  public async register(userEntity: UserEntity) {
    try {
      return await this.userRepository.create(userEntity)
    } catch (error) {
      console.error('Error in AuthService while registering user:', error)
      throw error; 
    }
  }
}
