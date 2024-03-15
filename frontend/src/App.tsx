import CssBaseline from '@mui/material/CssBaseline';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import React, { useEffect, useState, } from 'react';
import { RouterProvider, } from 'react-router-dom';

import { useAppSelector, } from './hooks';
import { router, } from './routes';
import { appTheme, } from './styles';

export const App = () => {
    const [ theme , setTheme , ] = useState(createTheme(appTheme));

    const { themeMode, } = useAppSelector(state => state.preference);

    useEffect(() => {
        setTheme(createTheme({
            ...appTheme,
            palette : {
                ...appTheme.palette,
                background : {
                    default : themeMode === 'light' ? '#eceff1' : '#263238',
                    paper   : themeMode === 'light' ? '#ffffff' : '#000000',
                },
                mode       : themeMode,
            },
        }));
    }, [ themeMode, ]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};
