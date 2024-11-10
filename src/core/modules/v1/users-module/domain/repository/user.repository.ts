import { FilterParams } from '../../../../../@seedwork/domain/repository/filter-params';
import { ListFiltersParams } from '../../../../../@seedwork/domain/repository/list-filters-params';
import { SearchableRepositoryInterface } from '../../../../../@seedwork/domain/repository/repository-contracts';
import { User, UserId } from '../entities/user';

export type UserKey = string;

export class UserFiltersParams extends FilterParams<UserKey> {}

export class UserListFiltersParams extends ListFiltersParams<
  Array<UserFiltersParams>
> {}

export class UserSearchParams extends SearchParams<UserFiltersParams> {}

// export class UserSearchParams extends

export interface IUserRepository
  extends SearchableRepositoryInterface<User, UserId> {}
