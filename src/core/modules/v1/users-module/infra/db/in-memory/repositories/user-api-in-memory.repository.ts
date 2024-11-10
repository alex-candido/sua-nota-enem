import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '../../../../../../../../nestjs-app/@share/database/prisma/implementations/prisma.service';

import { User } from '../../../../domain/entities/user';
import { UserModelMapper } from '../mappers/user-model.mapper';

/* repository: findAll, findOne, createMany, createOne,
updateMany, updateOne, removeMany, removeOne, search, filter */

export class UserApiInMemoryRepository {
  private users: User[] | any = [];

  constructor(private _prisma: PrismaService) {}

  async findAll(): Promise<any> {
    return {};
  }

  async findOne(): Promise<any> {
    return {};
  }

  async createMany(): Promise<any> {
    return {};
  }

  async createOne(entity: User): Promise<User> {
    const modelProps = UserModelMapper.toModel(entity);

    const user = Object.assign({
      id: uuidv4(),
      ...modelProps,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);

    return UserModelMapper.toEntity(user);
  }

  async updateMany(): Promise<any> {
    return {};
  }

  async updateOne(): Promise<any> {
    return {};
  }

  async removeMany(): Promise<any> {
    return {};
  }

  async removeOne(): Promise<any> {
    return {};
  }

  async search(): Promise<any> {
    return {};
  }

  async filter(): Promise<any> {
    return {};
  }
}
