import { Prisma, User as PrismaUser } from '@prisma/client';

import { User, UserId } from '../../../../domain/entities/user';

export class UserModelMapper {
  static toModel(entity: User): Prisma.UserUncheckedCreateInput {
    const {
      id: _id,
      created_at: _createdAt,
      updated_at: _updatedAt,
      ...otherData
    } = entity.toJSON();
    return {
      ...otherData,
    };
  }

  static toEntity(model: PrismaUser): User {
    const { id, ...otherData } = model;
    const user = new User({
      id: String(new UserId(id)),
      ...otherData,
    });

    return user;
  }
}
