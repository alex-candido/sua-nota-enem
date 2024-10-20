import { join, resolve } from 'path';

import { ConfigService } from '@nestjs/config';
import { NestFastifyApplication } from '@nestjs/platform-fastify';

import { CONFIG_ENVS_SCHEMA_TYPE } from './nestjs-app/@share/__types__/envs';

export function applyGlobalConfig(
  app: NestFastifyApplication,
  configService: ConfigService<CONFIG_ENVS_SCHEMA_TYPE>,
) {
  const _staticAssetsPath = configService.get('STATIC_ASSETS_PATH')!;
  const _viewsPath = configService.get('VIEWS_PATH')!;
  const _viewEngine = configService.get('VIEW_ENGINE')!;
  const globalPrefix = configService.get('GLOBAL_PREFIX')!;
  // const origin = configService.get('ORIGIN')!;

  // [cors] https://docs.nestjs.com/security/cors
  // app.enableCors({ origin, credentials: true });

  // [global-prefix] https://docs.nestjs.com/faq/global-prefix
  app.setGlobalPrefix(globalPrefix);

  // [MVC](https://docs.nestjs.com/techniques/mvc)
  app.useStaticAssets({
    root: resolve(join(__dirname, '../', 'public')),
    prefix: '',
  });
  app.setViewEngine({
    engine: {
      pug: require('pug'),
    },
    templates: resolve(join(__dirname, '../', 'views')),
  });
}
