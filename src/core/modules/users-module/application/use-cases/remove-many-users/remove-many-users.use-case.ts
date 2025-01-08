import IUseCase from '../../../../../../core/@seedwork/application/interfaces/use-case.interface';
import { IUserRepository } from '../../../domain/repository/user.repository';
import { RemoveManyUsersInput } from '../remove-many-users/remove-many-users.input';
import { UserId } from '../../../domain/entities/user';

export class RemoveManyUsersUseCase
  implements IUseCase<RemoveManyUsersInput, any>
{
  constructor(private readonly userRepo: IUserRepository) {}
  async execute(input: RemoveManyUsersInput) {
    const userIds = input.ids.map(id => new UserId(id));
    return await this.userRepo.removeMany(userIds);
  }
}
