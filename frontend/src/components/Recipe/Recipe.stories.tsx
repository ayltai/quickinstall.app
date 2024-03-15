import type { Meta, StoryObj, } from '@storybook/react';
import React from 'react';
import { Provider, } from 'react-redux';

import { createStore, } from '../../utils/test';
import { Recipe, } from './Recipe';

const meta : Meta<typeof Recipe> = {
    component : Recipe,
    title     : 'Components/Data Presentations/Recipe',
    tags      : [
        'autodocs',
    ],
    argTypes  : {
    },
};

export default meta;

type Story = StoryObj<typeof Recipe>;

const store = createStore({
    preference : {
        product : 'mac/packages',
    },
    recipe     : {
        ingredients : [
            {
                id          : '1',
                name        : 'spotify',
                description : 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
                author      : 'Homebrew',
                source      : 'Homebrew',
            },
            {
                id          : '2',
                name        : 'Spotify Player',
                description : 'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.',
                author      : 'Homebrew',
                source      : 'Homebrew (Cask)',
            },
        ],
    },
});

export const Default : Story = {
    args       : {
    },
    decorators : [
        StoryComponent => (
            <Provider store={store}>
                <StoryComponent />
            </Provider>
        ),
    ],
};
