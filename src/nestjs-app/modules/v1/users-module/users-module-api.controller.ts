import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseArrayPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import {
  CreateManyUsersModuleDto,
  FilterUserModuleDto,
  FindAllUserModuleDto,
  SearchUserModuleDto,
  UpdateManyUsersModuleDto,
} from './dtos/user-collection.dto';
import {
  CreateOneUserModuleDto,
  RemoveManyUserModuleDto,
  UpdateUserModuleDto,
} from './dtos/user.dto';

import { UserCollectionPresenter } from './presenters/user-collection.presenter';
import { UserPresenter } from './presenters/user.presenter';
import { UserCollectionSerialize } from './serializes/user-collection.serialize';
import { UserSerialize } from './serializes/user.serialize';

import { instanceToPlain } from 'class-transformer';
import { API_ROUTES } from './constants/routes/user-api-routes.constants';
import { UsersModuleService } from './users-module.service';

/* controllers: findAll, findOne, createMany, createOne,
updateMany, updateOne, removeMany, removeOne, search, filter */

@Controller({
  path: API_ROUTES.USERS.HEADER.CONTROLLER,
  version: API_ROUTES.USERS.HEADER.VERSION,
})
export class UsersModuleApiController {
  constructor(
    private readonly usersModuleService: UsersModuleService,
    private readonly userCollectionSerialize: UserCollectionSerialize,
    private readonly userSerialize: UserSerialize,
    private readonly userCollectionPresenter: UserCollectionPresenter,
    private readonly userPresenter: UserPresenter,
  ) {}

  @Get(API_ROUTES.USERS.API.FIND_ALL.ROUTE)
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

  @Get(API_ROUTES.USERS.API.FIND_ONE.ROUTE)
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

  @Post(API_ROUTES.USERS.API.CREATE_MANY.ROUTE)
  async createMany(
    @Body(new ParseArrayPipe({ items: CreateOneUserModuleDto }))
    createManyUserModuleDto: CreateManyUsersModuleDto[],
  ) {
    const createManyUserModulePlainObjects: CreateOneUserModuleDto[] | any =
      createManyUserModuleDto.map(item => instanceToPlain(item));
    const serviceOutput = await this.usersModuleService.createMany(
      createManyUserModulePlainObjects,
    );
    const serializeOutput =
      await this.userCollectionSerialize.serialize(serviceOutput);
    const userCollectionPresenter =
      await this.userCollectionPresenter.presenter(serializeOutput);

    return {
      data: userCollectionPresenter,
      httpStatus: HttpStatus.OK,
      message: {
        translationKey: 'shared.success.createMany',
        args: { entity: 'entities.user' },
      },
    };
  }

  @Post(API_ROUTES.USERS.API.CREATE_ONE.ROUTE)
  async createOne(@Body() createOneUserModuleDto: CreateOneUserModuleDto) {
    const createOneUserModulePlainObjects: CreateOneUserModuleDto | any =
      instanceToPlain(createOneUserModuleDto);
    const serviceOutput = await this.usersModuleService.createOne(
      createOneUserModulePlainObjects,
    );
    const serializeOutput = await this.userSerialize.serialize(serviceOutput);
    const userPresenter = await this.userPresenter.presenter(serializeOutput);

    return {
      data: userPresenter,
      httpStatus: HttpStatus.OK,
      message: {
        translationKey: 'shared.success.createOne',
        args: { entity: 'entities.user' },
      },
    };
  }

  @Patch(API_ROUTES.USERS.API.UPDATE_MANY.ROUTE)
  async updateMany(
    @Body() updateManyUserModuleDto: UpdateManyUsersModuleDto[],
  ) {
    const serviceOutput = await this.usersModuleService.updateMany(
      updateManyUserModuleDto,
    );
    const serializeOutput =
      await this.userCollectionSerialize.serialize(serviceOutput);
    const userCollectionPresenter =
      await this.userCollectionPresenter.presenter(serializeOutput);

    return {
      data: userCollectionPresenter,
      httpStatus: HttpStatus.OK,
      message: {
        translationKey: 'shared.success.updateMany',
        args: { entity: 'entities.user' },
      },
    };
  }

  @Patch(API_ROUTES.USERS.API.UPDATE_ONE.ROUTE)
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

  @Delete(API_ROUTES.USERS.API.REMOVE_MANY.ROUTE)
  async removeMany(
    @Body('ids') removeManyUserModuleDto: RemoveManyUserModuleDto,
  ) {
    const serviceOutput = await this.usersModuleService.removeMany(
      removeManyUserModuleDto,
    );
    return {
      data: serviceOutput,
      httpStatus: HttpStatus.OK,
      message: {
        translationKey: 'shared.success.removeMany',
        args: { entity: 'entities.user' },
      },
    };
  }

  @Delete(API_ROUTES.USERS.API.REMOVE_ONE.ROUTE)
  async removeOne(
    @Param('id', new ParseUUIDPipe({ errorHttpStatusCode: 422 })) id: string,
  ) {
    return this.usersModuleService.removeOne({ id });
  }

  @Get(API_ROUTES.USERS.API.FILTER.ROUTE)
  async filter(@Query() filterUserModuleDto: FilterUserModuleDto) {
    const serviceOutput =
      await this.usersModuleService.filter(filterUserModuleDto);
    const serializeOutput =
      await this.userCollectionSerialize.serialize(serviceOutput);
    const userCollectionPresenter =
      await this.userCollectionPresenter.presenter(serializeOutput);

    return {
      data: userCollectionPresenter,
      httpStatus: HttpStatus.OK,
      message: {
        translationKey: 'shared.success.filter',
        args: {
          entity: 'entities.user',
        },
      },
    };
  }

  @Get(API_ROUTES.USERS.API.SEARCH.ROUTE)
  async search(@Query() searchUserModuleDto: SearchUserModuleDto) {
    const serviceOutput =
      await this.usersModuleService.search(searchUserModuleDto);
    const serializeOutput =
      await this.userCollectionSerialize.serialize(serviceOutput);
    const userCollectionPresenter =
      await this.userCollectionPresenter.presenter(serializeOutput);

    return {
      data: userCollectionPresenter,
      httpStatus: HttpStatus.OK,
      message: {
        translationKey: 'shared.success.search',
        args: {
          entity: 'entities.user',
        },
      },
    };
  }
}
