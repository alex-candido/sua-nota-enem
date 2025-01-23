import { IsNotEmpty, IsString, validateSync } from 'class-validator';

export interface FindOneUserInputProps {
  id: string;
}

export class FindOneUserInput {
  @IsString()
  @IsNotEmpty()
  id: string;

  constructor(props: FindOneUserInputProps) {
    if (!props) return;
    this.id = props.id;
  }
}

// Classe para validação
export class ValidateFindOneUserInput {
  static validate(input: FindOneUserInput) {
    return validateSync(input);
  }
}
