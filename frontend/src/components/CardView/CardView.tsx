import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Tooltip from '@mui/material/Tooltip';
import React, { type FC, } from 'react';

import { TruncatedTypography, } from '../TruncatedTypography';
import type { CardViewProps, } from './CardView.types';

/**
 * A card is a container that can displays a title, subtitle, description, and optionally one or more buttons.
 * @param title Title of the card
 * @param subtitle Subtitle of the card
 * @param description Description of the card
 * @param onClick Function to call when the button is clicked
 * @param children One or more buttons
 * @param rest Other props
 */
export const CardView : FC<CardViewProps> = ({
    title,
    subtitle,
    description,
    children,
    onClick,
    ...rest
}) => (
    <Card {...rest}>
        <CardActionArea onClick={onClick}>
            <CardContent>
                <Tooltip title={title}>
                    <TruncatedTypography variant='h5'>
                        {title}
                    </TruncatedTypography>
                </Tooltip>
                <TruncatedTypography
                    variant='body2'
                    color='text.secondary'>
                    {subtitle}
                </TruncatedTypography>
                <Tooltip title={description}>
                    <TruncatedTypography
                        height='2lh'
                        lines={2}>
                        {description}
                    </TruncatedTypography>
                </Tooltip>
            </CardContent>
        </CardActionArea>
        {children !== undefined && (
            <CardActions>
                <>
                    <Box flexGrow={1} />
                    {children}
                </>
            </CardActions>
        )}
    </Card>
);
