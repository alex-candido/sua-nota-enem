import * as Joi from 'joi';
import { SWAGGER_SCHEMA_TYPE } from '../../__types__/envs/swagger-schema';

export const CONFIG_SWAGGER_SCHEMA: Joi.StrictSchemaMap<SWAGGER_SCHEMA_TYPE> = {
  SWAGGER_ENABLE: Joi.boolean().required(),
  SWAGGER_PATH: Joi.string().required(),
  SWAGGER_VERSION: Joi.string().required(),
};
