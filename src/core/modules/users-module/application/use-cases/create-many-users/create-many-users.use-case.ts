import IUseCase from '../../../../../../core/@seedwork/application/interfaces/use-case.interface';
import { User } from '../../../domain/entities/user';
import { IUserRepository } from '../../../domain/repository/user.repository';
import { CreateManyUsersInput } from '../create-many-users/create-many-users.input';

export class CreateManyUsersUseCase
  implements IUseCase<CreateManyUsersInput[], any>
{
  constructor(private readonly userRepo: IUserRepository) {}
  async execute(input: CreateManyUsersInput[]): Promise<void> {
    const users = input.map(userInput => User.create(userInput));
    await this.userRepo.createMany(users);
  }
}
