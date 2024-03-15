import type { Meta, StoryObj, } from '@storybook/react';

import { SearchInput, } from './SearchInput';

const meta : Meta<typeof SearchInput> = {
    component : SearchInput,
    title     : 'Components/Inputs/Search',
    argTypes  : {
        loading  : {
            description : 'Whether the input is loading',
        },
        hint     : {
            description : 'Placeholder text',
        },
        onSearch : {
            description : 'Function to call when the input is changed',
        },
    },
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default : Story = {
    args : {
        hint     : 'Type something to search...',
        onSearch : () => {},
    },
};

export const Loading : Story = {
    args : {
        ...Default.args,
        loading : true,
    },
};
