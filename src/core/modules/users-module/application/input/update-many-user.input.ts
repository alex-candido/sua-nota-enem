import { User } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
  validateSync,
} from 'class-validator';

export interface UpdateManyUsersInputProps
  extends Omit<User, 'role' | 'status'> {}

export class UpdateUserInput {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  full_name?: string | null;

  @IsOptional()
  @IsString()
  first_name?: string | null;
  @IsOptional()
  @IsString()
  last_name?: string | null;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  password?: string;

  constructor(props: UpdateManyUsersInputProps) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

// Classe que representa a entrada para atualizar múltiplos usuários
export class UpdateManyUsersInput {
  @IsArray()
  @ValidateNested({ each: true }) // Valida cada entrada no array
  @Type(() => UpdateUserInput) // Converte cada entrada para a classe UpdateUserInput
  users: UpdateUserInput[]; // Array de entradas de usuários a serem atualizados

  constructor(users: UpdateManyUsersInputProps[]) {
    this.users = users.map(user => new UpdateUserInput(user)); // Mapeia os usuários para a classe UpdateUserInput
  }
}

// Classe para validação
export class ValidateUpdateManyUsersInput {
  static validate(input: UpdateManyUsersInput) {
    return validateSync(input);
  }
}
