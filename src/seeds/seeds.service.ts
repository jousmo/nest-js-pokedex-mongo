import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedsService {
  executeSeed() {
    return 'Execute seed successfully';
  }
}
