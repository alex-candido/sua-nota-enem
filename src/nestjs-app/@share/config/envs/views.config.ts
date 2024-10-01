import * as Joi from 'joi';

export type VIEWS_SCHEMA_TYPE = {
  STATIC_ASSETS_PATH: string;
  VIEWS_PATH: string;
  VIEW_ENGINE: string;
};

export const CONFIG_VIEWS_SCHEMA: Joi.StrictSchemaMap<VIEWS_SCHEMA_TYPE> = {
  STATIC_ASSETS_PATH: Joi.string().required(),
  VIEWS_PATH: Joi.string().required(),
  VIEW_ENGINE: Joi.string().required(),
};
