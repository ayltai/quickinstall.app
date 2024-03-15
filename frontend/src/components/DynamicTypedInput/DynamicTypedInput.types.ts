import type { HTMLAttributes, } from 'react';

export type DynamicTypedInputProps = Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'onChange'> & {
    color?    : 'primary' | 'secondary',
    title     : string,
    type      : 'boolean' | 'number' | 'string',
    value     : boolean | number | string,
    onChange? : (value? : boolean | number | string) => void,
};
