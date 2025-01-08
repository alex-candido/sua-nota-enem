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
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
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
