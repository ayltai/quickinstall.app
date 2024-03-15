import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme, } from '@mui/material/styles';
import React, { type FC, type ReactNode, } from 'react';
import { useTranslation, } from 'react-i18next';

import type { FooterProps, } from './Footer.types';

const Heading = ({
    children,
} : {
    children : ReactNode,
}) => (
    <Typography
        variant='overline'
        fontWeight='bold'>
        {children}
    </Typography>
);

const LinkItem = ({
    href,
    openInNewWindow,
    children,
} : {
    href             : string,
    openInNewWindow? : boolean,
    children         : ReactNode,
}) => {
    const theme = useTheme();

    return (
        <Link
            underline='none'
            href={href}
            target={openInNewWindow ? '_blank' : undefined}
            rel={openInNewWindow ? 'noreferrer' : undefined}>
            <Typography
                color={theme.palette.text.secondary}
                variant='body2'>
                {children}
            </Typography>
        </Link>
    );
};

/**
 * A footer provides copyright information, terms and policy details, and links to allow users to quickly navigate to other parts of a website.
 * @param rest Other props
 */
export const Footer : FC<FooterProps> = ({
    ...rest
}) => {
    const theme = useTheme();

    const { t, } = useTranslation();

    return (
        <Stack
            sx={{
                backgroundColor : theme.palette.mode === 'light' ? '#cfd8dc' : '#263238',
            }}
            width='100%'
            height='16rem'
            {...rest}>
            <Divider />
            <Container maxWidth='lg'>
                <Stack
                    paddingY={8}
                    direction='row'
                    alignItems='top'
                    justifyContent='space-between'>
                    <Stack>
                        <Heading>
                            {t('footer.header.product')}
                        </Heading>
                        <LinkItem
                            href='/#/pages/about'>
                            {t('footer.product.about')}
                        </LinkItem>
                        <LinkItem
                            openInNewWindow
                            href='https://quickinstall.hashnode.dev'>
                            {t('footer.product.blog')}
                        </LinkItem>
                    </Stack>
                    <Stack>
                        <Heading>
                            {t('footer.header.support')}
                        </Heading>
                        <LinkItem
                            openInNewWindow
                            href='https://github.com/ayltai/quickinstall.app/issues/new?assignees=&labels=help+wanted&projects=&template=help_wanted.md&title='>
                            {t('footer.support.help')}
                        </LinkItem>
                        <LinkItem
                            openInNewWindow
                            href='https://github.com/ayltai/quickinstall.app/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title='>
                            {t('footer.support.bugs')}
                        </LinkItem>
                    </Stack>
                    <Stack>
                        <Heading>
                            {t('footer.header.terms')}
                        </Heading>
                        <LinkItem href='/#/pages/terms'>
                            {t('footer.terms.terms')}
                        </LinkItem>
                        <LinkItem href='/#/pages/disclaimer'>
                            {t('footer.terms.disclaimer')}
                        </LinkItem>
                        <LinkItem href='/#/pages/privacy'>
                            {t('footer.terms.privacy')}
                        </LinkItem>
                    </Stack>
                </Stack>
            </Container>
            <Box
                sx={{
                    backgroundColor : theme.palette.common.black,
                }}
                width='100%'>
                <Container maxWidth='lg'>
                    <Stack
                        direction='row'
                        display='flex'
                        alignItems='center'>
                        <Typography
                            color={theme.palette.getContrastText(theme.palette.common.black)}
                            variant='body2'>
                            {t('footer.copyright', {
                                year    : new Date().getFullYear(),
                                product : t('app.name'),
                            })}
                        </Typography>
                        <Box flexGrow={1} />
                        <IconButton
                            aria-label={t('footer.link.github')}
                            size='small'
                            href='https://github.com/ayltai/quickinstall.app'
                            target='_blank'>
                            <GitHub sx={{
                                fill : theme.palette.getContrastText(theme.palette.common.black),
                            }} />
                        </IconButton>
                        <IconButton
                            aria-label={t('footer.link.linkedin')}
                            size='small'
                            href='https://linkedin.com/in/ayltai'
                            target='_blank'>
                            <LinkedIn sx={{
                                fill : theme.palette.getContrastText(theme.palette.common.black),
                            }} />
                        </IconButton>
                    </Stack>
                </Container>
            </Box>
        </Stack>
    );
};
