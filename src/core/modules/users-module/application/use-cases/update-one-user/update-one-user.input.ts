import { User, UserRole, UserStatus } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  validateSync,
} from 'class-validator';

export interface UpdateOneUserInputProps
  extends Omit<User, 'role' | 'status'> {}

export class UpdateOneUserInput {
  @IsString()
  @IsOptional()
  id: string;

  @IsEmail()
  @MaxLength(320)
  @MinLength(5)
  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
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
  @IsOptional()
  password: string;

  @IsEnum(UserRole)
  @IsOptional()
  role: UserRole = UserRole.CLIENT;

  @IsEnum(UserStatus)
  @IsOptional()
  status: UserStatus = UserStatus.ACTIVE;

  constructor(props: UpdateOneUserInputProps) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

export class ValidateUpdateOneUserInput {
  static validate(input: UpdateOneUserInput) {
    return validateSync(input);
  }
}
