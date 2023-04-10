import { PlaywrightTestConfig, devices } from '@playwright/test';

 
const config: PlaywrightTestConfig ={
  testDir: './tests',

  fullyParallel: !true,

  retries: process.env.CI ? 1  : 0,
 
  workers: process.env.CI ? 1 : 2,
  
  reporter: [["html", {
    open: "on-failure"
  }]],
  
  use: {
    baseURL: "https://bookcart.azurewebsites.net/",
    actionTimeout: 10,
    trace: 'on-first-retry',
    video: "retain-on-failure",
    screenshot: "only-on-failure"
  },

  /* Configure projects for major browsers */
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
      use: { ...devices['Desktop Safari'] },
    },
  ]

 
};

export default config;
