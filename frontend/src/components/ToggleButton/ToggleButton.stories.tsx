import { Check, DeleteForever, } from '@mui/icons-material';
import type { Meta, StoryObj, } from '@storybook/react';
import React, { useState, } from 'react';

import { ToggleButton, } from './ToggleButton';

const meta : Meta<typeof ToggleButton> = {
    component : ToggleButton,
    title     : 'Components/Actions/Toggle',
    argTypes  : {
        icon          : {
            description : 'The icon to show when the button is in the unselected state',
        },
        selectedIcon  : {
            description : 'The icon to show when the button is in the selected state',
        },
        deselectIcon  : {
            description : 'The icon to show when the button is in the selected state and is hovered',
        },
        text          : {
            description : 'The text to show when the button is in the unselected state',
        },
        selectedText  : {
            description : 'The text to show when the button is in the selected state',
        },
        deselectText  : {
            description : 'The text to show when the button is in the selected state and is hovered',
        },
        onChange      : {
            description : 'Function to call when the selected state is changed',
        },
    },
};

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Default : Story = {
    args   : {
        icon          : <Check />,
        selectedIcon  : <Check />,
        deselectIcon  : <DeleteForever />,
        text          : 'Select',
        selectedText  : 'Selected',
        deselectText  : 'Remove',
    },
    render : props => {
        const [ selected, setSelected, ] = useState(props.selected ?? false);

        return (
            <ToggleButton
                {...props}
                selected={selected}
                onChange={setSelected} />
        );
    },
};

export const Selected : Story = {
    args : {
        ...Default.args,
        selected : true,
    },
};
