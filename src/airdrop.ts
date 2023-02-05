import { Base } from '.';
import { AirdropCreateBody, AirdropGetResponse, AirdropCreateResponse } from './types/airdrop';
import { BasicErrorReponse } from './types/main';

export class AirDrop extends Base {
  /**
   * Send airdrops to a list of users or addresses. You can specify a user by their Comet User IDs or Solana addresses.
   *
   * @param users List of users to send the airdrop to
   * @returns The id of the airdrop and the count of users that will receive the airdrop
   */

  async create(users: AirdropCreateBody[]) {
    const response = this.fetchFunction<AirdropCreateResponse, BasicErrorReponse>('/airdrop', {
      method: 'POST',
      body: JSON.stringify({
        airdrops: users,
      }),
    });
    return response;
  }

  /**
   * Grab the status of an airdrop. This will return the status of the airdrop and the number of users that have received the airdrop.
   *
   * This endpoint requires an image upload, so the request should be in the form of a multipart/form-data request.
   *
   * @param id Id of the airdrop.
   * @returns The id of the airdrop, the count of users that will receive the airdrop, and how many users have received the airdrop. This will also include the user address, CometUserId if exist, and taskId of the users that have received the airdrop.
   */

  async get(id: string) {
    const response = this.fetchFunction<AirdropGetResponse, BasicErrorReponse>(`/airdrop/${id}`, {
      method: 'GET',
    });
    return response;
  }
}
