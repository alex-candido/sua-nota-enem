import { Inject, Injectable } from '@nestjs/common';

import { CreateManyUsersModuleDto } from './dtos/create-many-users-module.dto';
import { CreateOneUserModuleDto } from './dtos/create-one-user-module.dto';
import { FilterUserModuleDto } from './dtos/filter-user-module.dto';
import { FindAllUserModuleDto } from './dtos/find-all-user-module.dto';
import { FindOneUserModuleDto } from './dtos/find-one-user-module.dto';
import { RemoveOneUserModuleDto } from './dtos/remove-one-user-module.dto';
import { SearchUserModuleDto } from './dtos/search-user-module.dto';
import { UpdateUserModuleDto } from './dtos/update-one-user-module.dto';

import {
  CreateManyUsersUseCase,
  CreateOneUserUseCase,
  FilterUsersUseCase,
  FindAllUsersUseCase,
  FindOneUserUseCase,
  RemoveManyUsersUseCase,
  RemoveOneUserUseCase,
  SearchUsersUseCase,
  UpdateManyUsersUseCase,
  UpdateOneUserUseCase,
} from '../../../../core/modules/v1/users-module/application/use-cases/api-use-cases';
import { RemoveManyUserModuleDto } from './dtos/remove-many-user-module.dto';

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

  async createMany(createManyUsersModuleDto: CreateManyUsersModuleDto[]) {
    return await this.createManyUseCase.execute(createManyUsersModuleDto);
  }

  async createOne(createUserModuleDto: CreateOneUserModuleDto) {
    return await this.createOneUseCase.execute(createUserModuleDto);
  }

  async updateMany(updateManyUserModuleDto: UpdateUserModuleDto[]) {
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
