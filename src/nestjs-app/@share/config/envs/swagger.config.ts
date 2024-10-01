import * as Joi from 'joi';

export type SWAGGER_SCHEMA_TYPE = {
  SWAGGER_ENABLE: boolean;
  SWAGGER_PATH: string;
  SWAGGER_VERSION: string;
};

export const CONFIG_SWAGGER_SCHEMA: Joi.StrictSchemaMap<SWAGGER_SCHEMA_TYPE> = {
  SWAGGER_ENABLE: Joi.boolean().required(),
  SWAGGER_PATH: Joi.string().required(),
  SWAGGER_VERSION: Joi.string().required(),
};
