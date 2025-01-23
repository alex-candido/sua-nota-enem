import { UserRole, UserStatus } from '@prisma/client';

import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { UserProperties } from '../entities/user';

export class UserRules {
  @IsString()
  @IsOptional()
  id: string;

  @IsEmail()
  @MaxLength(320)
  @MinLength(5)
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsOptional()
  full_name: string | null;

  @IsString()
  @IsOptional()
  first_name: string | null;

  @IsString()
  @IsOptional()
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

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsDate()
  @IsOptional()
  updatedAt: Date;

  constructor(props: UserProperties) {
    if (!props) return;
    Object.assign(this, props);
  }
}
