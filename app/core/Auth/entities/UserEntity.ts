export default class UserEntity {
  public phoneNumber: string
  public password: string

  constructor(phoneNumber: string, password: string) {
    this.phoneNumber = phoneNumber
    this.password = password
  }
}
