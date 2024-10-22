import { PrismaService } from '../../../../../../../../nestjs-app/@share/database/prisma/implementations/prisma.service';

/* repository: findAll, findOne, createMany, createOne,
updateMany, updateOne, removeMany, removeOne, search, filter */

export class UserPrismaRepository {
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

  async createOne(): Promise<any> {
    return {};
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
