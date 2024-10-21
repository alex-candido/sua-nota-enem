import { Module } from '@nestjs/common';

import { UserCollectionPresenter } from './presenters/user-collection.presenter';
import { UserPresenter } from './presenters/user.presenter';
import { UserCollectionSerialize } from './serializes/user-collection.serialize';
import { UserSerialize } from './serializes/user.serialize';
import { UsersModuleService } from './users-module.service';

import { USER_PROVIDERS } from './providers/user.providers';

@Module({
  controllers: [],
  providers: [
    UsersModuleService,
    UserCollectionSerialize,
    UserSerialize,
    UserCollectionPresenter,
    UserPresenter,
    ...Object.values(USER_PROVIDERS.REPOSITORIES),
    ...Object.values(USER_PROVIDERS.USE_CASES),
  ],
  exports: [
    UsersModuleService,
    UserCollectionSerialize,
    UserSerialize,
    UserCollectionPresenter,
    UserPresenter,
    USER_PROVIDERS.REPOSITORIES.USER_REPOSITORY.provide,
  ],
})
export class UsersModuleModule {}
