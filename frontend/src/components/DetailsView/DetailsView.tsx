import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { type FC, } from 'react';
import { useTranslation, } from 'react-i18next';

import type { DetailsViewProps, } from './DetailsView.types';

/**
 * A details view is a container for displaying a description and optionally a URL for additional information and other arbitrary content.
 * @param color The color of the component
 * @param description The description of the component
 * @param infoUrl The URL of the information
 * @param source The source of the information
 * @param props Other props
 */
export const DetailsView : FC<DetailsViewProps> = ({
    color = 'primary',
    description,
    infoUrl,
    source,
    ...props
}) => {
    const { children, ...rest } = props;

    const { t, } = useTranslation();

    return (
        <Stack
            spacing={2}
            {...rest}>
            <Box>
                <Typography
                    variant='overline'
                    fontWeight='bold'>
                    {t('common.description')}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </Box>
            {infoUrl && (
                <Box>
                    <Typography
                        variant='overline'
                        fontWeight='bold'>
                        {t('common.website')}
                    </Typography>
                    <Link
                        color={color === 'info' ? 'info.main' : color}
                        href={infoUrl}
                        target='_blank'>
                        <Typography>
                            {infoUrl}
                        </Typography>
                    </Link>
                </Box>
            )}
            <Box>
                <Typography
                    variant='overline'
                    fontWeight='bold'>
                    {t('common.source')}
                </Typography>
                <Typography>
                    {source}
                </Typography>
            </Box>
            {children}
        </Stack>
    );
};
