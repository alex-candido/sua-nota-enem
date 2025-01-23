import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  validateSync,
} from 'class-validator';

export interface FindAllUsersInputProps {
  page?: number;
  per_page?: number;
  sort?: string | null;
  sort_dir?: string | null;
}

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export class FindAllUsersInput {
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Type(() => Number)
  page?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @Type(() => Number)
  per_page?: number;

  @IsOptional()
  @IsString()
  sort?: string | null;

  @IsOptional()
  @IsString()
  @IsEnum(SortDirection)
  sort_dir?: SortDirection | null;

  constructor(props: FindAllUsersInputProps) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

// Classe para validação
export class ValidateFindAllUsersInput {
  static validate(input: FindAllUsersInput) {
    return validateSync(input);
  }
}
