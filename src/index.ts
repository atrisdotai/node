import { Collections } from './collections';
import { AirDrop } from './airdrop';
import { Gallery } from './gallery';
import { Usage } from './usage';
import { CometConfig, FetchFunction } from './types/main';
import { fetch, RequestInit } from 'undici';

export class Comet {
  collections: Collections;
  airdrops: AirDrop;
  gallery: Gallery;
  usage: Usage;

  constructor(contents: CometConfig) {
    const parsed = CometConfig.safeParse(contents);
    if (!parsed.success) throw new Error(parsed.error.message);

    const fetchFunction = async <T, U>(subUrl: string, args: RequestInit) => {
      const res = await fetch(parsed.data.endpoint + subUrl, {
        headers: {
          Authorization: `Bearer ${parsed.data.token}`,
          'Content-Type': 'application/json',
        },
        ...args,
      });
      const json = await res.json();
      if (res.status !== 200) return json as U;
      return json as T;
    };

    this.collections = new Collections(fetchFunction);
    this.airdrops = new AirDrop(fetchFunction);
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
