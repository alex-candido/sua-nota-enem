import IUseCase from '../../../../../../../../core/@seedwork/application/interfaces/use-case.interface';

import { User } from '../../../../domain/entities/user';
import { IUserRepository } from '../../../../domain/repository/user.repository';
import { UserOutput } from '../../../output/user.output';
import { CreateOneUserInput } from './create-one-user.input';

export class CreateOneUserUseCase
  implements IUseCase<CreateOneUserInput, CreateUserOutput>
{
  constructor(private readonly userRepo: IUserRepository) {}

  async execute(input: CreateOneUserInput): Promise<CreateUserOutput> {
    const entity = User.create(input);

    const user = await this.userRepo.createOne(entity);

    return UserOutput.toOutput(user as User);
  }
}

export type CreateUserOutput = UserOutput;
