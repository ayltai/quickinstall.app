import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { type FC, useCallback, useState, } from 'react';
import { useTranslation, } from 'react-i18next';

import type { DynamicTypedInputProps, } from './DynamicTypedInput.types';

/**
 * An input field that allows users to specify a boolean value, or input a number or string value depending on the type specified.
 * @param color Color of the input
 * @param title Title of the input
 * @param type Type of the input
 * @param value Value of the input
 * @param onChange Function to call when the input is changed
 * @param rest Other props
 */
export const DynamicTypedInput : FC<DynamicTypedInputProps> = ({
    color,
    title,
    type,
    value,
    onChange,
    ...rest
}) => {
    const [ currentValue, setCurrentValue, ] = useState(value);
    const [ error,        setError,        ] = useState(false);

    const { t, } = useTranslation();

    const handleChange = useCallback((event : React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event.target.value);

        if (onChange) {
            switch (type) {
                case 'boolean':
                    onChange(event.target.checked);

                    break;

                case 'number':
                    if (event.target.value && event.target.value.length > 0) {
                        if (isNaN(Number(event.target.value))) {
                            setError(true);
                        } else if (Number(event.target.value) >>> 0 === parseFloat(event.target.value)) {
                            setError(false);
                        } else {
                            setError(true);
                        }
                    } else {
                        setError(true);
                    }

                    onChange(Number(event.target.value));

                    break;

                case 'string':
                    if (event.target.value && event.target.value.length > 0) {
                        setError(false);
                    } else {
                        setError(true);
                    }

                    onChange(event.target.value);

                    break;

                default:
                    break;
            }
        }
    }, [ onChange, type, ]);

    return (
        <Stack
            spacing={1}
            display='flex'
            direction='row'
            alignItems='top'
            {...rest}>
            <Typography flexGrow={1}>
                {title}
            </Typography>
            {type === 'boolean' && (
                <Switch
                    checked={currentValue as boolean}
                    color={color}
                    onChange={handleChange} />
            )}
            {type === 'number' && (
                <TextField
                    required
                    color={color}
                    error={error}
                    helperText={error ? t('error.input.required') : undefined}
                    value={currentValue as number}
                    onChange={handleChange} />
            )}
            {type === 'string' && (
                <TextField
                    required
                    color={color}
                    error={error}
                    helperText={error ? t('error.input.required') : undefined}
                    value={currentValue as string}
                    onChange={handleChange} />
            )}
        </Stack>
    );
};
