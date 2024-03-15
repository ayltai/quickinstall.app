import type { Meta, StoryObj, } from '@storybook/react';

import { DynamicTypedInput, } from './DynamicTypedInput';

const meta : Meta<typeof DynamicTypedInput> = {
    component : DynamicTypedInput,
    title     : 'Components/Inputs/Dynamic Typed Input',
    argTypes  : {
        title : {
            description : 'The title of the component',
        },
        type  : {
            description : 'The type of the component',
        },
        value : {
            description : 'The value of the component',
        },
    },
};

export default meta;

type Story = StoryObj<typeof DynamicTypedInput>;

export const Default : Story = {
    args : {
        title : 'Dynamic Typed Input',
        type  : 'boolean',
        value : true,
    },
};

export const BooleanType : Story = {
    args : {
        title : 'Dynamic Typed Input',
        type  : 'boolean',
        value : true,
    },
};

export const NumberType : Story = {
    args : {
        title : 'Dynamic Typed Input',
        type  : 'number',
        value : '1',
    },
};

export const StringType : Story = {
    args : {
        title : 'Dynamic Typed Input',
        type  : 'string',
        value : 'String value',
    },
};
