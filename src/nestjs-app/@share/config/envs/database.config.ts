import * as Joi from 'joi';
import { DB_SCHEMA_TYPE } from '../../__types__/envs/db-schema';

export const CONFIG_DB_SCHEMA: Joi.StrictSchemaMap<DB_SCHEMA_TYPE> = {
  DATABASE_MONGODB_URL: Joi.string().required(),
  DATABASE_POSTGRESS_URL: Joi.string().required(),
};
