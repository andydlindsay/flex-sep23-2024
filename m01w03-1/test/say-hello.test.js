const assert = require('assert');
const sayHello = require('../say-hello');

describe('tests for the sayHello function', function() {

  it('returns "hello there alice" when passed the string "alice"', function() {
    const actual = sayHello('alice');
    const expected = 'hello there alice';

    assert.equal(actual, expected);
  });

  it('returns null if no name is passed in', function() {
    const actual = sayHello();
    const expected = null;

    assert.equal(actual, expected);
  });

});
