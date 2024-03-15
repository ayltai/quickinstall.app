import type { Meta, StoryObj, } from '@storybook/react';
import React from 'react';
import { Provider, } from 'react-redux';

import { createStore, } from '../../utils/test';
import { RecipeInstruction, } from './Instruction';

const meta : Meta<typeof RecipeInstruction> = {
    component : RecipeInstruction,
    title     : 'Components/Data Presentations/Recipe Instruction',
    tags      : [
        'autodocs',
    ],
    argTypes  : {
        transactionId : {
            description : 'The ID of the transaction',
        },
    },
};

export default meta;

type Story = StoryObj<typeof RecipeInstruction>;

const store = createStore({
    recipe : {
        ingredients : [
            {
                id          : '1',
                name        : 'spotify',
                description : 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
                author      : 'Spotify',
                source      : 'App Store',
            },
            {
                id          : '2',
                name        : 'Spotify Player',
                description : 'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.',
                author      : 'Spotify',
                source      : 'App Store',
            },
        ],
    },
});

export const Default : Story = {
    args : {
        open          : true,
        transactionId : '1',
    },
    decorators : [
        StoryComponent => (
            <Provider store={store}>
                <StoryComponent />
            </Provider>
        ),
    ],
};
