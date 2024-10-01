import { Module } from '@nestjs/common';

import { UsersModuleModule } from '../../modules/users-module/users-module.module';
import { UsersModuleApiController } from '@nest/modules/users-module/controllers/users-module.api.controller';

@Module({
  imports: [UsersModuleModule],
  controllers: [UsersModuleApiController],
  providers: [],
  exports: [],
})
export class RoutesApiModule {}
