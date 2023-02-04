import { z } from 'zod';

export const CometConfig = z.object({
  version: z.string().default('v1'),
  endpoint: z.string().default('https://api.withcomet.com'),
  token: z.string({
    required_error:
      'Token is required to access the Comet API. Please provide one. You can get one at https://app.withcomet.com/settings/api',
  }),
});

export type CometConfig = z.infer<typeof CometConfig>;

export type FetchFunction = (subUrl: string, args: RequestInit) => Promise<Response>;
