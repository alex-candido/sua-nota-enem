import { HttpException, HttpStatus } from '@nestjs/common';

import IUseCase from '../../../../../../core/@seedwork/application/interfaces/use-case.interface';
import { UserOutput } from '../../output/user.output';
import { User, UserId } from '../../../domain/entities/user';
import { IUserRepository } from '../../../domain/repository/user.repository';
import { UpdateOneUserInput } from '../update-one-user/update-one-user.input';

export class UpdateOneUserUseCase
  implements IUseCase<UpdateOneUserInput, UpdateOneUserOutput>
{
  constructor(private readonly userRepo: IUserRepository) {}
  async execute(input: UpdateOneUserInput): Promise<any> {
    const userId = new UserId(input.id);

    const user = await this.userRepo.findById(userId);

    if (!user) {
      throw new HttpException(
        `Entity Not Found using ID ${userId}`,
        HttpStatus.NOT_FOUND,
      );
    }

    this.updateUserAttributes(user, input);

    const updatedUser = await this.userRepo.updateOne(user);

    if (!updatedUser) {
      throw new HttpException(
        `Entity Validation Error ${userId}`,
        HttpStatus.NOT_FOUND,
      );
    }

    return UserOutput.toOutput(updatedUser);
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

export type UpdateOneUserOutput = UserOutput;
