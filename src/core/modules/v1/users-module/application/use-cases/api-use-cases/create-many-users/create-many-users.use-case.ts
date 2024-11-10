import { CreateManyUsersInput } from './create-many-users.input';

export class CreateManyUsersUseCase {
  constructor(private readonly userRepo: any) {}
  async execute(input: CreateManyUsersInput[]) {
    return input;
  }
}
