import { Module } from '@nestjs/common';
import { UsersModuleService } from './services/users-module.service';

@Module({
  controllers: [],
  exports: [UsersModuleService],
  providers: [UsersModuleService],
})
export class UsersModuleModule {}
