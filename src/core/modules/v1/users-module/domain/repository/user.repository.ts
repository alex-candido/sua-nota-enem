import { SearchParams } from '../../../../../@seedwork/domain/repository/search-params';
import { FilterParams } from '../../../../../@seedwork/domain/repository/filter-params';
import { ListFiltersParams } from '../../../../../@seedwork/domain/repository/list-filters-params';
import { SearchableRepositoryInterface } from '../../../../../@seedwork/domain/repository/repository-contracts';
import { PaginationParams } from '../../../../../@seedwork/domain/repository/pagination-params';
import { ListResult } from '../../../../../@seedwork/domain/repository/list-result';

import { User, UserId } from '../entities/user';

export type UserKey = string;

export class UserPaginationParams extends PaginationParams {}

export class UserFilterParams extends FilterParams<UserKey> {}

export class UserSearchParams extends SearchParams<UserFilterParams> {}

export class UserListFiltersParams extends ListFiltersParams<
  Array<UserFilterParams>
> {}

export class UserListResult extends ListResult<User> {}

export interface IUserRepository
  extends SearchableRepositoryInterface<
    User,
    UserId,
    UserKey,
    UserPaginationParams,
    UserFilterParams,
    UserSearchParams,
    UserListFiltersParams,
    UserListResult
  > {}
