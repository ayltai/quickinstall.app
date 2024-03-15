import type { Meta, StoryObj, } from '@storybook/react';

import { DarkModeSwitch, } from './DarkModeSwitch';

const meta : Meta<typeof DarkModeSwitch> = {
    component : DarkModeSwitch,
    title     : 'Components/Actions/Dark Mode Switch',
    argTypes  : {
    },
};

export default meta;

type Story = StoryObj<typeof DarkModeSwitch>;

export const Default : Story = {
    args : {
    },
};
