import ClassValidatorFields from '../../../../../core/@seedwork/domain/validators/class-validator-fields';
import { UserProperties } from '../entities/user';
import { UserRules } from '../rules/user.rules';

export class UserValidator extends ClassValidatorFields<UserRules> {
  validate(data: UserProperties): boolean {
    return super.validate(new UserRules(data ?? ({} as any)));
  }
}

export class UserValidatorFactory {
  static create() {
    return new UserValidator();
  }
}

export default UserValidatorFactory;
