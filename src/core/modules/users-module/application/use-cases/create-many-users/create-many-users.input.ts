import { User } from '@prisma/client';
import { validateSync } from 'class-validator';
import { CreateOneUserInput } from '../create-one-user/create-one-user.input';

export interface CreateManyUsersInputProps extends User {}

export class CreateManyUsersInput extends CreateOneUserInput {
  constructor(props: CreateManyUsersInputProps) {
    super(props);
    if (!props) return;
    Object.assign(this, props);
  }
}

export class ValidateCreateManyUsersInput {
  static validate(inputs: CreateManyUsersInputProps[]) {
    return inputs.map(input => validateSync(new CreateManyUsersInput(input)));
  }
}
