import type { Meta, StoryObj, } from '@storybook/react';

import { MaterialButton, } from './MaterialButton';

const meta : Meta<typeof MaterialButton> = {
    component : MaterialButton,
    title     : 'Components/Actions/Button',
    argTypes  : {
    },
};

export default meta;

type Story = StoryObj<typeof MaterialButton>;

export const Default : Story = {
    args : {
        children : 'Default',
    },
};

export const DefaultSecondary : Story = {
    args : {
        color    : 'secondary',
        children : 'Default Secondary',
    },
};

export const Contained : Story = {
    args : {
        variant  : 'contained',
        children : 'Contained',
    },
};

export const ContainedSecondary : Story = {
    args : {
        color    : 'secondary',
        variant  : 'contained',
        children : 'Contained Secondary',
    },
};

export const Outlined : Story = {
    args : {
        variant  : 'outlined',
        children : 'Outlined',
    },
};

export const OutlinedSecondary : Story = {
    args : {
        color    : 'secondary',
        variant  : 'outlined',
        children : 'Outlined Secondary',
    },
};

export const Text : Story = {
    args : {
        variant  : 'text',
        children : 'Text',
    },
};

export const TextSecondary : Story = {
    args : {
        color    : 'secondary',
        variant  : 'text',
        children : 'Text Secondary',
    },
};
