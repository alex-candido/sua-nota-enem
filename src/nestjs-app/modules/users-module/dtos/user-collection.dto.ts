import { instanceToPlain, Transform } from 'class-transformer';

import { CreateManyUsersInput } from '../../../../core/modules/users-module/application/input/create-many-users.input';
import { FilterUsersInput } from '../../../../core/modules/users-module/application/input/filter-user.input';
import { SearchUsersInput } from '../../../../core/modules/users-module/application/input/search-user.input';
import { FindAllUsersInput } from '../../../../core/modules/users-module/application/input/find-all-users.input';
import { UserFilterParams } from '../../../../core/modules/users-module/domain/repository/user.repository';

export class CreateManyUsersModuleDto extends CreateManyUsersInput {
  @Transform(({ value }) => instanceToPlain(value))
  someProperty: any;
}

export class UpdateManyUsersModuleDto {}

export class FilterUserModuleDto extends FilterUsersInput {}

export class FiltersUserModuleDto extends UserFilterParams {}

export class FindAllUserModuleDto extends FindAllUsersInput {}

export class SearchUserModuleDto extends SearchUsersInput {}
