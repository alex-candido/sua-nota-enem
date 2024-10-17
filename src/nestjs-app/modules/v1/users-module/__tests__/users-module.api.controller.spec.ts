import { Test, TestingModule } from '@nestjs/testing';

import { UsersModuleApiController } from '../controllers/users-module.api.controller';
import { UsersModuleService } from '../services/users-module.service';

describe('UsersModuleApiController', () => {
  let controller: UsersModuleApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersModuleApiController],
      providers: [UsersModuleService],
    }).compile();

    controller = module.get<UsersModuleApiController>(UsersModuleApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
