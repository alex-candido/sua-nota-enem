import { IsNotEmpty, IsString, validateSync } from 'class-validator';

export interface FindOneUserInputProps {
  id: string;
}

export class FindOneUserInput {
  @IsString() // Verifica se é uma string
  @IsNotEmpty() // Garante que não está vazio
  id: string;

  constructor(props: FindOneUserInputProps) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

// Classe para validação
export class ValidateFindOneUserInput {
  static validate(input: FindOneUserInput) {
    return validateSync(input);
  }
}
