import { validateSync } from 'class-validator';
import ValidatorFieldsInterface, {
  FieldsErrors,
} from './validator-fields-interface';

export abstract class ClassValidatorFields<PropsValidated>
  implements ValidatorFieldsInterface<PropsValidated>
{
  errors: FieldsErrors | any = null;
  validatedData: PropsValidated | any = null;

  validate(data: any): boolean {
    const errors = validateSync(data);
    if (errors.length) {
      this.errors = {};
      for (const error of errors) {
        const field = error.property;
        this.errors[field] = Object.values(error.constraints as any);
      }
    } else {
      this.validatedData = data;
    }
    return !errors.length;
  }
}

export default ClassValidatorFields;
