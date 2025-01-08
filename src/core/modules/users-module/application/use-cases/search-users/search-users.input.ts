import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  validateSync,
} from 'class-validator';
import { Type } from 'class-transformer';

import { UserFilterParamsProps } from '../filter-users/filter-users.input';
import { FilterParams } from '../../../../../../core/@seedwork/domain/repository/filter-params';

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export interface SearchUsersInputProps {
  filter?: UserFilterParamsProps | null;
  page?: number;
  per_page?: number;
  sort?: string | null;
  sort_dir?: string | null;
}

export class SearchUsersInput {
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

  filter: FilterParams | null;

  constructor(props: SearchUsersInputProps) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

// Classe para validação
export class ValidateSearchUsersInput {
  static validate(input: SearchUsersInput) {
    return validateSync(input);
  }
}
