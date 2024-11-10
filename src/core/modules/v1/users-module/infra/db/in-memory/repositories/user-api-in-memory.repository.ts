import { PrismaClient, User } from '@prisma/client';
import { PrismaService } from '../../../../../../../../nestjs-app/@share/database/prisma/implementations/prisma.service';

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

  async createOne(entity: any): Promise<any> {
    const user = new PrismaClient().user.fields;

    Object.assign(user, {
      ...entity,
    });

    this.users.push(user);

    return user;
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
