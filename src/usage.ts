import { Base } from '.';
import { BasicErrorReponse } from './types/main';
import { UsageGetResponse } from './types/usage';

export class Usage extends Base {
  /**
   * Get API usage
   *
   * @returns A list of requests made to the API.
   */

  async get() {
    const response = this.fetchFunction<UsageGetResponse, BasicErrorReponse>(`/usage`, {
      method: 'GET',
    });
    return response;
  }
}
