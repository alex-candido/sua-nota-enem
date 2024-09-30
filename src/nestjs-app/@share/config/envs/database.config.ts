import * as Joi from 'joi';

export type DB_SCHEMA_TYPE = {
  DATABASE_MONGODB_URL: string;
  DATABASE_POSTGRESS_URL: string;
};

export const CONFIG_DB_SCHEMA: Joi.StrictSchemaMap<DB_SCHEMA_TYPE> = {
  DATABASE_MONGODB_URL: Joi.string().required(),
  DATABASE_POSTGRESS_URL: Joi.string().required(),
};
