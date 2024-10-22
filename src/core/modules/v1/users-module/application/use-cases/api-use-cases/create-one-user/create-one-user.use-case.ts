import { CreateOneUserInput } from './create-one-user.input';

export class CreateOneUserUseCase {
  constructor(private readonly userRepo: any) {}
  async execute(input: CreateOneUserInput) {
    return {
      ...input,
    };
  }
}
