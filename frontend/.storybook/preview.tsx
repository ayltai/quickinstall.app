import '@fontsource/fjalla-one/latin-400.css';
import '@fontsource/rubik/latin-300.css';
import '@fontsource/rubik/latin-400.css';
import '@fontsource/rubik/latin-500.css';
import '@fontsource/rubik/latin-700.css';
import { createTheme, CssBaseline, ThemeProvider, } from '@mui/material';
import { withThemeFromJSXProvider, } from '@storybook/addon-themes';
import { themes, } from '@storybook/theming';
import * as React from 'react';
import { Provider, } from 'react-redux';
import { withRouter, } from 'storybook-addon-remix-react-router';

import { store, } from '../src/states';
import { appTheme, } from '../src/styles';
import i18n from './i18next';
import template from './template.mdx';

const darkTheme = createTheme({
    ...appTheme,
    palette : {
        ...appTheme.palette,
        mode : 'dark',
    },
});

const lightTheme = createTheme({
    ...appTheme,
    palette : {
        ...appTheme.palette,
        mode : 'light',
    },
});

export const globals = {
    locale  : 'en',
    locales : {
        en : 'English',
    },
};

export const decorators = [
    withRouter,
    withThemeFromJSXProvider({
        themes       : {
            dark  : darkTheme,
            light : lightTheme,
        },
        defaultTheme : 'dark',
        Provider     : ThemeProvider,
        GlobalStyles : CssBaseline,
    }),
    Story => (
        <Provider store={store}>
            <Story />
        </Provider>
    ),
];

export const parameters = {
    i18n,
    actions  : {
        argTypesRegex : '^on[A-Z].*',
    },
    controls : {
        expanded : true,
        matchers : {
            color : /(background|color)$/i,
            date  : /Date$/,
        },
    },
    docs     : {
        page  : template,
        toc   : {
            title : 'Examples',
        },
        theme : themes.dark,
    },
    layout   : 'centered',
};
