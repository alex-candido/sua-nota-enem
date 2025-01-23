import { instanceToPlain, Transform } from 'class-transformer';

import { CreateManyUsersInput } from '../../../../core/modules/users-module/application/use-cases/create-many-users/create-many-users.input';
import { FilterUsersInput } from '../../../../core/modules/users-module/application/use-cases/filter-users/filter-users.input';
import { SearchUsersInput } from '../../../../core/modules/users-module/application/use-cases/search-users/search-users.input';
import { FindAllUsersInput } from '../../../../core/modules/users-module/application/use-cases/find-all-users/find-all-users.input';
import { UserFilterParams } from '../../../../core/modules/users-module/domain/repository/user.repository';
import { UpdateManyUsersInput } from '../../../../core/modules/users-module/application/use-cases/update-many-users/update-many-users.input';

export class CreateManyUsersModuleDto extends CreateManyUsersInput {
  @Transform(({ value }) => instanceToPlain(value))
  someProperty: any;
}

export class UpdateManyUsersModuleDto extends UpdateManyUsersInput {
  @Transform(({ value }) => instanceToPlain(value))
  someProperty: any;
}

export class FilterUserModuleDto extends FilterUsersInput {}

export class FiltersUserModuleDto extends UserFilterParams {}

export class FindAllUserModuleDto extends FindAllUsersInput {}

export class SearchUserModuleDto extends SearchUsersInput {}
