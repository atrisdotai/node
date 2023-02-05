import { z } from 'zod';

export const CometConfig = z.object({
  version: z.string().default('v1'),
  endpoint: z.string().default('https://api.withcomet.com'),
  token: z.string({
    required_error:
      'Token is required to access the Comet API. Please provide one. You can get one at https://app.withcomet.com/settings/api',
  }),
});

export type CometConfig = {
  version?: string;
  endpoint?: string;
  token: string;
};

export type FetchFunction = <T, U>(subUrl: string, args: RequestInit) => Promise<T | U>;

export type BasicErrorReponse = {
  message: string;
};
