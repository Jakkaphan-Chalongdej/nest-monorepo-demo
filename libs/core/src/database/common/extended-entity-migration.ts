import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';
import {
  ENUM_BASE_ENTITY,
  ENUM_COMMON_ENTITY,
  ENUM_TYPE_COLUMN_ENTITY,
} from './enum/database.enum';

export const baseEntityMigration: TableColumnOptions[] = [
  {
    name: ENUM_BASE_ENTITY.ID,
    type: ENUM_TYPE_COLUMN_ENTITY.TYPE_ID,
    isPrimary: true,
    isGenerated: true,
  },
];

export const commonEntityMigration: TableColumnOptions[] = [
  {
    default: 'NOW()',
    name: ENUM_COMMON_ENTITY.CREATED_AT,
    type: ENUM_TYPE_COLUMN_ENTITY.TYPE_TIMESTAMP_TZ,
  },
  {
    default: 'NOW()',
    name: ENUM_COMMON_ENTITY.UPDATED_AT,
    type: ENUM_TYPE_COLUMN_ENTITY.TYPE_TIMESTAMP_TZ,
  },
  {
    name: ENUM_COMMON_ENTITY.DELETED_AT,
    type: ENUM_TYPE_COLUMN_ENTITY.TYPE_TIMESTAMP_TZ,
    isNullable: true,
  },
];
