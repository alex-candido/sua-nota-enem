import * as Joi from 'joi';
import { APP_SCHEMA_TYPE } from '../../__types__/envs/app-schema';

export const CONFIG_APP_SCHEMA: Joi.StrictSchemaMap<APP_SCHEMA_TYPE> = {
  APP_NAME: Joi.string().required(),
  APP_PORT: Joi.number().required(),
  APP_BASE_URL: Joi.string().required(),
  GLOBAL_PREFIX: Joi.string().required(),
  APP_LOCALE: Joi.string().required(),
  MULTI_DEVICE_LOGIN: Joi.boolean().required(),
  ORIGIN: Joi.string().required(),
};
