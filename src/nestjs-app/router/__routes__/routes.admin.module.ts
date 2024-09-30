import { Module } from '@nestjs/common';

import { UsersModuleAdminController } from '../../modules/users-module/controllers/users-module.admin.controller';
import { UsersModuleModule } from '../../modules/users-module/users-module.module';

@Module({
  imports: [UsersModuleModule],
  controllers: [UsersModuleAdminController],
  providers: [],
  exports: [],
})
export class RoutesAdminModule {}
