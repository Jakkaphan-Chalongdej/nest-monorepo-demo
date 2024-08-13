export enum ENUM_DB_TABLE {
  MEDIAL_OBJECT = 'media_object',
  PERMISSION = 'permission',
  MENU = 'menu',
  ROLE = 'role',
  USER = 'user',
  ADMIN = 'admin',
}

export enum ENUM_BASE_ENTITY {
  ID = 'id',
}

export enum ENUM_COMMON_ENTITY {
  CREATED_AT = 'created_at',
  DELETED_AT = 'deleted_at',
  IS_DELETE = 'is_delete',
  UPDATED_AT = 'updated_at',
  IS_EDIT = 'is_edit',
}

export enum ENUM_TYPE_COLUMN_ENTITY {
  TYPE_ID = 'int4',
  TYPE_DATE = 'int8',
  TYPE_TIMESTAMP_TZ = 'timestamptz',
  TYPE_VARCHAR = 'varchar',
  TYPE_UUID = 'uuid',
  INT4 = 'int4',
  BOOLEAN = 'boolean',
}
