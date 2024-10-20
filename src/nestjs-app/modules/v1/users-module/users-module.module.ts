import { Module } from '@nestjs/common';

import { UserCollectionPresenter } from './presenters/user-collection.presenter';
import { UserPresenter } from './presenters/user.presenter';
import { UserCollectionSerialize } from './serializes/user-collection.serialize';
import { UserSerialize } from './serializes/user.serialize';
import { UsersModuleService } from './services/users-module.service';

@Module({
  controllers: [],
  exports: [
    UsersModuleService,
    UserCollectionSerialize,
    UserSerialize,
    UserCollectionPresenter,
    UserPresenter,
  ],
  providers: [
    UsersModuleService,
    UserCollectionSerialize,
    UserSerialize,
    UserCollectionPresenter,
    UserPresenter,
  ],
})
export class UsersModuleModule {}
