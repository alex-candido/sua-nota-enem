import { Injectable } from '@nestjs/common';

@Injectable()
export class UserPresenter {
  async presenter(output: any) {
    return output;
  }
}
