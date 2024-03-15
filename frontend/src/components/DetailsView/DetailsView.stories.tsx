import type { Meta, StoryObj, } from '@storybook/react';

import { DetailsView, } from './DetailsView';

const meta : Meta<typeof DetailsView> = {
    component : DetailsView,
    title     : 'Components/Data Presentations/Details View',
    argTypes  : {
        description : {
            description : 'The description of the component',
        },
        infoUrl     : {
            description : 'The info URL of the component',
        },
        source      : {
            description : 'The source of the information',
        },
    },
};

export default meta;

type Story = StoryObj<typeof DetailsView>;

export const Default : Story = {
    args : {
        description : 'The description of the component',
        infoUrl     : 'https://example.com',
        source      : 'Homebrew',
    },
};
