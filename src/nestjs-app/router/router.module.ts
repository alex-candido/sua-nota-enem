import { DynamicModule, ForwardReference, Module, Type } from '@nestjs/common';
import { RouterModule as NestJsRouterModule } from '@nestjs/core';

import { RoutesAdminModule } from '@nest/router/application-routes/v1/routes.admin.module';
import { RoutesApiModule } from '@nest/router/application-routes/v1/routes.api.module';

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
            path: 'v1',
            children: [
              {
                path: '/api',
                module: RoutesApiModule,
              },
            ],
          },
          {
            path: '/admin',
            module: RoutesAdminModule,
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
