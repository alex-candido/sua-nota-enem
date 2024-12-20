import { Inject, Injectable } from '@nestjs/common';

import {
  CreateManyUsersModuleDto,
  FilterUserModuleDto,
  FindAllUserModuleDto,
  SearchUserModuleDto,
  UpdateManyUsersModuleDto,
} from './dtos/user-collection.dto';

import {
  CreateOneUserModuleDto,
  FindOneUserModuleDto,
  RemoveManyUserModuleDto,
  RemoveOneUserModuleDto,
  UpdateUserModuleDto,
} from './dtos/user.dto';

import { CreateManyUsersUseCase } from '../../../core/modules/users-module/application/use-cases/create-many-users.use-case';
import { FindAllUsersUseCase } from '../../../core/modules/users-module/application/use-cases/find-all-users.use-case';
import { FindOneUserUseCase } from '../../../core/modules/users-module/application/use-cases/find-one-user.use-case';
import { UpdateManyUsersUseCase } from '../../../core/modules/users-module/application/use-cases/update-many-users.use-case';
import { UpdateOneUserUseCase } from '../../../core/modules/users-module/application/use-cases/update-one-user.use-case';
import { RemoveManyUsersUseCase } from '../../../core/modules/users-module/application/use-cases/remove-many-users.use-case';
import { RemoveOneUserUseCase } from '../../../core/modules/users-module/application/use-cases/remove-one-user.use-case';
import { SearchUsersUseCase } from '../../../core/modules/users-module/application/use-cases/search-users.use-case';
import { FilterUsersUseCase } from '../../../core/modules/users-module/application/use-cases/filter-users.use-case';
import { CreateOneUserUseCase } from '../../../core/modules/users-module/application/use-cases/create-one-user.use-case';

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

  async findAll(findAllUserModuleDto: FindAllUserModuleDto) {
    return await this.findAllUseCase.execute(findAllUserModuleDto);
  }

  async findOne(findOneUserModuleDto: FindOneUserModuleDto) {
    return await this.findOneUseCase.execute(findOneUserModuleDto);
  }

  async createMany(createManyUserModuleDto: CreateManyUsersModuleDto[]) {
    return await this.createManyUseCase.execute(createManyUserModuleDto);
  }

  async createOne(createUserModuleDto: CreateOneUserModuleDto) {
    return await this.createOneUseCase.execute(createUserModuleDto);
  }

  async updateMany(updateManyUserModuleDto: UpdateManyUsersModuleDto[]) {
    return await this.updateManyUseCase.execute(updateManyUserModuleDto);
  }

  async updateOne(id: string, updateUserModuleDto: UpdateUserModuleDto) {
    return await this.updateOneUseCase.execute(id, updateUserModuleDto);
  }

  async removeMany(removeManyUserModuleDto: RemoveManyUserModuleDto) {
    return await this.removeManyUseCase.execute(removeManyUserModuleDto);
  }

  async removeOne(removeUserModuleDto: RemoveOneUserModuleDto) {
    return await this.removeOneUseCase.execute(removeUserModuleDto);
  }

  async filter(filterUserModuleDto: FilterUserModuleDto) {
    return await this.filterUseCase.execute(filterUserModuleDto);
  }

  async search(searchUserModuleDto: SearchUserModuleDto) {
    return await this.searchUseCase.execute(searchUserModuleDto);
  }
}
