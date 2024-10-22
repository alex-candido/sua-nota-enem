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
  @IsOptional() // Este campo é opcional
  @IsInt() // Verifica se é um inteiro
  @IsPositive() // Verifica se o número é positivo
  page?: number;

  @IsOptional() // Este campo é opcional
  @IsInt() // Verifica se é um inteiro
  @IsPositive() // Verifica se o número é positivo
  per_page?: number;

  @IsOptional() // Este campo é opcional
  @IsString() // Verifica se é uma string
  sort?: string | null;

  @IsOptional() // Este campo é opcional
  @IsString() // Verifica se é uma string
  @IsEnum(SortDirection) // Verifica se é uma das direções de ordenação definidas no enum
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
