import { DynamicModule, ForwardReference, Module, Type } from '@nestjs/common';
import { RouterModule as NestJsRouterModule } from '@nestjs/core';

import { RoutesAdminModule } from '@nest/router/application-routes/routes.admin.module';
import { RoutesApiModule } from '@nest/router/application-routes/routes.api.module';

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
        RoutesAdminModule,
        RoutesApiModule,
        NestJsRouterModule.register([
          {
            path: '/admin',
            module: RoutesAdminModule,
          },
          {
            path: '/api',
            module: RoutesApiModule,
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
