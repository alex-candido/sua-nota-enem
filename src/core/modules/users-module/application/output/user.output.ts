import { User } from '../../domain/entities/user';

export class UserOutput {
  static toOutput(entity: User): any {
    const { id: _id, ...otherProps } = entity.toJSON();
    return {
      id: entity.props.id,
      ...otherProps,
    };
  }
}
