import { Injectable } from '@nestjs/common';

@Injectable()
export class UserCollectionPresenter {
  async presenter(output: any) {
    return output;
  }
}
