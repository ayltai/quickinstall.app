import type { StorybookConfig, } from '@storybook/react-vite';

const config : StorybookConfig = {
    framework  : '@storybook/react-vite',
    core       : {
        builder : '@storybook/builder-vite',
    },
    addons     : [
        '@storybook/addon-actions',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-themes',
        'storybook-addon-remix-react-router',
        'storybook-react-i18next',
    ],
    docs       : {
        autodocs : 'tag',
    },
    stories    : [
        '../src/**/*.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
};

export default config;
