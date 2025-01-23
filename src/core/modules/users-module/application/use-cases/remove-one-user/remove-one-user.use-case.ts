import IUseCase from '../../../../../../core/@seedwork/application/interfaces/use-case.interface';
import { UserId } from '../../../domain/entities/user';
import { IUserRepository } from '../../../domain/repository/user.repository';
import { RemoveOneUserInput } from './remove-one-user.input';

export class RemoveOneUserUseCase implements IUseCase<RemoveOneUserInput, any> {
  constructor(private readonly userRepo: IUserRepository) {}
  async execute(input: RemoveOneUserInput): Promise<any> {
    const userId = new UserId(input.id);
    return await this.userRepo.removeOne(userId);
  }
}
