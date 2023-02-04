
import { Base } from '.';
import { Collection, CreateCollection, GetCollections, Holders } from './types/collections';

export class Collections extends Base {
    /**
     * Create a new NFT collection on Solana mainnet.
     *
     * This endpoint requires an image upload, so the request should be in the form of a multipart/form-data request.
     *
     * @param collectionId The base url
     * @param _options The base fetch options
     * @returns A fresh wretch instance
     */
  
    async createCollection(object: CreateCollection) {
      const formData = new FormData();
      for ( const key in object ) {
        formData.append(key, (<any> object)[key]);
    }
      const response = this.fetchFunction('/collections', {
        method: 'POST',
        body: formData,
      });
      return (await response).json() as Promise< Collection>;
    }
  
    /**
     * Get a list of collections you've launched.
     * @returns A list of collections you've launched.
     */
  
    async getCollections() {
      const response = this.fetchFunction('/collections', {
        method: 'GET',
      });
      return (await response).json() as Promise<GetCollections>;
    }
    /**
     * Get a list of collections by ID
     * @returns A list of collections by ID
     */
  
    async getCollectionsById(id: string) {
      const response = this.fetchFunction(`/collections/${id}`, {
        method: 'GET',
      });
      return (await response).json() as Promise<Collection>;
    }
    /**
     * For a given collection, return a list of the Comet users and/or addresses who hold tokens in that collection.
     * @returns A list of collections you've launched.
     */
  
    async getCollectionsHolders(id: string) {
      const response = this.fetchFunction(`/collections${id}/holders`, {
        method: 'GET',
      });
      return (await response).json() as Promise<Holders>;
    }
  }
  
  
  