'use strict';

const path = require('path');

module.exports = (options) => {
  options = options || {};

  const client = require('webdriverio').remote({
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    host: 'localhost',
    port: process.env.USE_SAUCE === 'true' ? 4445 : 4444, // port 4445 is used with Sauce Connect
    desiredCapabilities: {
      browserName: process.env.BROWSER || 'chrome',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER || process.env.SAUCE_USERNAME,
      build: process.env.TRAVIS_BUILD_NUMBER || new Date().toISOString(),
      name: path.basename(__filename)
    }
  });

  client.baseUrl = options.baseUrl || `http://localhost:${options.port || process.env.PORT || 3000}`;

  console.log(`Testing application on ${client.baseUrl}`);

  return client;
};
