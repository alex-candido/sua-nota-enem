import { PrismaService } from '../../../../../../../../nestjs-app/@share/database/prisma/implementations/prisma.service';

import { User } from '../../../../domain/entities/user';
import {
  IUserRepository,
  UserListFiltersParams,
  UserListResult,
  UserPaginationParams,
} from '../../../../domain/repository/user.repository';
import { BuildOrderByClause } from '../clauses/build-order-by-clause';
import { BuildWhereClause } from '../clauses/build-where.clause';
import { UserModelMapper } from '../mappers/user-model.mapper';

/* repository: findAll, findOne, createMany, createOne,
updateMany, updateOne, removeMany, removeOne, search, filter */

export class UserPrismaRepository implements IUserRepository {
  buildOrderByClause = new BuildOrderByClause();
  buildWhereClause = new BuildWhereClause();

  constructor(private prisma: PrismaService) {}

  async findAll(props: UserPaginationParams): Promise<UserListResult> {
    const { page, per_page, sort, sort_dir } = props;

    const orderByClause: { [key: string]: any } | undefined =
      this.buildOrderByClause.execute(String(sort), String(sort_dir));

    const skip = (page - 1) * per_page;
    const take = per_page;

    const [users, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        ...(skip ? { skip: +skip } : null),
        ...(take ? { take: +take } : null),
        ...(orderByClause ? { orderBy: { ...orderByClause } } : null),
      }),
      this.prisma.user.count(),
    ]);

    return new UserListResult({
      items: users.map(model => {
        return UserModelMapper.toEntity(model);
      }),
      current_page: props.page,
      per_page: props.per_page,
      total: total,
    });
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

  async search(): Promise<UserListResult> {
    return new UserListResult({
      items: [],
      current_page: 1,
      per_page: 5,
      total: 10,
    });
  }

  async filter(props: UserListFiltersParams): Promise<any> {
    const { filters, page, per_page, sort, sort_dir } = props;
    console.log({ filters, page, per_page, sort, sort_dir });

    const whereClause = await this.buildWhereClause.execute(filters);

    const orderByClause: { [key: string]: any } | undefined =
      this.buildOrderByClause.execute(String(sort), String(sort_dir));

    const skip = (page - 1) * per_page;
    const take = per_page;

    const [users, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        ...(filters ? whereClause : null),
        ...(skip ? { skip: +skip } : null),
        ...(take ? { take: +take } : null),
        ...(orderByClause ? { orderBy: { ...orderByClause } } : null),
      }),
      this.prisma.user.count(),
    ]);

    return new UserListResult({
      items: users.map(model => {
        return UserModelMapper.toEntity(model);
      }),
      current_page: props.page,
      per_page: props.per_page,
      total: total,
    });
  }
}
