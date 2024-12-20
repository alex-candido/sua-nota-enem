import { FindOneUserInput } from '../input/find-one-user.input';

export class FindOneUserUseCase {
  constructor(private readonly userRepo: any) {}
  async execute(input: FindOneUserInput) {
    return {
      ...input,
    };
  }
}
