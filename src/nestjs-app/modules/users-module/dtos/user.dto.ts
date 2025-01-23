import { instanceToPlain, Transform } from 'class-transformer';

import { CreateOneUserInput } from '../../../../core/modules/users-module/application/use-cases/create-one-user/create-one-user.input';
import { FindOneUserInput } from '../../../../core/modules/users-module/application/use-cases/find-one-user/find-one-user.input';
import { RemoveManyUsersInput } from '../../../../core/modules/users-module/application/use-cases/remove-many-users/remove-many-users.input';
import { UpdateOneUserInput } from '../../../../core/modules/users-module/application/use-cases/update-one-user/update-one-user.input';
import { RemoveOneUserInput } from '../../../../core/modules/users-module/application/use-cases/remove-one-user/remove-one-user.input';

export class CreateOneUserModuleDto extends CreateOneUserInput {
  @Transform(({ value }) => instanceToPlain(value))
  someProperty: any;
}

export class FindOneUserModuleDto extends FindOneUserInput {}

export class RemoveManyUserModuleDto extends RemoveManyUsersInput {}

export class RemoveOneUserModuleDto extends RemoveOneUserInput {}

export class UpdateUserModuleDto extends UpdateOneUserInput {}
