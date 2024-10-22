import { Module } from '@nestjs/common';

import { UsersModuleApiController } from '../../../modules/v1/users-module/users-module-api.controller';
import { UsersModuleModule } from '../../../modules/v1/users-module/users-module.module';

@Module({
  imports: [UsersModuleModule],
  controllers: [UsersModuleApiController],
  providers: [],
  exports: [],
})
export class RoutesApiModule {}
