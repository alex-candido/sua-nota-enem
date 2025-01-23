import { IsNotEmpty, IsString, validateSync } from 'class-validator';

export interface RemoveOneUserInputProps {
  id: string; // Alterado para um único ID
}

export class RemoveOneUserInput {
  @IsString()
  @IsNotEmpty()
  id: string;

  constructor(props: RemoveOneUserInputProps) {
    if (!props) return;
    this.id = props.id;
  }
}

// Classe para validação
export class ValidateRemoveOneUsersInput {
  static validate(input: RemoveOneUserInput) {
    return validateSync(input);
  }
}
