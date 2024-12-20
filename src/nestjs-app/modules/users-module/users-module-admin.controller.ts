import { Controller, Get, Param, Render } from '@nestjs/common';
import { UsersModuleService } from './users-module.service';

import { ADMIN_ROUTES } from './constants/user-admin-routes.constants';

/* controllers: index, show, create, edit */

@Controller({
  path: ADMIN_ROUTES.USERS.HEADER.CONTROLLER,
  version: ADMIN_ROUTES.USERS.HEADER.VERSION,
})
export class UsersModuleAdminController {
  constructor(private readonly usersModuleService: UsersModuleService) {}

  @Get(ADMIN_ROUTES.USERS.ADMIN.INDEX.ROUTE)
  @Render(ADMIN_ROUTES.USERS.ADMIN.INDEX.PATH)
  index() {
    return { message: 'Usuários retornados com sucesso', action: 'index' };
  }

  @Get(ADMIN_ROUTES.USERS.ADMIN.SHOW.ROUTE)
  @Render(ADMIN_ROUTES.USERS.ADMIN.SHOW.PATH)
  show(@Param('id') id: string) {
    return {
      message: 'Usuário retornado com sucesso',
      action: 'show',
      params: { id },
    };
  }

  @Get(ADMIN_ROUTES.USERS.ADMIN.NEW.ROUTE)
  @Render(ADMIN_ROUTES.USERS.ADMIN.NEW.PATH)
  create() {
    return { message: 'Usuário criado com sucesso', action: 'new' };
  }

  @Get(ADMIN_ROUTES.USERS.ADMIN.EDIT.ROUTE)
  @Render(ADMIN_ROUTES.USERS.ADMIN.EDIT.PATH)
  edit(@Param('id') id: string) {
    return {
      message: 'Usuário editado com sucesso',
      action: 'edit',
      params: { id },
    };
  }
}
