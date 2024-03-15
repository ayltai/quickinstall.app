import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import React, { type ComponentType, JSX, } from 'react';

import { DynamicTypedInput, } from '../DynamicTypedInput';
import { DetailsView, } from './DetailsView';
import type { DetailsViewProps, } from './DetailsView.types';
import type { TweakDetailsViewProps, } from './TweakDetailsView.types';

const withDynamicTypedInputs = (Component : ComponentType<DetailsViewProps>) => {
    const ComponentWithDynamicTypedInputs : (props : TweakDetailsViewProps) => JSX.Element = (props : TweakDetailsViewProps) => {
        const { parameters, types, values, onChange, ...rest } = props;

        return (
            <Component
                {...rest}
                color='secondary'>
                <Divider />
                <Stack
                    width='100%'
                    spacing={2}>
                    {parameters.map((parameter, index) => {
                        const handleChange = (value? : string | number | boolean) => onChange && onChange(parameter, value);

                        return (
                            <DynamicTypedInput
                                key={parameter}
                                color='secondary'
                                title={parameter}
                                type={types[index]}
                                value={values[index]}
                                onChange={handleChange} />
                        );
                    })}
                </Stack>
            </Component>
        );
    };

    return ComponentWithDynamicTypedInputs;
};

export const TweakDetailsView = withDynamicTypedInputs(DetailsView);
