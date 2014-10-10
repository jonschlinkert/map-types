/*!
 * map-types <https://github.com/jonschlinkert/map-types>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function types(abbrev) {
  return abbrev.split('').map(function(type) {
    return abbreviations[type];
  });
};

var abbreviations = module.exports.types = {
  a: 'array',
  b: 'boolean',
  f: 'function',
  n: 'number',
  o: 'object',
  r: 'regexp',
  s: 'string',
  y: 'symbol',
};

