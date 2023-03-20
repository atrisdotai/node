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
  id: string;
  statuses: Statuses;
  count: number;
}

// SUCCEEDED, IN_PROGRESS, FAILED, and FAILED:NORETRY
export interface Statuses {
  SUCCEEDED?: StatusIndividual[];
  IN_PROGRESS?: StatusIndividual[];
  FAILED?: StatusIndividual[];
  'FAILED:NORETRY'?: StatusIndividual[];
}

export interface StatusIndividual {
  taskId: string;
  CometUserId?: string;
  address: string;
}
