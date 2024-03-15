import type { Meta, StoryObj, } from '@storybook/react';
import React from 'react';

import { MaterialButton, } from '../Button';
import { CardView, } from './CardView';

const meta : Meta<typeof CardView> = {
    component : CardView,
    title     : 'Components/Data Presentations/Card',
    argTypes  : {
        title       : {
            description : 'Title of the card',
        },
        subtitle    : {
            description : 'Subtitle of the card',
        },
        description : {
            description : 'Description of the card',
        },
        onClick     : {
            description : 'Function to call when the button is clicked',
        },
        children    : {
            description : 'One or more buttons',
        },
    },
};

export default meta;

type Story = StoryObj<typeof CardView>;

export const Default : Story = {
    args : {
        title       : 'Headline',
        subtitle    : 'Subheader',
        description : 'Explain more about the topic shown in the headline and subheader through supporting text.',
    },
};

export const WithButtons : Story = {
    args : {
        ...Default.args,
        children : [
            <MaterialButton
                key='1'
                variant='outlined'>
                Action 1
            </MaterialButton>,
            <MaterialButton
                key='2'
                variant='contained'>
                Action 2
            </MaterialButton>,
        ],
    },
};
