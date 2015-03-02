/// <reference path="../typings/bundle.d.ts" />

import assert = require('assert');
import sut = require('../index');

describe('closure-library.ts', () => {
  it('register', () => {
    sut.register();
    var string = goog.require('goog.string');
    assert.ok(string.startsWith('foo', 'fo'));
  });
});
