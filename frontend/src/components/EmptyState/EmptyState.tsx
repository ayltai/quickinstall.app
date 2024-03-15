import { ErrorOutline, } from '@mui/icons-material';
import Stack from '@mui/material/Stack';
import React, { type FC, } from 'react';

import type { EmptyStateProps, } from './EmptyState.types';

/**
 * A empty state indicates no items or data to show.
 * @param children The content of the component
 * @param rest Other props
 */
export const EmptyState : FC<EmptyStateProps> = ({
    children,
    ...rest
}) => (
    <Stack
        padding={2}
        display='flex'
        alignItems='center'
        textAlign='center'
        {...rest}>
        <ErrorOutline sx={{
            fontSize : 128,
        }} />
        {children}
    </Stack>
);
