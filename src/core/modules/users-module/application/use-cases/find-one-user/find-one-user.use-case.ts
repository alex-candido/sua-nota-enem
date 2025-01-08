import IUseCase from '../../../../../../core/@seedwork/application/interfaces/use-case.interface';

import { UserId } from '../../../domain/entities/user';
import { IUserRepository } from '../../../domain/repository/user.repository';
import { FindOneUserInput } from '../find-one-user/find-one-user.input';
import { UserOutput } from '../../output/user.output';

export class FindOneUserUseCase
  implements IUseCase<FindOneUserInput, UserOutput>
{
  constructor(private readonly userRepo: IUserRepository) {}
  async execute(input: FindOneUserInput): Promise<any> {
    const userId = new UserId(input.id);
    const user = await this.userRepo.findOne(userId);
    return UserOutput.toOutput(user);
  }
}
