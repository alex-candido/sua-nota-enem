import { User } from '@prisma/client';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  validateSync,
} from 'class-validator';

export interface CreateManyUsersInputProps
  extends Omit<User, 'role' | 'status'> {}

export class CreateManyUsersInput {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsOptional()
  @IsString()
  full_name: string | null;

  @IsOptional()
  @IsString()
  first_name: string | null;

  @IsOptional()
  @IsString()
  last_name: string | null;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;
  constructor(props: CreateManyUsersInputProps[]) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

export class ValidateCreateManyUsersInput {
  static validate(input: CreateManyUsersInput) {
    return validateSync(input);
  }
}
