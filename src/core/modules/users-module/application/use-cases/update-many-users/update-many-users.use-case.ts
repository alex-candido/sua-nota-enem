import { HttpException, HttpStatus } from '@nestjs/common';

import IUseCase from '../../../../../../core/@seedwork/application/interfaces/use-case.interface';
import { User, UserId } from '../../../domain/entities/user';
import { IUserRepository } from '../../../domain/repository/user.repository';
import { UserOutput } from '../../output/user.output';
import { UpdateOneUserInput } from '../update-one-user/update-one-user.input';
import { UpdateManyUsersInput } from './update-many-users.input';

export class UpdateManyUsersUseCase
  implements IUseCase<UpdateManyUsersInput[], any>
{
  constructor(private readonly userRepo: IUserRepository) {}
  async execute(inputs: UpdateManyUsersInput[]): Promise<any> {
    const userIds = inputs.map(user => new UserId(user.id));

    const users = await this.userRepo.findByIds(userIds);

    if (!users || users.length === 0) {
      throw new HttpException(
        `No users found with the provided IDs`,
        HttpStatus.NOT_FOUND,
      );
    }

    const updatedUsers = await Promise.all(
      users.map(async user => {
        const input = inputs.find(input => input.id === user.props.id);
        if (!input) {
          throw new HttpException(
            `Input data missing for user ID ${user.props.id}`,
            HttpStatus.BAD_REQUEST,
          );
        }

        this.updateUserAttributes(user, input);

        return user;
      }),
    );

    const updatedManyResult = await this.userRepo.updateMany(updatedUsers);

    return updatedManyResult.map(user => {
      return UserOutput.toOutput(user);
    });
  }

  private updateUserAttributes(user: User, input: UpdateOneUserInput): void {
    if (input.email !== undefined) {
      user.changeEmail(input.email);
    }

    if (input.username !== undefined) {
      user.changeUsername(input.username);
    }

    if (input.full_name !== undefined) {
      user.changeFullName(input.full_name);
    }

    if (input.first_name !== undefined) {
      user.changeFirstName(input.first_name);
    }

    if (input.last_name !== undefined) {
      user.changeLastName(input.last_name);
    }

    if (input.password !== undefined) {
      user.changePassword(input.password);
    }

    if (input.role !== undefined) {
      user.changeRole(input.role);
    }

    if (input.status !== undefined) {
      user.changeStatus(input.status);
    }
  }
}
