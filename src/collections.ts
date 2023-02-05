import { Base } from '.';
import { Collection, CreateCollection, GetCollections, Holders } from './types/collections';
import { BasicErrorReponse } from './types/main';
import { FormData } from 'undici';

export class Collections extends Base {
  /**
   * Create a new NFT collection on Solana mainnet.
   *
   * This endpoint requires an image upload, so the request should be in the form of a multipart/form-data request.
   *
   * @param object The collection object to create
   * @returns The collection you created
   */

  async create(object: CreateCollection) {
    const formData = new FormData();
    for (const key in object) {
      formData.append(key, (<any>object)[key]);
    }
    const response = await this.fetchFunction<Collection, BasicErrorReponse>('/collections', {
      method: 'POST',
      body: formData,
    });
    return response;
  }

  /**
   * Get a list of collections you've launched.
   * @returns A list of collections you've launched.
   */

  async list() {
    const response = this.fetchFunction<GetCollections, BasicErrorReponse>('/collections', {
      method: 'GET',
    });
    return response;
  }
  /**
   * Get a list of collections by ID
   * @returns A list of collections by ID
   */

  async getById(id: string) {
    const response = this.fetchFunction<Collection, BasicErrorReponse>(`/collections/${id}`, {
      method: 'GET',
    });
    return response;
  }
  /**
   * For a given collection, return a list of the Comet users and/or addresses who hold tokens in that collection.
   * @returns A list of collections specified user has launched.
   */

  async getByHolders(id: string) {
    const response = this.fetchFunction<Holders, BasicErrorReponse>(`/collections${id}/holders`, {
      method: 'GET',
    });
    return response;
  }
}
