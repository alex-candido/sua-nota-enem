import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  validateSync,
} from 'class-validator';

export interface RemoveManyUsersInputProps {
  ids: string[];
}

export class RemoveManyUsersInput {
  @IsArray() // Verifica se é um array
  @ArrayNotEmpty() // Garante que o array não está vazio
  @ArrayMinSize(1) // Garante que o array tenha pelo menos um elemento
  ids: string[];

  constructor(props: RemoveManyUsersInputProps) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

// Classe para validação
export class ValidateRemoveManyUsersInput {
  static validate(input: RemoveManyUsersInput) {
    return validateSync(input);
  }
}
