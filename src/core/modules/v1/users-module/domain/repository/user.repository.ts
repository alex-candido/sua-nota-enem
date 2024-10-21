export interface IUserRepository {
  findByEmail(): Promise<any>;
}
