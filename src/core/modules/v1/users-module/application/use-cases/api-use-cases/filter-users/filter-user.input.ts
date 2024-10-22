import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
  validateSync,
} from 'class-validator';

// Definindo as possíveis relações e modos válidos
const VALID_RELATIONS = ['equals', 'contains', 'in', 'notIn'];
const VALID_MODES = ['default', 'insensitive'];

// Atualizando os operadores válidos
export type OperatorsType =
  | 'contains'
  | 'equals'
  | 'startsWith'
  | 'endsWith'
  | 'lt'
  | 'lte'
  | 'gt'
  | 'gte';

const VALID_OPERATORS: OperatorsType[] = [
  'contains',
  'equals',
  'startsWith',
  'endsWith',
  'lt',
  'lte',
  'gt',
  'gte',
];

export type ModeDirection = 'default' | 'insensitive';

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

export class UserFilterParams {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsString()
  @IsIn(VALID_RELATIONS)
  relation: string;

  @IsArray()
  @IsString({ each: true })
  values: string[];

  @IsString()
  @IsIn(VALID_MODES)
  mode: string;

  @IsString()
  @IsIn(VALID_OPERATORS)
  operator: OperatorsType;
}

export class FilterUsersInput {
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => UserFilterParams)
  filters?: UserFilterParams[] | null;

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

  @IsOptional() // Este campo é opcional
  @IsString() // Verifica se é uma string
  @IsEnum(SortDirection) // Verifica se é uma das direções de ordenação definidas no enum
  sort_dir?: SortDirection | null;

  constructor(props: FilterUsersInputProps[]) {
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
