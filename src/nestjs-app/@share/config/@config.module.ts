import * as Joi from 'joi';
import { join } from 'path';

import { DynamicModule, Module } from '@nestjs/common';
import {
  ConfigModuleOptions,
  ConfigModule as NestConfigModule,
} from '@nestjs/config';

import { CONFIG_APP_SCHEMA } from './envs/app.config';

import { CONFIG_DB_SCHEMA } from './envs/database.config';
import { CONFIG_SECURITY_SCHEMA } from './envs/security.config';
import { CONFIG_SWAGGER_SCHEMA } from './envs/swagger.config';
import { CONFIG_VIEWS_SCHEMA } from './envs/views.config';

@Module({})
export class ConfigModule extends NestConfigModule {
  static forRoot(options: ConfigModuleOptions = {}): DynamicModule {
    const { envFilePath, ...otherOptions } = options;

    return super.forRoot({
      isGlobal: true,
      envFilePath: [
        ...(Array.isArray(envFilePath) ? envFilePath! : [envFilePath!]),
        join(process.cwd(), 'envs', `.env.${process.env.NODE_ENV!}`),
        join(process.cwd(), 'envs', `.env`),
      ],
      validationSchema: Joi.object({
        ...CONFIG_APP_SCHEMA,
        ...CONFIG_DB_SCHEMA,
        ...CONFIG_SECURITY_SCHEMA,
        ...CONFIG_DB_SCHEMA,
        ...CONFIG_SWAGGER_SCHEMA,
        ...CONFIG_VIEWS_SCHEMA,
      }),
      ...otherOptions,
    });
  }
}
