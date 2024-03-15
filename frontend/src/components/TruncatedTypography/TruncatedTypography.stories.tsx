import type { Meta, StoryObj, } from '@storybook/react';

import { TruncatedTypography, } from './TruncatedTypography';

const meta : Meta<typeof TruncatedTypography> = {
    component : TruncatedTypography,
    title     : 'Components/Data Presentations/Truncated Typography',
    tags      : [
        'autodocs',
    ],
    argTypes  : {
        lines : {
            description : 'Number of lines to show',
        },
    },
};

export default meta;

type Story = StoryObj<typeof TruncatedTypography>;

export const Default : Story = {
    args : {
        children : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam ultricies, nunc nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl',
    },
};
