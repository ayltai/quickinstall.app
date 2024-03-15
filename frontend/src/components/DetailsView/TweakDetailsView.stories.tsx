import type { Meta, StoryObj, } from '@storybook/react';

import { TweakDetailsView, } from './TweakDetailsView';

const meta : Meta<typeof TweakDetailsView> = {
    component : TweakDetailsView,
    title     : 'Components/Data Presentations/Tweak Details View',
    tags      : [
        'autodocs',
    ],
    argTypes  : {
        description : {
            description : 'The description of the component',
        },
        infoUrl     : {
            description : 'The info URL of the component',
        },
        parameters  : {
            description : 'The parameters of the component',
        },
        types       : {
            description : 'The types of the component',
        },
        values      : {
            description : 'The values of the component',
        },
        onChange    : {
            description : 'The onChange of the component',
        },
    },
};

export default meta;

type Story = StoryObj<typeof TweakDetailsView>;

export const Default : Story = {
    args : {
        description : 'The description of the component',
        infoUrl     : 'https://example.com',
        parameters  : [
            'Width',
            'Height',
            'Disabled',
            'Colour',
        ],
        types       : [
            'number',
            'number',
            'boolean',
            'string',
        ],
        values      : [
            100,
            200,
            false,
            'red',
        ],
    },
};
