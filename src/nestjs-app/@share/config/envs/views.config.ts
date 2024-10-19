import * as Joi from 'joi';
import { VIEWS_SCHEMA_TYPE } from '../../__types__/envs/views-schema';

export const CONFIG_VIEWS_SCHEMA: Joi.StrictSchemaMap<VIEWS_SCHEMA_TYPE> = {
  STATIC_ASSETS_PATH: Joi.string().required(),
  VIEWS_PATH: Joi.string().required(),
  VIEW_ENGINE: Joi.string().required(),
};
