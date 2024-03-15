import type { Meta, StoryObj, } from '@storybook/react';
import React, { useState, } from 'react';

import { SelectableCardView, SelectableCardViewProps, } from '../CardView';
import { GridView, } from './GridView';

const meta : Meta<typeof GridView> = {
    component : GridView,
    title     : 'Components/Layouts/Grid',
    argTypes  : {
        children : {
            description : 'The content of the component',
        },
    },
};

export default meta;

type Story = StoryObj<typeof GridView>;

const StatefulSelectableCardView = (props : SelectableCardViewProps) => {
    const [ selected, setSelected, ] = useState(false);

    const handleChange = (newValue : boolean) => setSelected(newValue);

    return (
        <SelectableCardView
            {...props}
            selected={selected}
            onChange={handleChange} />
    );
};

export const Default : Story = {
    args : {
        children : Array.from(Array(10)).map((_, index) => (
            <StatefulSelectableCardView
                key={index}
                title={`Card ${index + 1}`}
                subtitle={`Subtitle ${index + 1}`}
                description={`Description ${index + 1}`} />
        )),
    },
};
