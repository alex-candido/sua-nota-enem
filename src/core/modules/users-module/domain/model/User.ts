import { $Enums } from '@prisma/client';
import { FieldRef } from '@prisma/client/runtime/library';

export interface UserRefsProperties {
  id: string | FieldRef<'User', 'String'>;

  email: string | FieldRef<'User', 'String'>;
  username: string | FieldRef<'User', 'String'>;
  full_name: string | null | FieldRef<'User', 'String'>;
  first_name: string | null | FieldRef<'User', 'String'>;
  last_name: string | null | FieldRef<'User', 'String'>;
  password: string | FieldRef<'User', 'String'>;

  role: $Enums.UserRole | FieldRef<'User', 'UserRole'>;
  status: $Enums.UserStatus | FieldRef<'User', 'UserStatus'>;

  created_at: Date | FieldRef<'User', 'DateTime'>;
  updated_at: Date | FieldRef<'User', 'DateTime'>;
}
