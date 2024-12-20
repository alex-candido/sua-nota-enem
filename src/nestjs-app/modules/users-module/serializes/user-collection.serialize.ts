import { Injectable } from '@nestjs/common';

@Injectable()
export class UserCollectionSerialize {
  async serialize(output: any) {
    return output;
  }
}
