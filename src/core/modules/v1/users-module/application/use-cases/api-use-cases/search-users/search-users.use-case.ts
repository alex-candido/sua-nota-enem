import IUseCase from '../../../../../../../../core/@seedwork/application/interfaces/use-case.interface';

import {
  IUserRepository,
  UserListResult,
  UserSearchParams,
} from '../../../../domain/repository/user.repository';
import { ListUsersOutput } from '../../../output/list-users.output';
import { PaginationOutput } from '../../../output/pagination-output';
import { UserOutput } from '../../../output/user.output';
import { SearchUsersInput } from './search-user.input';

export class SearchUsersUseCase
  implements IUseCase<SearchUsersInput, ListUsersOutput>
{
  constructor(private readonly userRepo: IUserRepository) {}
  async execute(input: SearchUsersInput): Promise<ListUsersOutput> {
    const params = new UserSearchParams(input);
    const searchResult = await this.userRepo.search(params);
    return this.toOutput(searchResult);
  }

  private toOutput(listResult: UserListResult): ListUsersOutput {
    const { items: _items } = listResult;
    const items = _items.map(i => {
      return UserOutput.toOutput(i);
    });
    return PaginationOutput.toOutput(items, listResult);
  }
}
