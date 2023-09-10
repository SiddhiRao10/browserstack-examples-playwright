![Logo](https://www.browserstack.com/images/static/header-logo.jpg)

# BrowserStack Examples Playwright Framework <a href="https://playwright.dev/"><img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright" height="30" /></a>

## Introduction

Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API. Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast.

This BrowserStack Example repository demonstrates a test framework written in Playwright Framework with parallel testing capabilities. The Playwright test scripts are written for the open source [BrowserStack Demo web application](https://bstackdemo.com) ([Github](https://github.com/browserstack/browserstack-demo-app)). This BrowserStack Demo App is an e-commerce web application which showcases multiple real-world user scenarios. The app is bundled with offers data, orders data and products data that contains everything you need to start using the app and run tests out-of-the-box.

The Playwright tests are run on different platforms like on-prem and BrowserStack using various run configurations and test capabilities.

---

## Repository setup

- Clone the repository

- Ensure you have the following dependencies installed on the machine
    - Node.js

    Install the requirements:
    ```sh
    npm install
    ```


## About the tests in this repository

  This repository contains the following Selenium tests:

  | Module   | Test name                          | Description |
  | ---   | ---                                   | --- |
  | e2e      | E2E Test                | This test scenario verifies successful product purchase lifecycle end-to-end. |
  | login    | Check if Signin opens on clicking on favourites nav item          | This test verifies the login workflow with different types of valid login users. |
  | login    | Check Login with locked_user               | This test verifies the login workflow error for a locked user. |
  | offers   | Set GPS location to Mumbai and check offers     | This test mocks the GPS location for Mumbai and verifies that the product offers applicable for the Mumbai location are shown.   |
  | product  | Apply Apple And Samsung Filter          | This test verifies that the Apple products are only shown if the Apple vendor filter option is applied. |
  | product  | Apply 'Lowest to Highest' Order By Filter   | This test verifies that the product prices are in ascending order when the product sort "Lowest to Highest" is applied. |
  | user     | Check Login with image_not_loading_user | This test verifies that the product images load for user: "image_not_loading_user" on the e-commerce application. Since the images do not load, the test case assertion fails.|
  | user     | Check Order in existing_orders_user |  This test verifies that existing orders are shown for user: "existing_orders_user"  |
  
  ---


## Test infrastructure environments 

- [On-premise/self-hosted](#on-premise-self-hosted)
- [BrowserStack](#browserstack)


# On Premise / Self Hosted

## Running Your Tests

### Run a specific test on your own machine

- How to run the test?

  To run a specific test scenario, use the following command with the additional 'test-name' argument:
  
  ```sh
  npx playwright test <spec-file> --headed --config=resources/conf/playwright.config.js --project <project-name>
  ```

  where,  the argument `<spec-file>` can be any spec files from the repository.
  
  E.g. "e2e.spec.js", "login.spec.js", "product.spec.js" or any of the other tests, as outlined in [About the tests in this repository](#About-the-tests-in-this-repository) section.

  Also, the argument `<project-name>` can be any of the project names from the `playwright.conf.js` file.

  Or, you can directly run the pre-confifured setup by running the below command:
  ```sh
  npm run onPrem-endToEnd
  ```

- Output

  This run profile executes a specific test scenario on a single browser instance on your own machine.


### Run the entire test suite in parallel on your own machine

  To run the entire test suite on your own machine, use the following command:
  
  ```sh
  npx playwright test --headed --config=resources/conf/playwright.config.js --workers 2
  ```

  Or, you can directly run the pre-confifured setup by running the below command:

  ```sh
  npm run onPrem-parallel
  ```


- Output

  This run profile executes the entire test collection in parallel on single/multiple browsers based on the configuration file, on your own machine.

  
---


# BrowserStack

[BrowserStack](https://browserstack.com) provides instant access to 2,000+ real mobile devices and browsers on a highly reliable cloud infrastructure that effortlessly scales as testing needs grow.

## Prerequisites

- Create a new [BrowserStack account](https://www.browserstack.com/users/sign_up) or use an existing one.
- Identify your BrowserStack username and access key from the [BrowserStack Automate Dashboard](https://automate.browserstack.com/) and export them as environment variables using the below commands.

    - For \*nix based and Mac machines:

  ```sh
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```

    - For Windows:

  ```shell
  set BROWSERSTACK_USERNAME=<browserstack-username>
  set BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```
  
  Alternatively, you can also hardcode username and access_key objects in the [browserstack.yml](./resources/browserstack-conf) files.


## Running Your Tests

### Run a specific test on BrowserStack

In this section, we will run a single test on Chrome browser on Browserstack. To change test capabilities for this configuration, please refer to the `playwright-bstack.config.js` file.

- How to run the test?
  

  To run a specific test scenario, use the following command :
  Note: You can change the test you want to run by replacing the respective spec file.

  ```sh
  npx browserstack-node-sdk playwright test <spec-file> --config=resources/conf/playwright.config.js --browserstack.config=./resources/browserstack-conf/browserstack-single.yml

  ```

  where,  the argument `<spec-file>` can be any spec files from the repository.
  
  E.g. "e2e.spec.js", "login.spec.js", "product.spec.js" or any of the other tests, as outlined in [About the tests in this repository](#About-the-tests-in-this-repository) section.

  Or, you can directly run the pre-confifured setup by running the below command:

  ```sh
  npm run bstack-single
  ```

- Output

  This run profile executes a single test on a single browser on BrowserStack. Please refer to your [BrowserStack dashboard](https://automate.browserstack.com/) for test results.


### Run the entire test suite in parallel on BrowserStack browsers

In this section, we will run the tests in parallel on a single browser on Browserstack. Refer to `playwright-bstack.conf.js` file to change test capabilities for this configuration.

- How to run the test?

  To run the entire test suite in parallel on a single BrowserStack browser, use the following command:
  
  ```sh
  npx browserstack-node-sdk playwright test --config=resources/conf/playwright.config.js --browserstack.config=./resources/browserstack-conf/browserstack-parallel.yml
  ```

 Note: The `parallelsPerPlatform` argument in the config .yml mentions the number of tests you want to run in parallel at a time per platform mentioned.

- Output

  This run profile executes the entire test suite in parallel on a single BrowserStack browser. Please refer to your [BrowserStack dashboard](https://automate.browserstack.com/) for test results.

  Or, you can directly run the pre-confifured setup by running the below command:

  ```sh
  npm run bstack-parallel-tests
  ```

  <b>Note:</b> If you want to run tests on multiple browsers, you just need specify the additional combinations in the config .yml file under `platforms`. A example config can be seen in [browserstack-parallel-browsers.yml](resources/browserstack-conf/browserstack-parallel-browsers.yml)

  You can directly run the above scenario using the following command:

  ```sh
  npm run bstack-parallel-browsers
  ```




### Run a tests on BrowserStack which need Local Environment access

## Prerequisites
* Clone the BrowserStack demo application repository.
    ```sh
    git clone https://github.com/browserstack/browserstack-demo-app
    ```
* Please follow the README.md on the BrowserStack demo application repository to install and start the dev server on localhost.

* In this section, we will run a single test case to test the BrowserStack Demo app hosted on your local machine i.e. localhost.

* Further details for successfully creating a BrowserStackLocal connection can be found here:

    * [Local Testing with Automate](https://www.browserstack.com/local-testing/automate)
  
## [Web application hosted on internal environment] Run a specific test on BrowserStack using BrowserStackLocal

In this section, we will run a single test on Chrome browser on Browserstack. To change test capabilities for this configuration, please refer to the [browserstack-local.yml](resources/browserstack-conf/browserstack-local.yml) file.
  
  To run a specific test scenario, use the following command :
  Note: You can change the test you want to run by replacing the respective spec file.

  ```sh
  npx playwright test <spec-file> --config=resources/conf/playwright-bstack-local.config.js --browserstack.config=./resources/browserstack-conf/browserstack-local.yml
  ```

  where,  the argument `<spec-file>` can be any spec files from the repository.
  
  E.g. "e2e.spec.js", "login.spec.js", "product.spec.js" or any of the other tests, as outlined in [About the tests in this repository](#About-the-tests-in-this-repository) section.

  Also, the argument `<project-name>` can be any of the project names from the `playwright-bstack.conf.js` file.

Or, you can directly run the pre-confifured setup by running the below command:

  ```sh
  npm run bstack-local
  ```

- Output

  This run profile executes a single test on a single browser on BrowserStack. Please refer to your [BrowserStack dashboard](https://automate.browserstack.com/) for test results.


### [Web application hosted on internal environment] Run a tests in parallel on BrowserStack using BrowserStackLocal

Refer the below snippet, here we will run the tests in parallel on a multiple browser on Browserstack. Refer to `playwright-bstack-local.conf.js` file to change test capabilities for this configuration.
  
  ```sh
  npx playwright test --config=resources/conf/playwright-bstack-local.config.js --browserstack.config=./resources/browserstack-conf/browserstack-local-parallel.yml
  ```

  Note: The `parallelsPerPlatform` argument in the config .yml mentions the number of tests you want to run in parallel at a time per platform mentioned.


Or, you can directly run the pre-confifured setup by running the below command:

  ```sh
  npm run bstack-local-parallel
  ```

- Output

  This run profile executes the entire test suite in parallel on the mentioned BrowserStack browser. Please refer to your [BrowserStack dashboard](https://automate.browserstack.com/) for test results.


## Additional Resources

- View your test results on the [BrowserStack Automate dashboard](https://www.browserstack.com/automate)
- Documentation for writing [Automate test scripts in Java](https://www.browserstack.com/automate/java)
- Customizing your tests capabilities on BrowserStack using our [test capability generator](https://www.browserstack.com/automate/capabilities)
- [Using Automate REST API](https://www.browserstack.com/automate/rest-api) to access information about your tests via the command-line interface
- Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)
- For testing public web applications behind IP restriction, [Inbound IP Whitelisting](https://www.browserstack.com/local-testing/inbound-ip-whitelisting) can be enabled with the [BrowserStack Enterprise](https://www.browserstack.com/enterprise) offering

