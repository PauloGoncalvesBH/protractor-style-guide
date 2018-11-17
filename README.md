# Protractor Style Guide

[![library: protractor-helper](https://img.shields.io/badge/library-protractor--helper-blue.svg)](https://www.npmjs.com/package/protractor-helper)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://www.npmjs.com/package/prettier)

Automation style guide using Protractor and [Protractor-helper](https://www.npmjs.com/package/protractor-helper)

[[Português - BR]](./docs/README.PT-BR.md)

## Prerequisites

- [Git](https://git-scm.com/download/) and [Node.js](https://nodejs.org/en/download/) installeds.

## Installing dependencies and running tests

The tests will run in [headless mode](https://developers.google.com/web/updates/2017/04/headless-chrome), that is, without the browser opening the graphical interface.

All the commands below are done in the _command prompt_.

**1** - Make a clone of the repository and access the directory created by the clone:

```sh
git clone https://github.com/PauloGoncalvesBH/protractor-style-guide.git && cd protractor-exemplo
```

**2** - Install the project dependencies:

```sh
npm install
```

**3** - And finally, enter the following command to run the tests:

```sh
npm test
```

## Test result

There are two ways to check the test results:

1. Through the HTML report, enter the following command:

```sh
npm run report
```

2. From the command prompt, where you will see a similar result at the end of the test run:

```sh
> protractor-style-guide@1.0.0 test c:\protractor-style-guide
> protractor

[01:40:30] I/launcher - Running 1 instances of WebDriver
[01:40:30] I/local - Starting selenium standalone server...
[01:40:31] I/local - Selenium standalone server started at http://192.168.0.3:49223/wd/hub
Jasmine started

  1 'Sign up to win 1 million' form
    √ Fill 'First name' field with 21 characters (2 secs)
    √ Submit without fill field (0.499 sec)
    √ Fill 'First name' field with 2 characters (0.434 sec)
    √ Submit filling all fields (0.725 sec)
    √ Submit filling only 'Message' field (0.559 sec)

Executed 5 of 5 specs SUCCESS in 4 secs.
Randomized with seed 33052.
[01:40:38] I/local - Shutting down selenium standalone server.
[01:40:38] I/launcher - 0 instance(s) of WebDriver still running
[01:40:38] I/launcher - chrome #01 passed

> protractor-style-guide@1.0.0 posttest c:\protractor-style-guide
> allure generate allure-results --clean -o allure-report || true

Report successfully generated to allure-report
```
