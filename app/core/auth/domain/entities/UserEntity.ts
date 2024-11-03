export default class UserEntity {
  constructor(
    public fullName: string,
    public phoneNumber: string,
    public password: string,
    public municipeId: number
  ) {}
}
