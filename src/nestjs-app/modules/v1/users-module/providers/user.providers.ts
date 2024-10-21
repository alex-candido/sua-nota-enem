import { PrismaService } from '../../../../../nestjs-app/@share/database/prisma/implementations/prisma.service';
import { UserPrismaRepository } from '../../../../../core/modules/v1/users-module/infra/db/prisma/repositories/user-prisma.repository';
import { IUserRepository } from '../../../../../core/modules/v1/users-module/domain/repository/user.repository';

import { CreateOneUserUseCase } from '../../../../../core/modules/v1/users-module/application/use-cases/create-one-user/create-one-user.use-case';
import { FindAllUsersUseCase } from '../../../../../core/modules/v1/users-module/application/use-cases/find-all-users/find-all-users.use-case';
import { FindOneUserUseCase } from '../../../../../core/modules/v1/users-module/application/use-cases/find-one-user/find-one-user.use-case';
import { CreateManyUsersUseCase } from '../../../../../core/modules/v1/users-module/application/use-cases/create-many-users/create-many-users.use-case';
import { UpdateManyUsersUseCase } from '../../../../../core/modules/v1/users-module/application/use-cases/update-many-users/update-many-users.use-case';
import { UpdateOneUserUseCase } from '../../../../../core/modules/v1/users-module/application/use-cases/update-one-user/update-one-user.use-case';
import { RemoveManyUsersUseCase } from '../../../../../core/modules/v1/users-module/application/use-cases/remove-many-users/remove-many-users.use-case';
import { RemoveOneUserUseCase } from '../../../../../core/modules/v1/users-module/application/use-cases/remove-one-user/remove-one-user.use-case';
import { SearchUsersUseCase } from '../../../../../core/modules/v1/users-module/application/use-cases/search-users/search-users.use-case';
import { FilterUsersUseCase } from '../../../../../core/modules/v1/users-module/application/use-cases/filter-users/filter-users.use-case';

export const REPOSITORIES = {
  USER_REPOSITORY: {
    provide: 'UserRepository',
    useExisting: UserPrismaRepository,
  },
  USER_PRISMA_REPOSITORY: {
    provide: UserPrismaRepository,
    useFactory: (prisma: PrismaService) => {
      return new UserPrismaRepository(prisma);
    },
    inject: [PrismaService],
  },
  // USER_IN_MEMORY_REPOSITORY: {
  //   provide: UserInMemoryRepository,
  //   useClass: UserInMemoryRepository,
  // },
};
export const USE_CASES = {
  CREATE_ONE_USER_USE_CASE: {
    provide: CreateOneUserUseCase,
    useFactory: (userRepo: IUserRepository) => {
      return new CreateOneUserUseCase(userRepo);
    },
    inject: [REPOSITORIES.USER_REPOSITORY.provide],
  },
  FIND_ALL_USERS_USE_CASE: {
    provide: FindAllUsersUseCase,
    useFactory: (userRepo: IUserRepository) => {
      return new FindAllUsersUseCase(userRepo);
    },
    inject: [REPOSITORIES.USER_REPOSITORY.provide],
  },
  FIND_ONE_USER_USE_CASE: {
    provide: FindOneUserUseCase,
    useFactory: (userRepo: IUserRepository) => {
      return new FindOneUserUseCase(userRepo);
    },
    inject: [REPOSITORIES.USER_REPOSITORY.provide],
  },
  CREATE_MANY_USERS_USE_CASE: {
    provide: CreateManyUsersUseCase,
    useFactory: (userRepo: IUserRepository) => {
      return new CreateManyUsersUseCase(userRepo);
    },
    inject: [REPOSITORIES.USER_REPOSITORY.provide],
  },
  UPDATE_MANY_USERS_USE_CASE: {
    provide: UpdateManyUsersUseCase,
    useFactory: (userRepo: IUserRepository) => {
      return new UpdateManyUsersUseCase(userRepo);
    },
    inject: [REPOSITORIES.USER_REPOSITORY.provide],
  },
  UPDATE_ONE_USER_USE_CASE: {
    provide: UpdateOneUserUseCase,
    useFactory: (userRepo: IUserRepository) => {
      return new UpdateOneUserUseCase(userRepo);
    },
    inject: [REPOSITORIES.USER_REPOSITORY.provide],
  },
  REMOVE_MANY_USERS_USE_CASE: {
    provide: RemoveManyUsersUseCase,
    useFactory: (userRepo: IUserRepository) => {
      return new RemoveManyUsersUseCase(userRepo);
    },
    inject: [REPOSITORIES.USER_REPOSITORY.provide],
  },
  REMOVE_ONE_USER_USE_CASE: {
    provide: RemoveOneUserUseCase,
    useFactory: (userRepo: IUserRepository) => {
      return new RemoveOneUserUseCase(userRepo);
    },
    inject: [REPOSITORIES.USER_REPOSITORY.provide],
  },
  SEARCH_USERS_USE_CASE: {
    provide: SearchUsersUseCase,
    useFactory: (userRepo: IUserRepository) => {
      return new SearchUsersUseCase(userRepo);
    },
    inject: [REPOSITORIES.USER_REPOSITORY.provide],
  },
  FILTER_USERS_USE_CASE: {
    provide: FilterUsersUseCase,
    useFactory: (userRepo: IUserRepository) => {
      return new FilterUsersUseCase(userRepo);
    },
    inject: [REPOSITORIES.USER_REPOSITORY.provide],
  },
};

export const USER_PROVIDERS = {
  REPOSITORIES,
  USE_CASES,
};
