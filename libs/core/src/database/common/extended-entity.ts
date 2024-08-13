import { Expose } from 'class-transformer';
import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ENUM_TYPE_COLUMN_ENTITY } from './enum/database.enum';
import { SERIALIZE_GROUP } from './enum/serialization-group.enum';

export class BaseCommonEntity extends BaseEntity {
  public id?: number;

  @CreateDateColumn({
    type: ENUM_TYPE_COLUMN_ENTITY.TYPE_TIMESTAMP_TZ,
    name: 'created_at',
  })
  @Expose({
    groups: [SERIALIZE_GROUP.GROUP_BASE, SERIALIZE_GROUP.GROUP_ALL_BASE],
  })
  public createdAt: Date;

  @UpdateDateColumn({
    type: ENUM_TYPE_COLUMN_ENTITY.TYPE_TIMESTAMP_TZ,
    name: 'updated_at',
  })
  @Expose({
    groups: [SERIALIZE_GROUP.GROUP_BASE, SERIALIZE_GROUP.GROUP_ALL_BASE],
  })
  public updatedAt: Date;

  @DeleteDateColumn({
    type: ENUM_TYPE_COLUMN_ENTITY.TYPE_TIMESTAMP_TZ,
    name: 'deleted_at',
    nullable: true,
  })
  @Expose({
    groups: [],
  })
  deletedAt: Date;
}
