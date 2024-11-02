import UserEntity from '../entities/UserEntity'

export interface IAuthService {
  login(phoneNumber: string, password: string): Promise<{ token: any }>
  register(userData: UserEntity): Promise<any>
}
