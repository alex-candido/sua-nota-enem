import { SearchUsersInput } from './search-user.input';

export class SearchUsersUseCase {
  constructor(private readonly userRepo: any) {}
  async execute(input: SearchUsersInput) {
    return {
      ...input,
    };
  }
}
