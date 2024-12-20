import { instanceToPlain, Transform } from 'class-transformer';

import { CreateOneUserInput } from '../../../../core/modules/users-module/application/input/create-one-user.input';
import { FindOneUserInput } from '../../../../core/modules/users-module/application/input/find-one-user.input';
import { RemoveManyUsersInput } from '../../../../core/modules/users-module/application/input/remove-many-user.input';
import { UpdateOneUserInput } from '../../../../core/modules/users-module/application/input/update-one-user.input';

export class CreateOneUserModuleDto extends CreateOneUserInput {
  @Transform(({ value }) => instanceToPlain(value))
  someProperty: any;
}

export class FindOneUserModuleDto extends FindOneUserInput {}

export class RemoveManyUserModuleDto extends RemoveManyUsersInput {}

export class RemoveOneUserModuleDto {}

export class UpdateUserModuleDto extends UpdateOneUserInput {}
