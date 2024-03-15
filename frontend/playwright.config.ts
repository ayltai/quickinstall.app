import { defineConfig, devices, } from '@playwright/test';

export default defineConfig({
    testDir       : './tests',
    fullyParallel : true,
    forbidOnly    : !!process.env.CI,
    retries       : process.env.CI ? 2 : 0,
    workers       : process.env.CI ? 1 : undefined,
    reporter      : process.env.CI ? [
        [
            'github',
        ],
        [
            'list',
        ],
        [
            'html',
            {
                open : 'never',
            },
        ],
    ] : [
        [
            'line',
        ],
        [
            'html',
        ],
    ],
    use           : {
        baseURL           : 'http://localhost:5173',
        ignoreHTTPSErrors : true,
        trace             : 'on-first-retry',
        video             : 'retain-on-failure',
        actionTimeout     : 10000,
        navigationTimeout : 10000,
    },
    projects      : [
        {
            name : 'Chrome',
            use  : {
                ...devices['Desktop Chrome'],
            },
        },
        {
            name : 'Firefox',
            use  : {
                ...devices['Desktop Firefox'],
            },
        },
        {
            name : 'Safari',
            use  : {
                ...devices['Desktop Safari'],
            },
        },
        {
            name : 'iPhone Safari',
            use  : {
                ...devices['iPhone 14'],
            },
        },
        {
            name : 'iPad Safari (landscape)',
            use  : {
                ...devices['iPad Mini landscape'],
            },
        },
        {
            name : 'Android Chrome',
            use  : {
                ...devices['Pixel 7'],
            },
        },
    ],
    webServer     : [
        {
            command             : 'cd ../backend && pnpm dev',
            url                 : 'http://localhost:8080/health',
            reuseExistingServer : !process.env.CI,
        },
        {
            command             : 'pnpm start:ci',
            url                 : 'http://localhost:5173',
            reuseExistingServer : !process.env.CI,
        },
    ],
});
