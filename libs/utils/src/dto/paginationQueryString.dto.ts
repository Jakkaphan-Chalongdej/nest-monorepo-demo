import {
  IsString,
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsIn,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export enum ENUM_ORDER_BY {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class PaginationQueryString {
  @ApiProperty({ example: 1, default: 1, required: false })
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  page?: number = 1;

  @ApiProperty({ example: 10, default: 10, required: false })
  @IsNumber()
  @Min(0)
  @Max(100)
  @Type(() => Number)
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  limit?: number = 10;

  @ApiProperty({
    example: ENUM_ORDER_BY.DESC,
    default: ENUM_ORDER_BY.DESC,
    enum: [ENUM_ORDER_BY.DESC, ENUM_ORDER_BY.ASC],
    required: false,
  })
  @IsString()
  @IsOptional()
  @Type(() => String)
  @Transform(({ value }) => value.toUpperCase())
  @IsIn([ENUM_ORDER_BY.ASC, ENUM_ORDER_BY.DESC])
  orderby?: ENUM_ORDER_BY = ENUM_ORDER_BY.DESC;

  getOffset(): number {
    return (this.page - 1) * this.limit;
  }
}
export class SearchQueryStringDto extends PaginationQueryString {
  @ApiProperty({ example: '', required: false, default: '' })
  @IsString()
  @IsOptional()
  search?: string;
}
