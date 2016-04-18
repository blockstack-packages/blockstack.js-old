# Blockstack JS

[![CircleCI](https://img.shields.io/circleci/project/blockstack/blockstack-js/master.svg)](https://circleci.com/gh/blockstack/blockstack-js/tree/master)
[![npm](https://img.shields.io/npm/l/blockstack.svg)](https://www.npmjs.com/package/blockstack)
[![npm](https://img.shields.io/npm/v/blockstack.svg)](https://www.npmjs.com/package/blockstack)
[![npm](https://img.shields.io/npm/dm/blockstack.svg)](https://www.npmjs.com/package/blockstack)
[![Slack](http://slack.blockstack.org/badge.svg)](http://slack.blockstack.org/)

Blockstack JS is an all-encompassing JS library for Blockstack libraries and functions.

### Child Libraries

- [Blockstack Profiles](https://github.com/blockstack/blockstack-profiles-js)
- [Blockstack Zones](https://github.com/blockstack/blockstack-zones-js)
- [Blockstack Keychain](https://github.com/blockstack/blockstack-keychain-js)
- [Blockstack Tokens](https://github.com/blockstack/blockstack-tokens-js)

### Installation

```bash
$ npm install blockstack
```

### Importing

#### ES6

```es6
import { profiles, zones, keychain, tokens } from 'blockstack'
```

#### Node

```js
var blockstack = require('blockstack')
```

### Usage

#### Available Functions

```js
{ profiles: 
   { signTokenRecord: [Function: signTokenRecord],
     signTokenRecords: [Function: signTokenRecords],
     getProfileFromTokens: [Function: getProfileFromTokens],
     verifyTokenRecord: [Function: verifyTokenRecord],
     prepareZoneFileForHostedFile: [Function: prepareZoneFileForHostedFile],
     Profile: [Function: Profile],
     Person: [Function: Person],
     Organization: [Function: Organization],
     CreativeWork: [Function: CreativeWork],
     nextYear: [Function: nextYear] },
  keychain: 
   { getChildKeypair: [Function: getChildKeypair],
     getEntropy: [Function: getEntropy],
     PrivateKeychain: [Function: PrivateKeychain],
     PublicKeychain: [Function: PublicKeychain],
     numberToEntropy: [Function: numberToEntropy] },
  tokens: 
   { TokenSigner: [Function: TokenSigner],
     TokenVerifier: [Function: TokenVerifier],
     decodeToken: [Function: decodeToken],
     MissingParametersError: [Function: MissingParametersError],
     SECP256K1Client: 
      { [Function: SECP256K1Client]
        algorithmName: 'ES256K',
        createHash: [Function],
        loadPrivateKey: [Function],
        loadPublicKey: [Function],
        privateKeyToPublicKey: [Function],
        signHash: [Function],
        loadSignature: [Function],
        verifyHash: [Function] } },
  zones: 
   { makeZoneFile: [Function: makeZoneFile],
     parseZoneFile: [Function: parseZoneFile],
     ZoneFile: [Function: ZoneFile] } }
```
