import { Injectable } from '@nestjs/common';

import { GetUserModuleDto } from '../dtos/get-user-module.dto';
import { CreateUserModuleDto } from '../dtos/create-user-module.dto';
import { UpdateUserModuleDto } from '../dtos/update-user-module.dto';
import { RemoveUserModuleDto } from '../dtos/remove-user-module.dto';
import { FindAllUserModuleDto } from '../dtos/find-all-user-module.dto';

@Injectable()
export class UsersModuleService {
  async findAll(_findAllUserModuleDto: FindAllUserModuleDto) {
    return `This action searches for user modules based on criteria`;
  }

  async findOne(_getUserModuleDto: GetUserModuleDto) {
    return `This action returns a specific user module`;
  }

  async create(_createUserModuleDto: CreateUserModuleDto) {
    return 'This action adds a new user module';
  }

  async updateOne(_id: string, _updateUserModuleDto: UpdateUserModuleDto) {
    return `This action updates a specific user module`;
  }

  async removeOne(_removeUserModuleDto: RemoveUserModuleDto) {
    return `This action removes a specific user module`;
  }
}
