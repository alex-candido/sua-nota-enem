import { Module } from '@nestjs/common';

import { UsersModuleAdminController } from '../../../modules/v1/users-module/__users-module.admin.controller';
import { UsersModuleModule } from '../../../modules/v1/users-module/users-module.module';

@Module({
  imports: [UsersModuleModule],
  controllers: [UsersModuleAdminController],
  providers: [],
  exports: [],
})
export class RoutesAdminModule {}
