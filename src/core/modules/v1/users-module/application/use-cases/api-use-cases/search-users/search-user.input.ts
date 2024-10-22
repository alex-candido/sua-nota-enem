import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  validateSync,
} from 'class-validator';

const VALID_MODES = ['default', 'insensitive'] as const;

export interface SearchUsersInputProps {
  key: string;
  value: string;
  mode: (typeof VALID_MODES)[number]; // Define o tipo baseado nos valores válidos
  operator: 'contains';
  page?: number;
  per_page?: number;
  sort?: string | null;
  sort_dir?: string | null;
}

export class SearchUsersInput {
  @IsString() // Verifica se é uma string
  @IsNotEmpty() // Garante que não está vazio
  key: string;

  @IsString() // Verifica se é uma string
  @IsNotEmpty() // Garante que não está vazio
  value: string;

  @IsIn(VALID_MODES) // Verifica se está em VALID_MODES
  mode: (typeof VALID_MODES)[number];

  @IsString() // Verifica se é uma string
  @IsNotEmpty() // Garante que não está vazio
  operator: 'contains';

  @IsOptional() // Este campo é opcional
  @IsNumber() // Verifica se é um número
  page?: number;

  @IsOptional() // Este campo é opcional
  @IsNumber() // Verifica se é um número
  per_page?: number;

  @IsOptional() // Este campo é opcional
  @IsString() // Verifica se é uma string
  sort?: string | null;

  @IsOptional() // Este campo é opcional
  @IsString() // Verifica se é uma string
  sort_dir?: string | null;

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
