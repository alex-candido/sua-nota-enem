import IUseCase from '../../../../../../core/@seedwork/application/interfaces/use-case.interface';

import {
  IUserRepository,
  UserListResult,
  UserPaginationParams,
} from '../../../domain/repository/user.repository';

import { ListUsersOutput } from '../../output/list-users.output';
import { PaginationOutput } from '../../output/pagination-output';
import { UserOutput } from '../../output/user.output';
import { FindAllUsersInput } from '../find-all-users/find-all-users.input';

export class FindAllUsersUseCase
  implements IUseCase<FindAllUsersInput, ListUsersOutput>
{
  constructor(private readonly userRepo: IUserRepository) {}
  async execute(input: FindAllUsersInput): Promise<ListUsersOutput | any> {
    const params = new UserPaginationParams(input);
    const findAllResult = await this.userRepo.findAll(params);
    return this.toOutput(findAllResult);
  }

  private toOutput(ListResult: UserListResult) {
    const { items: _items } = ListResult;
    const items = _items.map(i => {
      return UserOutput.toOutput(i);
    });
    return PaginationOutput.toOutput(items, ListResult);
  }
}
