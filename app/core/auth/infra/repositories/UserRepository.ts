import User from '../database/models/User'
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
        email: userEntity.email,
      })

      return new UserEntity(
        user.full_name,
        user.phone_number,
        user.password,
        user.municipe_id,
        user.email
      )
    } catch (error) {
      console.error('Error while creating user in UserRepository:', error)
      throw error
    }
  }

  public async findByEmail(email: string): Promise<User | null> {
    try {
      const user = await User.query().where('email', email).first()
      return user
    } catch (error) {
      console.error('Erro ao buscar usuário por email:', error)
      return null
    }
  }
}
