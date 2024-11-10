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
