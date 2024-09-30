import * as Joi from 'joi';

export type SECURITY_SCHEMA_TYPE = {
  JWT_SECRET: string;
  JWT_EXPIRE: number;
  REFRESH_TOKEN_SECRET: string;
  REFRESH_TOKEN_EXPIRE: number;
};

export const CONFIG_SECURITY_SCHEMA: Joi.StrictSchemaMap<SECURITY_SCHEMA_TYPE> =
  {
    JWT_SECRET: Joi.string().required(),
    JWT_EXPIRE: Joi.number().required(),
    REFRESH_TOKEN_SECRET: Joi.string().required(),
    REFRESH_TOKEN_EXPIRE: Joi.number().required(),
  };
