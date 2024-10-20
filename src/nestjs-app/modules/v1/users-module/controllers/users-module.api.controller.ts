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

import { CreateOneUserModuleDto } from '../dtos/create-one-user-module.dto';
import { FindAllUserModuleDto } from '../dtos/find-all-user-module.dto';
import { UpdateUserModuleDto } from '../dtos/update-one-user-module.dto';
import { UsersModuleService } from '../services/users-module.service';

import { UserCollectionPresenter } from '../presenters/user-collection.presenter';
import { UserPresenter } from '../presenters/user.presenter';
import { UserCollectionSerialize } from '../serializes/user-collection.serialize';
import { UserSerialize } from '../serializes/user.serialize';

/* controllers: search, filter, findAll, findOne, createMany, createOne,
updateMany, updateOne, removeMany, removeOne */

@Controller('/users')
export class UsersModuleApiController {
  constructor(
    private readonly usersModuleService: UsersModuleService,
    private readonly userCollectionSerialize: UserCollectionSerialize,
    private readonly userSerialize: UserSerialize,
    private readonly userCollectionPresenter: UserCollectionPresenter,
    private readonly userPresenter: UserPresenter,
  ) {}

  async filter() {
    return {};
  }

  async search() {
    return {};
  }

  @Get('/')
  async findAll(@Query() findAllUserModuleDto: FindAllUserModuleDto) {
    const serviceOutput =
      await this.usersModuleService.findAll(findAllUserModuleDto);
    const serializeOutput =
      await this.userCollectionSerialize.serialize(serviceOutput);
    const userCollectionPresenter =
      await this.userCollectionPresenter.presenter(serializeOutput);

    return {
      data: userCollectionPresenter,
      httpStatus: HttpStatus.OK,
      message: {
        translationKey: 'shared.success.findAll',
        args: {
          entity: 'entities.user',
        },
      },
    };
  }

  @Get('/:id')
  async findOne(
    @Param('id', new ParseUUIDPipe({ errorHttpStatusCode: 422 })) id: string,
  ) {
    const serviceOutput = await this.usersModuleService.findOne({ id });
    const serializeOutput = await this.userSerialize.serialize(serviceOutput);
    const userPresenter = await this.userPresenter.presenter(serializeOutput);

    return {
      data: userPresenter,
      httpStatus: HttpStatus.OK,
      message: {
        translationKey: 'shared.success.findOne',
        args: { entity: 'entities.user' },
      },
    };
  }

  async createMany() {
    return {};
  }

  @Post('/')
  async createOne(@Body() createOneUserModuleDto: CreateOneUserModuleDto) {
    const serviceOutput = await this.usersModuleService.createOne(
      createOneUserModuleDto,
    );
    const serializeOutput = await this.userSerialize.serialize(serviceOutput);
    const userPresenter = await this.userPresenter.presenter(serializeOutput);

    return {
      data: userPresenter,
      httpStatus: HttpStatus.OK,
      message: {
        translationKey: 'shared.success.create',
        args: { entity: 'entities.user' },
      },
    };
  }

  async updateMany() {
    return {};
  }

  @Patch('/:id')
  async updateOne(
    @Param('id', new ParseUUIDPipe({ errorHttpStatusCode: 422 })) id: string,
    @Body() updateUserModuleDto: UpdateUserModuleDto,
  ) {
    const serviceOutput = await this.usersModuleService.updateOne(
      id,
      updateUserModuleDto,
    );
    const serializeOutput = await this.userSerialize.serialize(serviceOutput);
    const userPresenter = await this.userPresenter.presenter(serializeOutput);

    return {
      data: userPresenter,
      httpStatus: HttpStatus.OK,
      message: {
        translationKey: 'shared.success.updateOne',
        args: { entity: 'entities.user' },
      },
    };
  }

  async removeMany() {
    return {};
  }

  @Delete('/:id')
  async removeOne(
    @Param('id', new ParseUUIDPipe({ errorHttpStatusCode: 422 })) id: string,
  ) {
    return this.usersModuleService.removeOne({ id });
  }
}
