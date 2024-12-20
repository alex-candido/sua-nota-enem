import { IsNotEmpty, IsString, validateSync } from 'class-validator';

export interface RemoveOneUsersInputProps {
  id: string; // Alterado para um único ID
}

export class RemoveOneUsersInput {
  @IsString() // Verifica se é uma string
  @IsNotEmpty() // Garante que não está vazio
  id: string;

  constructor(props: RemoveOneUsersInputProps) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

// Classe para validação
export class ValidateRemoveOneUsersInput {
  static validate(input: RemoveOneUsersInput) {
    return validateSync(input);
  }
}
