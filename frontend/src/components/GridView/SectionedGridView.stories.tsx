import type { Meta, StoryObj, } from '@storybook/react';
import React from 'react';

import { CardView, } from '../CardView';
import { SectionedGridView, } from './SectionedGridView';

const meta : Meta<typeof SectionedGridView> = {
    component : SectionedGridView,
    title     : 'Components/Layouts/Sectioned Grid',
    tags      : [
        'autodocs',
    ],
    argTypes  : {
        title    : {
            description : 'The title of the section',
        },
        children : {
            description : 'The content of the component',
        },
    },
};

export default meta;

type Story = StoryObj<typeof SectionedGridView>;

export const Default : Story = {
    args : {
        title    : 'Sectioned Grid View Story Title',
        children : Array.from(Array(10)).map((_, index) => (
            <CardView
                key={index}
                title={`Card ${index + 1}`}
                subtitle={`Subtitle ${index + 1}`}
                description={`Description ${index + 1}`} />
        )),
    },
};
