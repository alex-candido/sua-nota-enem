import { PrismaService } from '../../../../../../../nestjs-app/@share/database/prisma/implementations/prisma.service';

import { User, UserId } from '../../../../domain/entities/user';
import {
  IUserRepository,
  UserListFiltersParams,
  UserListResult,
  UserPaginationParams,
  UserSearchParams,
} from '../../../../domain/repository/user.repository';

import { BuildOrderByClause } from '../clauses/build-order-by-clause';
import { BuildTransactionClause } from '../clauses/build-transaction-clause';
import { BuildWhereClause } from '../clauses/build-where.clause';
import { UserModelMapper } from '../mappers/user-model.mapper';

/* repository: findAll, findOne, createMany, createOne,
updateMany, updateOne, removeMany, removeOne, search, filter */

export class UserPrismaRepository implements IUserRepository {
  buildOrderByClause = new BuildOrderByClause();
  buildWhereClause = new BuildWhereClause();
  buildTransactionClause = new BuildTransactionClause();

  constructor(private prisma: PrismaService) {}

  async findAll(props: UserPaginationParams): Promise<UserListResult> {
    const { page, per_page, sort, sort_dir } = props;

    const orderByClause: { [key: string]: any } | undefined =
      this.buildOrderByClause.execute(String(sort), String(sort_dir));

    const [users, total] = await this.buildTransactionClause.execute(
      this.prisma,
      page,
      per_page,
      orderByClause,
    );

    return new UserListResult({
      items: users.map(model => {
        return UserModelMapper.toEntity(model);
      }),
      current_page: props.page,
      per_page: props.per_page,
      total: total,
    });
  }

  async findOne(id: string | UserId): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: String(id),
      },
    });

    return UserModelMapper.toEntity(user);
  }

  async findById(id: string | UserId): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: String(id),
      },
    });

    return UserModelMapper.toEntity(user);
  }

  async findByIds(ids: string[] | UserId[]): Promise<User[] | null> {
    const _ids = ids.map(id => id.id);

    const users = await this.prisma.user.findMany({
      where: {
        id: {
          in: _ids,
        },
      },
    });

    return users.map(model => {
      return UserModelMapper.toEntity(model);
    });
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

  async updateMany(entities: User[]): Promise<any> {
    const modelsProps = entities.map(entity => {
      const model = UserModelMapper.toModel(entity);
      const { id: _id, ...updateData } = model;
      return { id: entity.id, updateData };
    });

    await this.prisma.$transaction(async tx => {
      await Promise.allSettled(
        modelsProps.map(modelProps => {
          return tx.user.update({
            where: {
              id: modelProps.id,
            },
            data: {
              ...modelProps.updateData,
            },
          });
        }),
      );
    });
  }

  async updateOne(entity: User): Promise<User> {
    const modelProps = UserModelMapper.toModel(entity);

    const user = await this.prisma.user.update({
      where: {
        id: entity.props.id,
      },
      data: {
        ...modelProps,
      },
    });

    return UserModelMapper.toEntity(user);
  }

  async removeMany(ids: UserId[]): Promise<void> {
    const _ids = ids.map(id => id.toString());

    await this.prisma.user.deleteMany({
      where: { id: { in: _ids } },
    });
  }

  async removeOne(id: UserId): Promise<void> {
    const _id = id.toString();
    await this.prisma.user.delete({
      where: { id: _id },
    });
  }

  async search(props: UserSearchParams): Promise<UserListResult> {
    const { filter, page, per_page, sort, sort_dir } = props;

    const whereClause = await this.buildWhereClause.execute(filter);

    const orderByClause: { [key: string]: any } | undefined =
      this.buildOrderByClause.execute(String(sort), String(sort_dir));

    const [users, total] = await this.buildTransactionClause.execute(
      this.prisma,
      page,
      per_page,
      orderByClause,
      filter,
      whereClause,
    );

    return new UserListResult({
      items: users.map(model => {
        return UserModelMapper.toEntity(model);
      }),
      current_page: props.page,
      per_page: props.per_page,
      total: total,
    });
  }

  async filter(props: UserListFiltersParams): Promise<any> {
    const { filters, page, per_page, sort, sort_dir } = props;

    const whereClause = await this.buildWhereClause.execute(filters);

    const orderByClause: { [key: string]: any } | undefined =
      this.buildOrderByClause.execute(String(sort), String(sort_dir));

    const skip = (page - 1) * per_page;
    const take = per_page;

    const [users, total] = await this.buildTransactionClause.execute(
      this.prisma,
      skip,
      take,
      orderByClause,
      filters,
      whereClause,
    );

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
