# map-types [![NPM version](https://badge.fury.io/js/map-types.svg)](http://badge.fury.io/js/map-types)


> Map single letter abbreviations to javascript native types. Useful as a shorthand for pseudo-argument destructuring when debugging.

## Install
#### Install with [npm](npmjs.org):

```bash
npm i map-types --save-dev
```

## Run tests

```bash
npm test
```

## Usage

```js
var abbrev = require('map-types');

abbrev('a') //=> ['array']
abbrev('b') //=> ['boolean']
abbrev('f') //=> ['function']
abbrev('n') //=> ['number']
abbrev('o') //=> ['object']
abbrev('r') //=> ['regexp']
abbrev('s') //=> ['string']
abbrev('y') //=> ['symbol']
```

Multiple letters are possible:

```js
abbrev('s') //=> ['string']
abbrev('ss') //=> ['string', 'string']
abbrev('sso') //=> ['string', 'string', 'object']
abbrev('ssoo') //=> ['string', 'string', 'object', 'object']
```


## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on October 10, 2014._