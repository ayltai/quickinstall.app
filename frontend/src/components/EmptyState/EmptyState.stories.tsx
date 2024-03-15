import { Typography, } from '@mui/material';
import type { Meta, StoryObj, } from '@storybook/react';
import React from 'react';

import { EmptyState, } from './EmptyState';

const meta : Meta<typeof EmptyState> = {
    component : EmptyState,
    title     : 'Components/Data Presentations/Empty State',
    argTypes  : {
        children : {
            description : 'The content of the component',
        },
    },
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default : Story = {
    args : {
        children : <Typography>No results</Typography>,
    },
};
