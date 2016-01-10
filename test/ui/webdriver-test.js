'use strict';

const webdriverio = require('webdriverio');
const test = require('tape');

const browser = webdriverio.remote({
  desiredCapabilities: {
    browserName: process.env.BROWSER || 'phantomjs'
  }
});

const baseUrl = `http://localhost:${process.env.PORT || 3000}`;

console.log(`Testing application on ${baseUrl}`);

test('should visit application', (assert) => {
  assert.plan(1);
  browser
      .init()
      .url(baseUrl)
      .getTitle()
      .then((title) => {
        assert.equal(title, 'saucelabs-spike');
      })
      .end();
});
