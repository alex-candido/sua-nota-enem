import { Module } from '@nestjs/common';

import { UsersModuleModule } from '../../../modules/v1/users-module/users-module.module';
import { UsersModuleApiController } from '../../../modules/v1/users-module/__users-module.api.controller';

@Module({
  imports: [UsersModuleModule],
  controllers: [UsersModuleApiController],
  providers: [],
  exports: [],
})
export class RoutesApiModule {}
