export type AirdropCreateBody =
  | {
      collectionId: string;
      userId: string;
    }
  | {
      collectionId: string;
      address: string;
    };

export interface AirdropCreateResponse {
  id: string;
  count: number;
}


export interface AirdropGetResponse {
  id: string
  statuses: Statuses
  count: number
}

export interface Statuses {
  SUCCEEDED: Succeeded[]
}

export interface Succeeded {
  taskId: string
  CometUserId?: string
  address: string
}
