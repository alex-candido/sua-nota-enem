import { CreateOneUserInput } from '../../../../../core/modules/v1/users-module/application/use-cases/api-use-cases/create-one-user/create-one-user.input';
import { FindOneUserInput } from '../../../../../core/modules/v1/users-module/application/use-cases/api-use-cases/find-one-user/find-one-user.input';
import { RemoveManyUsersInput } from '../../../../../core/modules/v1/users-module/application/use-cases/api-use-cases/remove-many-users/remove-many-user.input';
import { UpdateOneUserInput } from '../../../../../core/modules/v1/users-module/application/use-cases/api-use-cases/update-one-user/update-one-user.input';

export class CreateOneUserModuleDto extends CreateOneUserInput {}

export class FindOneUserModuleDto extends FindOneUserInput {}

export class RemoveManyUserModuleDto extends RemoveManyUsersInput {}

export class RemoveOneUserModuleDto {}

export class UpdateUserModuleDto extends UpdateOneUserInput {}
