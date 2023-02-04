export type GalleryGetQuery =
  | {
      address: string;
    }
  | {
      user: string;
    };

export interface GalleryGetResponse {
  gallery: Gallery[];
}

export interface Gallery {
  id: string;
  createdAt: string;
  mintPubkey: string;
  edition: string;
  uri: string;
  mintStatus: string;
}
