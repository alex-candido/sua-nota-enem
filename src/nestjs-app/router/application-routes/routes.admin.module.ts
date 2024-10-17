import { Module } from '@nestjs/common';

import { UsersModuleAdminController } from '@nest/modules/v1/users-module/controllers/users-module.admin.controller';
import { UsersModuleModule } from '@nest/modules/v1/users-module/users-module.module';

@Module({
  imports: [UsersModuleModule],
  controllers: [UsersModuleAdminController],
  providers: [],
  exports: [],
})
export class RoutesAdminModule {}
