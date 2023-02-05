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
import comet from 'comet-js';
const comet = new Comet({
  version: "v1", // Optional
  endpoint: "https://api.withcomet.com", // Optional
  token: "********************"
});

const usage = await comet.usage.get();
if (usage.message) {
  throw new Error("Uh oh! Something happend")
}

console.log(usage);
```

## Support

New features and bug fixes are released on the latest major version of the `comet` package. If you are on an older major version, we recommend that you upgrade to the latest in order to use the new features and bug fixes including those for security vulnerabilities. Older major versions of the package will continue to be available for use, but will not be receiving any updates.


## Credit 
The following README.md was heavily inspired by Stripe's Node.js library README.md. They do things right over there.