import type { Meta, StoryObj, } from '@storybook/react';

import { RECIPE_COMMANDS, } from '../../constants';
import { Terminal, } from './Terminal';

const meta : Meta<typeof Terminal> = {
    component : Terminal,
    title     : 'Components/Surfaces/Terminal',
    tags      : [
        'autodocs',
    ],
    argTypes  : {
        commands : {
            description : 'The commands to type',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Terminal>;

export const Default : Story = {
    args : {
        commands : RECIPE_COMMANDS,
    },
};
