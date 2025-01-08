import { User } from '@prisma/client';
import { validateSync } from 'class-validator';
import { UpdateOneUserInput } from '../update-one-user/update-one-user.input';

export interface UpdateManyUsersInputProps extends User {}

export class UpdateManyUsersInput extends UpdateOneUserInput {
  constructor(props: UpdateManyUsersInputProps) {
    super(props);
    if (!props) return;
    Object.assign(this, props);
  }
}

export class ValidateUpdateManyUsersInput {
  static validate(inputs: UpdateManyUsersInputProps[]) {
    return inputs.map(input => validateSync(new UpdateManyUsersInput(input)));
  }
}
