'use strict';

const webdriverio = require('webdriverio');
const test = require('tape');

const browser = webdriverio.remote({
  desiredCapabilities: {
    browserName: 'phantomjs'
  }
});

test('should visit application', (assert) => {
  assert.plan(1);
  browser.init()
    .url('http://localhost:3000/')
    .getTitle().then((title) => {
      assert.equal(title, 'saucelabs-spike');
    })
    .end();
});
