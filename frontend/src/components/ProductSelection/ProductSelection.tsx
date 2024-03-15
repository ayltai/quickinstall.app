import { Apple, AutoAwesome, Microsoft, } from '@mui/icons-material';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { type FC, useCallback, } from 'react';
import { useTranslation, } from 'react-i18next';

import { useAppSelector, useAppDispatch, useDesktopMode, } from '../../hooks';
import { setProduct, } from '../../states';
import { MaterialButton, } from '../Button';
import type { ProductSelectionProps, } from './ProductSelection.types';

/**
 * A button group that displays the product selection.
 * @param onChange Function to call when the button is clicked
 * @param rest Other props
 */
export const ProductSelection : FC<ProductSelectionProps> = ({
    onChange,
    ...rest
}) => {
    const { product, } : { product : 'win/packages' | 'mac/packages' | 'tweaks', } = useAppSelector(state => state.preference);

    const isDesktopMode = useDesktopMode();

    const dispatch = useAppDispatch();

    const { t, } = useTranslation();

    const selectWinPackages = useCallback(() => {
        dispatch(setProduct('win/packages'));

        if (onChange) onChange('win/packages');
    }, [ dispatch, onChange, ]);

    const selectMacPackages = useCallback(() => {
        dispatch(setProduct('mac/packages'));

        if (onChange) onChange('mac/packages');
    }, [ dispatch, onChange, ]);

    const selectTweaks = useCallback(() => {
        dispatch(setProduct('tweaks'));

        if (onChange) onChange('tweaks');
    }, [ dispatch, onChange, ]);

    return (
        <ButtonGroup
            size='large'
            {...rest}>
            <MaterialButton
                variant={product === 'win/packages' ? 'contained' : 'outlined'}
                color='info'
                startIcon={isDesktopMode ? <Microsoft /> : undefined}
                onClick={selectWinPackages}>
                {isDesktopMode ? t('product.win.packages') : <Microsoft />}
            </MaterialButton>
            <MaterialButton
                variant={product === 'mac/packages' ? 'contained' : 'outlined'}
                color='primary'
                startIcon={isDesktopMode ? <Apple /> : undefined}
                onClick={selectMacPackages}>
                {isDesktopMode ? t('product.mac.packages') : <Apple />}
            </MaterialButton>
            <MaterialButton
                variant={product === 'tweaks' ? 'contained' : 'outlined'}
                color='secondary'
                startIcon={isDesktopMode ? <AutoAwesome /> : undefined}
                onClick={selectTweaks}>
                {isDesktopMode ? t('product.tweaks') : <AutoAwesome />}
            </MaterialButton>
        </ButtonGroup>
    );
};
