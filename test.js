/*!
 * map-types <https://github.com/jonschlinkert/map-types>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var abbrev = require('./');


describe('abbrev()', function () {
  it('should return an array of javascript native types for a letter:', function () {
    abbrev('a').should.eql(['array']);
    abbrev('b').should.eql(['boolean']);
    abbrev('f').should.eql(['function']);
    abbrev('n').should.eql(['number']);
    abbrev('o').should.eql(['object']);
    abbrev('r').should.eql(['regexp']);
    abbrev('s').should.eql(['string']);
    abbrev('y').should.eql(['symbol']);
  });

  it('should return an array of types:', function () {
    abbrev('s').should.eql(['string']);
    abbrev('ss').should.eql(['string', 'string']);
    abbrev('sso').should.eql(['string', 'string', 'object']);
    abbrev('ssoo').should.eql(['string', 'string', 'object', 'object']);
    abbrev('ssof').should.eql(['string', 'string', 'object', 'function']);
    abbrev('ssf').should.eql(['string', 'string', 'function']);
    abbrev('so').should.eql(['string', 'object']);
    abbrev('soo').should.eql(['string', 'object', 'object']);
    abbrev('sooo').should.eql(['string', 'object', 'object', 'object']);
    abbrev('soof').should.eql(['string', 'object', 'object', 'function']);
    abbrev('sof').should.eql(['string', 'object', 'function']);
    abbrev('sf').should.eql(['string', 'function']);
    abbrev('o').should.eql(['object']);
    abbrev('oo').should.eql(['object', 'object']);
    abbrev('of').should.eql(['object', 'function']);
    abbrev('ooo').should.eql(['object', 'object', 'object']);
    abbrev('oof').should.eql(['object', 'object', 'function']);
    abbrev('a').should.eql(['array']);
    abbrev('af').should.eql(['array', 'function']);
    abbrev('ao').should.eql(['array', 'object']);
    abbrev('aof').should.eql(['array', 'object', 'function']);
    abbrev('aoo').should.eql(['array', 'object', 'object']);
    abbrev('f').should.eql(['function']);
    abbrev('fo').should.eql(['function', 'object']);
    abbrev('foo').should.eql(['function', 'object', 'object']);
    abbrev('sss').should.eql(['string', 'string', 'string']);
    abbrev('bsa').should.eql(['boolean', 'string', 'array']);
    abbrev('ssa').should.eql(['string', 'string', 'array']);
    abbrev('ff').should.eql(['function', 'function']);
  });
});

describe('abbrev.types', function () {
  it('should return the javascript native type for a letter:', function () {
    abbrev.types['a'].should.eql('array');
    abbrev.types['b'].should.eql('boolean');
    abbrev.types['f'].should.eql('function');
    abbrev.types['n'].should.eql('number');
    abbrev.types['o'].should.eql('object');
    abbrev.types['r'].should.eql('regexp');
    abbrev.types['s'].should.eql('string');
    abbrev.types['y'].should.eql('symbol');
  });
});

