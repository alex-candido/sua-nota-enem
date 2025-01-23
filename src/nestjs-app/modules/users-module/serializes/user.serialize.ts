import { Injectable } from '@nestjs/common';

@Injectable()
export class UserSerialize {
  async serialize(output: any) {
    return output;
  }
}
