import IUseCase from '../../../../../../../../core/@seedwork/application/interfaces/use-case.interface';

import { IUserRepository } from '../../../../domain/repository/user.repository';
import { ListUsersOutput } from '../../../output/list-users.output';
import { FindAllUsersInput } from './find-all-users.input';

export class FindAllUsersUseCase
  implements IUseCase<FindAllUsersInput, ListUsersOutput>
{
  constructor(private readonly userRepo: IUserRepository) {}

  async execute(input: FindAllUsersInput): Promise<any> {}
}
