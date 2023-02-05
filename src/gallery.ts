import { Base } from '.';
import { GalleryGetQuery, GalleryGetResponse } from './types/gallery';
import { BasicErrorReponse } from './types/main';

export class Gallery extends Base {
  /**
   * Get all tokens owned by a user or address.
   *
   * @param indentifier A user's Comet User ID or Solana address.
   * @returns A list of tokens owned by the user.
   */

  async get(indentifier: GalleryGetQuery) {
    const query = (key: string) => `?${key}=${(<any>indentifier)[key]}`;

    const response = this.fetchFunction<GalleryGetResponse, BasicErrorReponse>(`/gallery`, {
      method: 'GET' + query('address' in indentifier ? 'address' : 'user'),
    });
    return response;
  }
}
