import type { Meta, StoryObj, } from '@storybook/react';
import React from 'react';
import { Provider, } from 'react-redux';

import { createStore, } from '../../utils/test';
import { Spell, } from './Spell';

const meta : Meta<typeof Spell> = {
    component : Spell,
    title     : 'Components/Data Presentations/Spell',
    tags      : [
        'autodocs',
    ],
    argTypes  : {
    },
};

export default meta;

type Story = StoryObj<typeof Spell>;

const store = createStore({
    spell : {
        tweaks : [
            {
                id          : '1',
                name        : 'magic.1',
                description : 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
                author      : 'QuickInstall.app',
                parameters  : [
                    'Disable',
                ],
                types       : [
                    'boolean',
                ],
                values      : [
                    true,
                ],
            },
            {
                id          : '2',
                name        : 'magic.2',
                description : 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
                author      : 'QuickInstall.app',
                parameters  : [
                    'Name',
                    'Width',
                    'Height',
                ],
                types       : [
                    'string',
                    'number',
                    'number',
                ],
                values      : [
                    'Magic',
                    1920,
                    1024,
                ],
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
