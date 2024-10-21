import { Inject, Injectable } from '@nestjs/common';

import { CreateOneUserModuleDto } from './dtos/create-one-user-module.dto';
import { FindAllUserModuleDto } from './dtos/find-all-user-module.dto';
import { FindOneUserModuleDto } from './dtos/find-one-user-module.dto';
import { RemoveUserModuleDto } from './dtos/remove-one-user-module.dto';
import { UpdateUserModuleDto } from './dtos/update-one-user-module.dto';
import { SearchUserModuleDto } from './dtos/search-user-module.dto';
import { FilterUserModuleDto } from './dtos/filter-user-module.dto';

import { CreateOneUserUseCase } from '../../../../core/modules/v1/users-module/application/use-cases/create-one-user/create-one-user.use-case';
import { FindAllUsersUseCase } from '../../../../core/modules/v1/users-module/application/use-cases/find-all-users/find-all-users.use-case';
import { FindOneUserUseCase } from '../../../../core/modules/v1/users-module/application/use-cases/find-one-user/find-one-user.use-case';
import { CreateManyUsersUseCase } from '../../../../core/modules/v1/users-module/application/use-cases/create-many-users/create-many-users.use-case';
import { UpdateManyUsersUseCase } from '../../../../core/modules/v1/users-module/application/use-cases/update-many-users/update-many-users.use-case';
import { UpdateOneUserUseCase } from '../../../../core/modules/v1/users-module/application/use-cases/update-one-user/update-one-user.use-case';
import { RemoveManyUsersUseCase } from '../../../../core/modules/v1/users-module/application/use-cases/remove-many-users/remove-many-users.use-case';
import { RemoveOneUserUseCase } from '../../../../core/modules/v1/users-module/application/use-cases/remove-one-user/remove-one-user.use-case';
import { SearchUsersUseCase } from '../../../../core/modules/v1/users-module/application/use-cases/search-users/search-users.use-case';
import { FilterUsersUseCase } from '../../../../core/modules/v1/users-module/application/use-cases/filter-users/filter-users.use-case';

/* services: findAll, findOne, createMany, createOne,
updateMany, updateOne, removeMany, removeOne, search, filter */

@Injectable()
export class UsersModuleService {
  @Inject(CreateOneUserUseCase)
  private createOneUseCase: CreateOneUserUseCase;

  @Inject(FindAllUsersUseCase)
  private findAllUseCase: FindAllUsersUseCase;

  @Inject(FindOneUserUseCase)
  private findOneUseCase: FindOneUserUseCase;

  @Inject(CreateManyUsersUseCase)
  private createManyUseCase: CreateManyUsersUseCase;

  @Inject(UpdateManyUsersUseCase)
  private updateManyUseCase: UpdateManyUsersUseCase;

  @Inject(UpdateOneUserUseCase)
  private updateOneUseCase: UpdateOneUserUseCase;

  @Inject(RemoveManyUsersUseCase)
  private removeManyUseCase: RemoveManyUsersUseCase;

  @Inject(RemoveOneUserUseCase)
  private removeOneUseCase: RemoveOneUserUseCase;

  @Inject(SearchUsersUseCase)
  private searchUseCase: SearchUsersUseCase;

  @Inject(FilterUsersUseCase)
  private filterUseCase: FilterUsersUseCase;

  async findAll(_findAllUserModuleDto: FindAllUserModuleDto) {
    return await this.findAllUseCase.execute(_findAllUserModuleDto);
  }

  async findOne(_findOneUserModuleDto: FindOneUserModuleDto) {
    return await this.findOneUseCase.execute(_findOneUserModuleDto);
  }

  async createMany(_createManyUserModuleDto: CreateOneUserModuleDto[]) {
    return await this.createManyUseCase.execute(_createManyUserModuleDto);
  }

  async createOne(_createUserModuleDto: CreateOneUserModuleDto) {
    return await this.createOneUseCase.execute(_createUserModuleDto);
  }

  async updateMany(_updateManyUserModuleDto: UpdateUserModuleDto[]) {
    return await this.updateManyUseCase.execute(_updateManyUserModuleDto);
  }

  async updateOne(_id: string, _updateUserModuleDto: UpdateUserModuleDto) {
    return await this.updateOneUseCase.execute(_id, _updateUserModuleDto);
  }

  async removeMany(_ids: string[]) {
    return await this.removeManyUseCase.execute(_ids);
  }

  async removeOne(_removeUserModuleDto: RemoveUserModuleDto) {
    return await this.removeOneUseCase.execute(_removeUserModuleDto);
  }

  async filter(_filterUserModuleDto: FilterUserModuleDto) {
    return await this.filterUseCase.execute(_filterUserModuleDto);
  }

  async search(_searchUserModuleDto: SearchUserModuleDto) {
    return await this.searchUseCase.execute(_searchUserModuleDto);
  }
}
