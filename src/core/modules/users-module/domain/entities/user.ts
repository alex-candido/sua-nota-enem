import { $Enums, User as UserSchema } from '@prisma/client';

import AggregateRoot from '../../../../../core/@seedwork/domain/entity/aggregate-root';
import { EntityValidationError } from '../../../../../core/@seedwork/domain/errors/validation-error';
import UniqueEntityId from '../../../../../core/@seedwork/domain/value-objects/unique-entity-id.vo';

import UserValidatorFactory from '../validators/user.validator';

export interface UserProperties {
  id?: string;
  email: string;
  username: string;
  full_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  password: string;
  role?: $Enums.UserRole | null;
  status?: $Enums.UserStatus | null;
  created_at?: Date | null;
  updated_at?: Date | null;
}

export interface UserCreateCommand {
  email: string;
  username: string;
  full_name: string;
  password: string;
}

export type CategoryPropsJson = Required<{ id: string } & UserProperties>;

export class UserId extends UniqueEntityId {}

export class User extends AggregateRoot<
  UserProperties,
  UserId,
  CategoryPropsJson
> {
  constructor(
    public readonly props: UserProperties | UserSchema,
    userId?: UserId,
  ) {
    super(props, userId ?? new UserId());
    User.validate(props);
    this.props.created_at = this.props.created_at ?? new Date();
    this.props.updated_at = this.props.updated_at ?? new Date();
  }

  get email(): string {
    return this.props.email;
  }

  set email(value: string) {
    this.props.email = value;
  }

  get username(): string {
    return this.props.username;
  }

  set username(value: string) {
    this.props.username = value;
  }

  get full_name(): string {
    return this.props.full_name;
  }

  set full_name(value: string) {
    this.props.full_name = value;
  }

  get first_name(): string {
    return this.props.first_name;
  }

  set first_name(value: string) {
    this.props.first_name = value;
  }

  get last_name(): string {
    return this.props.last_name;
  }

  set last_name(value: string) {
    this.props.last_name = value;
  }

  get password(): string {
    return this.props.password;
  }

  set password(value: string) {
    this.props.password = value;
  }

  get role(): $Enums.UserRole | null {
    return this.props.role;
  }

  set role(value: $Enums.UserRole | null) {
    this.props.role = value;
  }

  get status(): $Enums.UserStatus | null {
    return this.props.status;
  }

  set status(value: $Enums.UserStatus | null) {
    this.props.status = value;
  }

  get created_at(): Date | null {
    return this.props.created_at;
  }

  set created_at(value: Date | null) {
    this.props.created_at = value;
  }

  get updated_at(): Date | null {
    return this.props.updated_at;
  }

  set updated_at(value: Date | null) {
    this.props.updated_at = value;
  }

  static create(props: UserCreateCommand): User {
    return new User(props);
  }

  static validate(props: UserProperties) {
    const validator = UserValidatorFactory.create();
    const isValid = validator.validate(props);
    if (!isValid) {
      throw new EntityValidationError(validator.errors);
    }
  }

  toJSON(): CategoryPropsJson {
    return {
      id: this.id.toString(),
      email: this.email,
      username: this.username,
      full_name: this.full_name,
      first_name: this.first_name,
      last_name: this.last_name,
      password: this.password,
      role: this.role,
      status: this.status,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}
