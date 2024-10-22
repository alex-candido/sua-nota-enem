import { FilterUsersInput } from './filter-user.input';

export class FilterUsersUseCase {
  constructor(private readonly userRepo: any) {}
  async execute(input: FilterUsersInput) {
    return {
      ...input,
    };
  }
}
