import type { Meta, StoryObj, } from '@storybook/react';

import { Loading, } from './Loading';

const meta : Meta<typeof Loading> = {
    component : Loading,
    title     : 'Components/Overlays/Loading',
    argTypes  : {
        show     : {
            description : 'Whether to show the component',
        },
        size     : {
            description : 'The size of the component',
        },
        children : {
            description : 'Additional content to show below the component',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default : Story = {
    args : {
        show     : true,
        children : 'Loading...',
    },
    parameters : {
        docs : {
            story : {
                inline       : false,
                iframeHeight : 200,
            },
        },
    },
};

export const Large : Story = {
    ...Default,
    args : {
        ...Default.args,
        size : '2rem',
    },
};
