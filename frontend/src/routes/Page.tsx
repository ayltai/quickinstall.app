import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React, { useEffect, } from 'react';
import { useTranslation, } from 'react-i18next';
import MarkdownRenderer from 'react-markdown';
import { useParams, } from 'react-router-dom';

import { usePageQuery, } from '../apis';
import { DarkModeSwitch, } from '../components/DarkModeSwitch';
import { Footer, } from '../components/Footer';
import { Loading, } from '../components/Loading';
import { TopAppBar, } from '../components/TopAppBar';
import SmallLogo from '../components/TopAppBar/SmallLogo.webp';
import { PAGE_PATHS, PAGES_REFRESH_INTERVAL, } from '../constants';
import { useAppSelector, } from '../hooks';
import { handleError, } from '../utils';

export const Page = () => {
    const { page, } = useParams();

    const { data, error, } = usePageQuery(PAGE_PATHS[page!], {
        pollingInterval : PAGES_REFRESH_INTERVAL,
    });

    const { themeMode, } : { themeMode : 'light' | 'dark', } = useAppSelector(state => state.preference);

    const { t, } = useTranslation();

    useEffect(() => {
        if (error) handleError(error);
    }, [ error, ]);

    return (
        <Box
            sx={{
                backgroundImage : themeMode === 'dark' ? 'url(data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHZpZXdCb3g9IjAgMCAxMDAgMTAwIgogICAgd2lkdGg9IjY0MCIKICAgIGhlaWdodD0iNjQwIj4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgICAgICBpZD0ic3ctZ3JhZGllbnQiCiAgICAgICAgICAgIHgxPSIwIgogICAgICAgICAgICB4Mj0iMSIKICAgICAgICAgICAgeTE9IjEiCiAgICAgICAgICAgIHkyPSIwIj4KICAgICAgICAgICAgPHN0b3AKICAgICAgICAgICAgICAgIHN0b3AtY29sb3I9InJnYmEoMzQsIDM2LCAzOCwgMSkiCiAgICAgICAgICAgICAgICBvZmZzZXQ9IjAlIiAvPgogICAgICAgICAgICA8c3RvcAogICAgICAgICAgICAgICAgc3RvcC1jb2xvcj0icmdiYSgzOCwgNTAsIDU2LCAxKSIKICAgICAgICAgICAgICAgIG9mZnNldD0iMTAwJSIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHBhdGgKICAgICAgICBmaWxsPSJ1cmwoI3N3LWdyYWRpZW50KSIKICAgICAgICBkPSJNMjQuMSwtNy45QzI2LjIsLTEuMywxOS41LDguMSw5LjksMTUuNUMwLjMsMjIuOCwtMTIsMjguMiwtMTcuOSwyNC4xQy0yMy43LDIwLC0yMyw2LjQsLTE5LC0yLjlDLTE0LjksLTEyLjIsLTcuNCwtMTcuMSwxLjgsLTE3LjdDMTEsLTE4LjMsMjIsLTE0LjUsMjQuMSwtNy45WiIKICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiIC8+Cjwvc3ZnPg==)' : 'url(data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHZpZXdCb3g9IjAgMCAxMDAgMTAwIgogICAgd2lkdGg9IjY0MCIKICAgIGhlaWdodD0iNjQwIj4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgICAgICBpZD0ic3ctZ3JhZGllbnQiCiAgICAgICAgICAgIHgxPSIwIgogICAgICAgICAgICB4Mj0iMSIKICAgICAgICAgICAgeTE9IjEiCiAgICAgICAgICAgIHkyPSIwIj4KICAgICAgICAgICAgPHN0b3AKICAgICAgICAgICAgICAgIHN0b3AtY29sb3I9InJnYmEoMjI4LCAyMzIsIDIzNCwgMSkiCiAgICAgICAgICAgICAgICBvZmZzZXQ9IjAlIiAvPgogICAgICAgICAgICA8c3RvcAogICAgICAgICAgICAgICAgc3RvcC1jb2xvcj0icmdiYSgyMzYsIDIzOSwgMjQxLCAxKSIKICAgICAgICAgICAgICAgIG9mZnNldD0iMTAwJSIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHBhdGgKICAgICAgICBmaWxsPSJ1cmwoI3N3LWdyYWRpZW50KSIKICAgICAgICBkPSJNMjQuMSwtNy45QzI2LjIsLTEuMywxOS41LDguMSw5LjksMTUuNUMwLjMsMjIuOCwtMTIsMjguMiwtMTcuOSwyNC4xQy0yMy43LDIwLC0yMyw2LjQsLTE5LC0yLjlDLTE0LjksLTEyLjIsLTcuNCwtMTcuMSwxLjgsLTE3LjdDMTEsLTE4LjMsMjIsLTE0LjUsMjQuMSwtNy45WiIKICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiIC8+Cjwvc3ZnPg==)',
                backgroundPosition   : 'center',
                backgroundSize       : '150%',
                backgroundAttachment : 'fixed',
                backgroundRepeat     : 'no-repeat',
            }}
            width='100%'>
            <TopAppBar
                logo={
                    <img
                        style={{
                            marginRight : 8,
                        }}
                        src={SmallLogo}
                        alt={t('app.name')}
                        width={48}
                        height={48} />
                }
                title={
                    <Typography
                        variant='h5'
                        fontWeight='bold'>
                        {data ? data[0] : t('app.name')}
                    </Typography>
                }
                actions={<DarkModeSwitch />} />
            <Container maxWidth='lg'>
                <Box
                    paddingTop={4}
                    paddingBottom={8}>
                    <MarkdownRenderer>{data ? data[1] : undefined}</MarkdownRenderer>
                </Box>
                <Loading show={!data} />
            </Container>
            <Footer />
        </Box>
    );
};
