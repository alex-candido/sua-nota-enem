import { resolve } from 'path';

import { CONFIG_ENVS_SCHEMA_TYPE } from '@nest/@share/config/@config.module';

import { ConfigService } from '@nestjs/config';
import { NestFastifyApplication } from '@nestjs/platform-fastify';

export function applyGlobalConfig(
  app: NestFastifyApplication,
  configService: ConfigService<CONFIG_ENVS_SCHEMA_TYPE>,
) {
  const staticAssetsPath = configService.get('STATIC_ASSETS_PATH')!;
  const viewsPath = configService.get('VIEWS_PATH')!;
  const viewEngine = configService.get('VIEW_ENGINE')!;
  const globalPrefix = configService.get('GLOBAL_PREFIX')!;
  const origin = configService.get('ORIGIN')!;

  // [cors] https://docs.nestjs.com/security/cors
  app.enableCors({ origin, credentials: true });

  // [global-prefix] https://docs.nestjs.com/faq/global-prefix
  app.setGlobalPrefix(globalPrefix);

  // [MVC](https://docs.nestjs.com/techniques/mvc)
  app.useStaticAssets({
    root: resolve(staticAssetsPath),
    prefix: '/public',
  });
  app.setViewEngine({
    engine: {
      [viewEngine]: require(viewEngine),
    },
    templates: resolve(viewsPath),
  });
}
