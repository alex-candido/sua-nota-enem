import { instanceToPlain, Transform } from 'class-transformer';

import { CreateManyUsersInput } from '../../../../../core/modules/v1/users-module/application/use-cases/api-use-cases/create-many-users/create-many-users.input';
import { FilterUsersInput } from '../../../../../core/modules/v1/users-module/application/use-cases/api-use-cases/filter-users/filter-user.input';
import { SearchUsersInput } from '../../../../../core/modules/v1/users-module/application/use-cases/api-use-cases/search-users/search-user.input';
import { FindAllUsersInput } from '../../../../../core/modules/v1/users-module/application/use-cases/api-use-cases/find-all-users/find-all-users.input';
import { UserFilterParams } from '../../../../../core/modules/v1/users-module/domain/repository/user.repository';

export class CreateManyUsersModuleDto extends CreateManyUsersInput {
  @Transform(({ value }) => instanceToPlain(value))
  someProperty: any;
}

export class UpdateManyUsersModuleDto {}

export class FilterUserModuleDto extends FilterUsersInput {}

export class FiltersUserModuleDto extends UserFilterParams {}

export class FindAllUserModuleDto extends FindAllUsersInput {}

export class SearchUserModuleDto extends SearchUsersInput {}
