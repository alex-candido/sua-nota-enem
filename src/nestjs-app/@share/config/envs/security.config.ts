import * as Joi from 'joi';
import { SECURITY_SCHEMA_TYPE } from '../../__types__/envs/security-schema';

export const CONFIG_SECURITY_SCHEMA: Joi.StrictSchemaMap<SECURITY_SCHEMA_TYPE> =
  {
    JWT_SECRET: Joi.string().required(),
    JWT_EXPIRE: Joi.number().required(),
    REFRESH_TOKEN_SECRET: Joi.string().required(),
    REFRESH_TOKEN_EXPIRE: Joi.number().required(),
  };
