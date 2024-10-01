import { Controller, Get, Param, Render } from '@nestjs/common';

import { UsersModuleService } from '../services/users-module.service';

@Controller('/users')
export class UsersModuleAdminController {
  constructor(private readonly usersModuleService: UsersModuleService) {}

  @Get()
  @Render('admin/users/index.pug')
  index() {
    return { message: 'Usuários retornados com sucesso', action: 'index' };
  }

  @Get('show/:id')
  @Render('admin/users/show.pug')
  show(@Param('id') id: string) {
    return {
      message: 'Usuário retornado com sucesso',
      action: 'show',
      params: { id },
    };
  }

  @Get('new')
  @Render('admin/users/new.pug')
  create() {
    return { message: 'Usuário criado com sucesso', action: 'new' };
  }

  @Get('edit/:id')
  @Render('admin/users/edit.pug')
  edit(@Param('id') id: string) {
    return {
      message: 'Usuário editado com sucesso',
      action: 'edit',
      params: { id },
    };
  }
}
