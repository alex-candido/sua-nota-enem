import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { UsersModuleService } from '../services/users-module.service';
import { FindAllUserModuleDto } from '../dtos/find-all-user-module.dto';
import { CreateUserModuleDto } from '../dtos/create-user-module.dto';
import { UpdateUserModuleDto } from '../dtos/update-user-module.dto';

@Controller('/users')
export class UsersModuleApiController {
  constructor(private readonly usersModuleService: UsersModuleService) {}

  @Get('/')
  async findAll(@Query() findAllUserModuleDto: FindAllUserModuleDto) {
    const output = await this.usersModuleService.findAll(findAllUserModuleDto);

    return {
      data: output,
      httpStatus: HttpStatus.OK,
      message: {
        translationKey: 'shared.success.findAll',
        args: { entity: 'entities.user' },
      },
    };
  }

  @Get('/:id')
  async findOne(
    @Param('id', new ParseUUIDPipe({ errorHttpStatusCode: 422 })) id: string,
  ) {
    const output = await this.usersModuleService.findOne({ id });

    return {
      data: output,
      httpStatus: HttpStatus.OK,
      message: {
        translationKey: 'shared.success.findOne',
        args: { entity: 'entities.user' },
      },
    };
  }

  @Post('/')
  async create(@Body() createUserModuleDto: CreateUserModuleDto) {
    const output = await this.usersModuleService.create(createUserModuleDto);

    return {
      data: output,
      httpStatus: HttpStatus.OK,
      message: {
        translationKey: 'shared.success.create',
        args: { entity: 'entities.user' },
      },
    };
  }

  @Patch('/:id')
  async updateOne(
    @Param('id', new ParseUUIDPipe({ errorHttpStatusCode: 422 })) id: string,
    @Body() updateUserModuleDto: UpdateUserModuleDto,
  ) {
    const output = await this.usersModuleService.updateOne(
      id,
      updateUserModuleDto,
    );

    return {
      data: output,
      httpStatus: HttpStatus.OK,
      message: {
        translationKey: 'shared.success.updateOne',
        args: { entity: 'entities.user' },
      },
    };
  }

  @Delete('/:id')
  async removeOne(
    @Param('id', new ParseUUIDPipe({ errorHttpStatusCode: 422 })) id: string,
  ) {
    return this.usersModuleService.removeOne({ id });
  }
}
