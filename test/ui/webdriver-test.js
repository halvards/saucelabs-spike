'use strict';

const test = require('tape');
const client = require('./client')();

test('should visit application', (assert) => {
  assert.plan(1);
  client
      .init()
      .url(client.baseUrl)
      .getTitle()
      .then((title) => {
        assert.equal(title, 'saucelabs-spike');
      })
      .end();
});
