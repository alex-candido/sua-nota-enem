import { User, UserRole, UserStatus } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  validateSync,
  ValidationError,
} from 'class-validator';

export interface CreateOneUserInputProps
  extends Omit<User, 'created_at' | 'updated_at'> {}

export class CreateOneUserInput {
  @IsEmail()
  @MaxLength(320)
  @MinLength(5)
  @IsString()
  @IsNotEmpty()
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

  @MaxLength(30)
  @MinLength(8)
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(UserRole)
  @IsOptional()
  role: UserRole = UserRole.CLIENT;

  @IsEnum(UserStatus)
  @IsOptional()
  status: UserStatus = UserStatus.ACTIVE;

  constructor(props: CreateOneUserInputProps) {
    if (!props) return;
    Object.assign(this, props);
  }
}

export class ValidateCreateOneUserInput {
  static validate(input: Partial<CreateOneUserInput>): ValidationError[] {
    return validateSync(input);
  }
}
