import User from './models/User'
import UserEntity from '../../domain/entities/UserEntity'
import { IUserRepository } from '../../domain/repositories/IUserRepository'

export default class UserRepository implements IUserRepository {
  public async create(userEntity: UserEntity): Promise<UserEntity> {
    try {
      const user = await User.create({
        full_name: userEntity.fullName,
        phone_number: userEntity.phoneNumber,
        password: userEntity.password,
        municipe_id: userEntity.municipeId,
      })

      return new UserEntity(user.full_name, user.phone_number, user.password, user.municipe_id)
    } catch (error) {
      console.error('Error while creating user in UserRepository:', error)
      throw error 
    }
  }
}
