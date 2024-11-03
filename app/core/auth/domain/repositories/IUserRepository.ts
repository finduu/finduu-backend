import UserEntity from '../entities/UserEntity'

export interface IUserRepository {
  create(user: UserEntity): Promise<UserEntity>
}
