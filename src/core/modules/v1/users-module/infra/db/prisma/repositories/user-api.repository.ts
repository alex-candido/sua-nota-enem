import { PrismaService } from '../../../../../../../../nestjs-app/@share/database/prisma/implementations/prisma.service';

import { User } from '../../../../domain/entities/user';
import { UserModelMapper } from '../mappers/user-model.mapper';

/* repository: findAll, findOne, createMany, createOne,
updateMany, updateOne, removeMany, removeOne, search, filter */

export class UserPrismaRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<any> {
    return {};
  }

  async findOne(): Promise<any> {
    return {};
  }

  async createMany(entities: User[]): Promise<void> {
    const modelsProps = entities.map(entity => UserModelMapper.toModel(entity));

    await this.prisma.user.createMany({
      data: modelsProps,
    });
  }

  async createOne(entity: User): Promise<User> {
    const modelProps = UserModelMapper.toModel(entity);

    const user = await this.prisma.user.create({
      data: {
        ...modelProps,
      },
    });

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
