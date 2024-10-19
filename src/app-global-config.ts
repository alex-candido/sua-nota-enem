import { join, resolve } from 'path';

import { CONFIG_ENVS_SCHEMA_TYPE } from './nestjs-app/@share/config/@config.module';

import { ConfigService } from '@nestjs/config';
import { NestFastifyApplication } from '@nestjs/platform-fastify';

export function applyGlobalConfig(
  app: NestFastifyApplication,
  configService: ConfigService<CONFIG_ENVS_SCHEMA_TYPE>,
) {
  const _staticAssetsPath = configService.get('STATIC_ASSETS_PATH')!;
  const _viewsPath = configService.get('VIEWS_PATH')!;
  const _viewEngine = configService.get('VIEW_ENGINE')!;
  // const origin = configService.get('ORIGIN')!;
  // const globalPrefix = configService.get('GLOBAL_PREFIX')!;

  // [cors] https://docs.nestjs.com/security/cors
  // app.enableCors({ origin, credentials: true });

  // [global-prefix] https://docs.nestjs.com/faq/global-prefix
  // app.setGlobalPrefix(globalPrefix, {
  //   exclude: [{ path: 'admin/users/*', method: RequestMethod.ALL }],
  // });

  // [MVC](https://docs.nestjs.com/techniques/mvc)
  app.useStaticAssets({
    root: resolve(join(__dirname, '../', 'public')),
    prefix: '/public',
  });
  app.setViewEngine({
    engine: {
      pug: require('pug'),
    },
    templates: resolve(join(__dirname, '../', 'views')),
  });
}
