import { Module } from '@nestjs/common';

import { UsersModuleModule } from '@nest/modules/v1/users-module/users-module.module';
import { UsersModuleApiController } from '@nest/modules/v1/users-module/controllers/users-module.api.controller';

@Module({
  imports: [UsersModuleModule],
  controllers: [UsersModuleApiController],
  providers: [],
  exports: [],
})
export class RoutesApiModule {}
