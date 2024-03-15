import type { Meta, StoryObj, } from '@storybook/react';

import { ProductSelection, } from './ProductSelection';

const meta : Meta<typeof ProductSelection> = {
    component : ProductSelection,
    title     : 'Components/Actions/Product Selection',
    tags      : [
        'autodocs',
    ],
    argTypes  : {
        onChange : {
            description : 'Function to call when the button is clicked',
        },
    },
};

export default meta;

type Story = StoryObj<typeof ProductSelection>;

export const Default : Story = {
    args : {
    },
};
