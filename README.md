# saucelabs-spike [![Travis CI Build Status](https://travis-ci.org/halvards/saucelabs-spike.svg?branch=master)](https://travis-ci.org/halvards/saucelabs-spike)

Spike of [Selenium WebDriver](https://github.com/SeleniumHQ/selenium/wiki/Getting-Started) testing with [Sauce Labs](https://saucelabs.com/) using [WebdriverIO](http://webdriver.io/).

## Instructions

### Running the application

To simply run the application:

    npm start

You can optionally supply the port number to use as an environment variable:

    PORT=8080 npm start

The port defaults to 3000. Use `PORT=0` to select a random port.

### Development

To run the application with file watching and automatic restarts enabled:

    npm run dev

### Testing

To run unit tests:

    npm test

To run Selenium tests, first ensure that the Selenium standalone server has been installed (this only needs to be done once):

    npm run selenium-install

Next, you need to start the Selenium standalone server (in another terminal tab/window):

    npm run selenium-start

Then, to run the Selenium tests locally using Google Chrome:

    npm run uitest

This will start the application automatically on port 3001 and then run the tests.

Use another web browser for testing by supplying an environment variable:

    BROWSER=firefox npm run uitest

See [the Selenium wiki on DesiredCapabilities](https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities) for other browser options.
