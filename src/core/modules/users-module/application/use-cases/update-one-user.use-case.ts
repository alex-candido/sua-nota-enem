import { UpdateOneUserInput } from '../input/update-one-user.input';

export class UpdateOneUserUseCase {
  constructor(private readonly userRepo: any) {}
  async execute(_id: any, _input: UpdateOneUserInput) {}
}
