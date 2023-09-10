const { devices } = require('@playwright/test');

const config = {
  use: {
    trace: 'on-first-retry',
    baseURL: 'https://bstackdemo.com',
  },
  testDir: '../../src/test',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
            baseURL: 'https://bstackdemo.com' },
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