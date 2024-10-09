const assert = require('assert');
const sayHello = require('./say-hello.js');

const actual = sayHello('bob');

const expected = 'hello there bob';

assert.equal(actual, expected);
