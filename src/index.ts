import { Collections } from './collections';
import { Airdrop } from './airdrop';
import { CometConfig, FetchFunction } from './types/main';

export class Comet {
  collections: Collections;
  airdrops: any;
  gallery: any;
  usage: any;

  constructor(contents: CometConfig) {
    const parsed = CometConfig.safeParse(contents);
    if (!parsed.success) throw new Error(parsed.error.message);

    const fetchFunction = (subUrl: string, args: RequestInit) =>
      fetch(parsed.data.endpoint + subUrl, {
        headers: {
          Authorization: `Bearer ${parsed.data.token}`,
          'Content-Type': 'application/json',
        },
        ...args,
      });

    this.collections = new Collections(fetchFunction);
    this.airdrops = new Airdrop(fetchFunction);
    this.gallery = new Gallery(fetchFunction);
    this.usage = new Usage(fetchFunction);
  }
}
export class Base {
  protected fetchFunction: FetchFunction;

  constructor(fetchFunction: FetchFunction) {
    this.fetchFunction = fetchFunction;
  }
}

