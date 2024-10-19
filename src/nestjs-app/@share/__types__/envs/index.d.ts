import { APP_SCHEMA_TYPE } from './app-schema';
import { DB_SCHEMA_TYPE } from './db-schema';
import { SECURITY_SCHEMA_TYPE } from './security-schema';
import { SWAGGER_SCHEMA_TYPE } from './swagger-schema';
import { VIEWS_SCHEMA_TYPE } from './views-schema';

export interface CONFIG_ENVS_SCHEMA_TYPE
  extends APP_SCHEMA_TYPE,
    DB_SCHEMA_TYPE,
    SECURITY_SCHEMA_TYPE,
    SWAGGER_SCHEMA_TYPE,
    VIEWS_SCHEMA_TYPE {}
