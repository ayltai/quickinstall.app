import Typography from '@mui/material/Typography';
import type { Meta, StoryObj, } from '@storybook/react';
import React from 'react';

import { Section, } from './Section';

const meta : Meta<typeof Section> = {
    component : Section,
    title     : 'Components/Data Presentations/Section',
    argTypes  : {
        title    : {
            description : 'The title of the section',
        },
        color    : {
            description : 'The color of the section',
        },
        children : {
            description : 'The content of the component',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Default : Story = {
    args : {
        title    : 'Section story title',
        children : (
            <Typography>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </Typography>
        ),
    },
};
