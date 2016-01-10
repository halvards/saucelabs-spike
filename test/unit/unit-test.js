'use strict';

const test = require('tape');

test('Assertions with tape', (assert) => {
  const expected = 'something to test';
  const actual = 'something to test';

  assert.equal(actual, expected);

  assert.end();
});
