import { ListItemText, } from '@mui/material';
import type { Meta, StoryObj, } from '@storybook/react';
import React from 'react';

import { ListView, } from './ListView';

const meta : Meta<typeof ListView> = {
    component : ListView,
    title     : 'Components/Layouts/List',
    argTypes  : {
        children : {
            description : 'The content of the component',
        },
        onClick  : {
            description : 'Function to call when the list item is clicked',
        },
        onDelete : {
            description : 'Function to call when the delete button is clicked',
        },
    },
};

export default meta;

type Story = StoryObj<typeof ListView>;

export const Default : Story = {
    args : {
        children : Array.from(Array(10)).map((_, index) => (
            <ListItemText
                key={String(Math.random())}
                primary={`Item ${index + 1}`}
                secondary={`Subtitle ${index + 1}`} />
        )),
    },
};
