import { Test, TestingModule } from '@nestjs/testing';

import { UsersModuleAdminController } from '../controllers/users-module.admin.controller';
import { UsersModuleService } from '../services/users-module.service';

describe('UsersModuleAdminController', () => {
  let controller: UsersModuleAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersModuleAdminController],
      providers: [UsersModuleService],
    }).compile();

    controller = module.get<UsersModuleAdminController>(
      UsersModuleAdminController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
