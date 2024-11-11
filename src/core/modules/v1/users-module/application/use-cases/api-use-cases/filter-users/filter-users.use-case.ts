import IUseCase from '../../../../../../../../core/@seedwork/application/interfaces/use-case.interface';

import { FilterUsersInput } from './filter-user.input';

import {
  IUserRepository,
  UserListFiltersParams,
  UserListResult,
} from '../../../../domain/repository/user.repository';
import { ListUsersOutput } from '../../../output/list-users.output';
import { UserOutput } from '../../../output/user.output';
import { PaginationOutput } from '../../../output/pagination-output';

export class FilterUsersUseCase
  implements IUseCase<FilterUsersInput, ListUsersOutput>
{
  constructor(private readonly userRepo: IUserRepository) {}

  async execute(input: FilterUsersInput): Promise<ListUsersOutput> {
    const params = new UserListFiltersParams(input);
    const filterResult = await this.userRepo.filter(params);
    return this.toOutput(filterResult);
  }

  private toOutput(listResult: UserListResult): ListUsersOutput {
    const { items: _items } = listResult;
    const items = _items.map(i => {
      return UserOutput.toOutput(i);
    });
    return PaginationOutput.toOutput(items, listResult);
  }
}
