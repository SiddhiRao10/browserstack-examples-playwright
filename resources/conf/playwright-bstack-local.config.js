const { devices } = require('@playwright/test');

const config = {
  use: {
    trace: 'on-first-retry',
    baseURL: 'http://localhost:3000'
  },
  testDir: '../../src/test',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['iPhone 13'] },
    },
  ],
};

module.exports = config;

