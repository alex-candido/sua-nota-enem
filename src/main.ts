import cluster from 'node:cluster';

import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication } from '@nestjs/platform-fastify';

import { CONFIG_ENVS_SCHEMA_TYPE } from '@nest/@share/config/@config.module';

import { isMainProcess } from '@nest/@share/config/global/env.config';
import { FastifyApp } from '@nest/@share/container/adapters/fastify.adapter';
import { applyGlobalConfig } from './app-global-config';
import { AppModule } from './nestjs-app/app.module';

declare const module: any;

async function bootstrap() {
  // [Fastify](https://docs.nestjs.com/techniques/performance)
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    FastifyApp,
  );

  const configService: ConfigService<CONFIG_ENVS_SCHEMA_TYPE> = app.get(
    ConfigService<CONFIG_ENVS_SCHEMA_TYPE>,
  );

  const port: string = configService.get<string>('APP_PORT')!;

  applyGlobalConfig(app, configService);

  await app.listen(port, '0.0.0.0', async () => {
    const url = await app.getUrl();
    const { pid } = process;
    const env = cluster.isPrimary;
    const prefix = env ? 'P' : 'W';

    if (!isMainProcess) return;

    const logger = new Logger('NestApplication');
    logger.log(`[${prefix + pid}] 🚀 Server running on ${url}`);
  });

  // [HMR](https://docs.nestjs.com/recipes/hot-reload)
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
