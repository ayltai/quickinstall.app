import type { Meta, StoryObj, } from '@storybook/react';

import { CopyableInput, } from './CopyableInput';

const meta : Meta<typeof CopyableInput> = {
    component : CopyableInput,
    title     : 'Components/Inputs/Copyable Input',
    argTypes  : {
        value  : {
            description : 'The value to copy',
        },
        onCopy : {
            description : 'Function to call when the copy button is clicked',
        },
    },
};

export default meta;

type Story = StoryObj<typeof CopyableInput>;

export const Default : Story = {
    args : {
        value : 'This is a test',
    },
};
