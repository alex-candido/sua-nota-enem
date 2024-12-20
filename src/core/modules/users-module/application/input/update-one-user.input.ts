import { User } from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  validateSync,
} from 'class-validator';

// Interface para as propriedades de entrada de atualização
export interface UpdateOneUserInputProps
  extends Omit<User, 'role' | 'status'> {}

// Classe que representa a entrada para a atualização de um usuário
export class UpdateOneUserInput {
  @IsString()
  @IsNotEmpty()
  id: string; // ID do usuário a ser atualizado

  @IsOptional()
  @IsString()
  username?: string; // Nome de usuário opcional

  @IsOptional()
  @IsEmail()
  email?: string; // Email opcional

  @IsOptional()
  @IsString()
  full_name?: string | null; // Nome completo opcional

  @IsOptional()
  @IsString()
  first_name?: string | null; // Primeiro nome opcional

  @IsOptional()
  @IsString()
  last_name?: string | null; // Último nome opcional

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  password?: string; // Senha opcional

  constructor(props: UpdateOneUserInputProps) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

// Classe para validação
export class ValidateUpdateOneUserInput {
  static validate(input: UpdateOneUserInput) {
    return validateSync(input);
  }
}
