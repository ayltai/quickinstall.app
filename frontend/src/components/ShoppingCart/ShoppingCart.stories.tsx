import type { Meta, StoryObj, } from '@storybook/react';

import { ShoppingCart, } from './ShoppingCart';

const meta : Meta<typeof ShoppingCart> = {
    component : ShoppingCart,
    title     : 'Components/Data Presentations/Shopping Cart',
    tags      : [
        'autodocs',
    ],
    argTypes  : {
        onClick : {
            description : 'Function to call when the button is clicked',
        },
    },
};

export default meta;

type Story = StoryObj<typeof ShoppingCart>;

export const Default : Story = {
    args : {
    },
};
