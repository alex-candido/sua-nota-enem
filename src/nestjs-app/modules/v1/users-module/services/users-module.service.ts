import { Injectable } from '@nestjs/common';

import { CreateOneUserModuleDto } from '../dtos/create-one-user-module.dto';
import { FindAllUserModuleDto } from '../dtos/find-all-user-module.dto';
import { GetUserModuleDto } from '../dtos/get-one-user-module.dto';
import { RemoveUserModuleDto } from '../dtos/remove-one-user-module.dto';
import { UpdateUserModuleDto } from '../dtos/update-one-user-module.dto';

/* services: findAll, findOne, createMany, createOne,
updateMany, updateOne, removeMany, removeOne, search, filter */

@Injectable()
export class UsersModuleService {
  async findAll(_findAllUserModuleDto: FindAllUserModuleDto) {
    return `This action findAll users based on pagination`;
  }

  async findOne(_getUserModuleDto: GetUserModuleDto) {
    return `This action returns a specific user module`;
  }

  async createMany() {
    return 'This action create many users';
  }

  async createOne(_createUserModuleDto: CreateOneUserModuleDto) {
    return 'This action adds a new user module';
  }

  async updateMany() {
    return 'This action update many users';
  }

  async updateOne(_id: string, _updateUserModuleDto: UpdateUserModuleDto) {
    return `This action updates a specific user module`;
  }

  async removeMany() {
    return 'This action remove many users';
  }

  async removeOne(_removeUserModuleDto: RemoveUserModuleDto) {
    return `This action removes a specific user module`;
  }

  async filter() {
    return 'This action searches users based criteria and pagination';
  }

  async search() {
    return 'This action searches users based criteria and pagination';
  }
}
