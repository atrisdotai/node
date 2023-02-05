# Comet Node.js Library

The Comet Node library provides convenient access to the Comet API from
applications written in server-side JavaScript.

## Documentation

See the [`Comet` API docs](https://comet-3.gitbook.io/comet-sdk/reference/comet-sdk-reference/comet-rest-api) for Rest API Endpoints.

## Requirements

Node 12 or higher.

## Installation

Install the package with:

```sh
npm install comet-js --save
# or
yarn add comet-js
# or
pnpm add comet-js
```

## Usage

The package needs to be configured with your account's token, which is
available on the Comet Dashboard, labeled as "Comet API key".

<!-- prettier-ignore -->
```js
import CometSDK from 'comet-js';

const comet = new CometSDK({
  version: "v1", // Optional
  endpoint: "https://api.withcomet.com", // Optional
  token: "********************"
});

const usage = await comet.usage.get();

if ("message" in usage) {
  console.log(usage.message); // Error Message
}
console.log(usage);
```

## Samples

### Collections

Launch an NFT collection on Solana mainnet. We currently support two types:

- **Static passes:** All NFTs in a static pass collection have the same image.
- **Numbered passes:** Like static passes, numbered passes all share the same image, but NFTs are distinguishable by a number at the bottom of the image. NFTs are minted in order, where the first NFT minted says "#1" at the bottom.

After calling the create function, Comet will automatically start deploying the collection on Solana mainnet. This usually takes 30-60 seconds. To monitor the progress of the deployment, use the get function to retrieve the collection's status.

```js
// Create a static pass collection
const collection = await comet.collections.create({
  backgroundUpload: fs.createReadStream('./background.png'),
  name: 'Comet Coin',
  symbol: '$COMET',
  description: 'An example coin used to buy things on Comet.',
  subtype: 'static-pass',
  pricingModel: 'free',
  infiniteSupply: true,
});

// Get launched collections
const collections = await comet.collections.list();

// Get a collection by ID
const collection = await comet.collections.get('collection-id');

// Get collection holders
const holders = await comet.collections.holders('collection-id');
```

### Airdrops

You can quickly distribute tokens from collections you've launched with Comet by using the create airdrop function. You'll need to specify a list of recipients (either their Comet User IDs or Solana addresses), and for each recipient indicate which collection you want them to receive. An example request is below.

After you've launched your airdrop, Comet will return an `id` that you can use to monitor the status of the airdrop.

{% hint style="warning" %}
Keep in mind that you cannot mint any collection past its `maxSupply`, when applicable. If you try to airdrop more NFTs from a collection than there are available tokens, some recipients won't receive the airdrop.
{% endhint %}

{% hint style="warning" %}
Even if your NFT collection requires payment, recipients will receive your airdropped NFTs for free.
{% endhint %}

```js
// Create a static pass collection
const collection = await comet.airdrop.create([
  { collectionId: '9f46cddbd46f', address: 'AXkcPCWrWYGuayYgKp7y6LhugKzq5f3pqeKnrSod9ufy' },
  { collectionId: '9f46cddbd46f', userId: 'c4367732ab0c' },
]);

// Get launched airdrop
const airdrop = await comet.airdrop.get('airdrop-id');
```

### Gallery

View a user's gallery without talking to an RPC node.

One of `address` or `userId` is required for getting a gallery.


```js
const galleryFromAddress = await comet.gallery.get({
  address: "address" // Solana address
});

const galleryFromUserId = await comet.gallery.get({
  userId: "id" // Comet user id
});

```


### Usage

Get your usage statistics.

```js

const usageStats = await comet.usage.get();

```
## Support

New features and bug fixes are released on the latest major version of the `comet` package. If you are on an older major version, we recommend that you upgrade to the latest in order to use the new features and bug fixes including those for security vulnerabilities. Older major versions of the package will continue to be available for use, but will not be receiving any updates.

## Credit

The following README.md was heavily inspired by Stripe's Node.js library README.md. They do things right over there.

```

```
