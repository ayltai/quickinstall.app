import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import React, { type FC, useCallback, } from 'react';
import { useTranslation, } from 'react-i18next';

import { useAppDispatch, useAppSelector, } from '../../hooks';
import { setThemeMode, } from '../../states';
import type { DarkModeSwitchProps, } from './DarkModeSwitch.types';

/**
 * A dark mode switch lets users switch easily between light and dark theme modes.
 * @param rest Other props
 */
export const DarkModeSwitch : FC<DarkModeSwitchProps> = ({
    ...rest
}) => {
    const { themeMode, } = useAppSelector(state => state.preference);

    const dispatch = useAppDispatch();

    const { t, } = useTranslation();

    const handleClick = useCallback(() => dispatch(setThemeMode(themeMode === 'light' ? 'dark' : 'light')), [ dispatch, themeMode, ]);

    return (
        <IconButton
            aria-label={t('action.theme_toggle')}
            onClick={handleClick}
            {...rest}>
            {themeMode === 'dark' ? <DarkMode /> : <LightMode />}
        </IconButton>
    );
};
