import * as Joi from 'joi';

export type APP_SCHEMA_TYPE = {
  APP_NAME: string;
  APP_PORT: number;
  APP_BASE_URL: string;
  GLOBAL_PREFIX: string;
  APP_LOCALE: string;
  MULTI_DEVICE_LOGIN: boolean;
  ORIGIN: string;
};

export const CONFIG_APP_SCHEMA: Joi.StrictSchemaMap<APP_SCHEMA_TYPE> = {
  APP_NAME: Joi.string().required(),
  APP_PORT: Joi.number().required(),
  APP_BASE_URL: Joi.string().required(),
  GLOBAL_PREFIX: Joi.string().required(),
  APP_LOCALE: Joi.string().required(),
  MULTI_DEVICE_LOGIN: Joi.boolean().required(),
  ORIGIN: Joi.string().required(),
};
