import { styled, } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import type { FC, } from 'react';

import type { TruncatedTypographyProps, } from './TruncatedTypography.types';

/**
 * A typography component that truncates text.
 * @param lines Number of lines to show
 */
export const TruncatedTypography : FC<TruncatedTypographyProps> = styled(Typography)(({
    lines = 1,
} : TruncatedTypographyProps) =>({
    display         : '-webkit-box',
    overflow        : 'hidden',
    textOverflow    : 'ellipsis',
    WebkitBoxOrient : 'vertical',
    WebkitLineClamp : lines,
}));
