import { RemoveManyUsersInput } from '../input/remove-many-user.input';

export class RemoveManyUsersUseCase {
  constructor(private readonly userRepo: any) {}
  async execute(input: RemoveManyUsersInput) {
    return {
      ...input,
    };
  }
}
