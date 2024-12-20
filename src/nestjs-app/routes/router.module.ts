import { DynamicModule, ForwardReference, Module, Type } from '@nestjs/common';
import { RouterModule as NestJsRouterModule } from '@nestjs/core';

import { AdminRoutesModule } from './admin-module/admin.module';
import { ApiRoutesModule } from './api-module/api.module';

@Module({})
export class RouterModule {
  static forRoot(): DynamicModule {
    const imports:
      | (
          | DynamicModule
          | Type<any>
          | Promise<DynamicModule>
          | ForwardReference<any>
        )[]
      | any = [];

    if (process.env.HTTP_ENABLE === 'true') {
      imports.push(
        AdminRoutesModule,
        ApiRoutesModule,
        NestJsRouterModule.register([
          {
            path: '/api',
            module: ApiRoutesModule,
          },
          {
            path: '/admin',
            module: AdminRoutesModule,
          },
        ]),
      );
    }
    return {
      module: RouterModule,
      providers: [],
      exports: [],
      controllers: [],
      imports,
    };
  }
}
