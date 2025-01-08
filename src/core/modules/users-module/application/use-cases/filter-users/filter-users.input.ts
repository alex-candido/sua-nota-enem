import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
  validateSync,
} from 'class-validator';
import {
  FilterParams,
  OperatorsType,
} from '../../../../../../core/@seedwork/domain/repository/filter-params';
import { UserFilterParams } from '../../../domain/repository/user.repository';

// Interface para os filtros de usuários
export interface UserFilterParamsProps {
  key: string;
  relation: string;
  values: string[];
  mode: string;
  operator: OperatorsType;
}

// Interface para a entrada do filtro de usuários
export interface FilterUsersInputProps {
  filters?: UserFilterParamsProps[] | null;
  page?: number;
  per_page?: number;
  sort?: string | null;
  sort_dir?: string | null;
}

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export class FilterUsersInput {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  per_page?: number;

  @IsOptional()
  @IsString()
  sort?: string | null;

  @IsOptional()
  @IsString()
  @IsEnum(SortDirection)
  sort_dir?: SortDirection | null;

  @IsOptional()
  @Transform(({ value }) => {
    return !Array.isArray(value)
      ? (value = [JSON.parse(value)])
      : (value = value.map(obj => JSON.parse(obj)));
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UserFilterParams)
  filters?: FilterParams[] | null;

  constructor(props: FilterUsersInputProps) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

export class ValidateFilterUsersInput {
  static validate(input: FilterUsersInput) {
    return validateSync(input);
  }
}
