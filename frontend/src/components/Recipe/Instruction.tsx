import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React, { type FC, } from 'react';
import { useTranslation, } from 'react-i18next';

import { useAppSelector, } from '../../hooks';
import type { Ingredient, } from '../../models';
import { Instruction, type InstructionProps, } from '../Instruction';

/**
 * An instruction dialog that informs users about how to install the selected packages.
 */
export const RecipeInstruction : FC<InstructionProps> = props => {
    const { transactionId, ...rest } = props;

    const { ingredients, } : { ingredients : Ingredient[],     } = useAppSelector(state => state.recipe);

    const { product, themeMode,   } : { product : 'win/packages' | 'mac/packages' | 'tweaks', themeMode   : 'light' | 'dark', } = useAppSelector(state => state.preference);

    const { t, } = useTranslation();

    return (
        <Instruction
            transactionId={transactionId}
            title={t(product === 'win/packages' ? 'packages.checkout.copy.win' : 'packages.checkout.copy.mac')}
            {...rest}>
            {ingredients.some(ingredient => ingredient.source === 'App Store') && (
                <>
                    <Typography>
                        {t('packages.checkout.instructions')}
                    </Typography>
                    <Link
                        color='primary'
                        href='https://support.apple.com/en-gb/guide/app-store/fir6253293d/mac'
                        target='_blank'
                        rel='noreferrer'>
                        https://support.apple.com/en-gb/guide/app-store/fir6253293d/mac
                    </Link>
                    <Box
                        sx={{
                            borderRadius    : '1rem',
                            backgroundColor : themeMode === 'light' ? '#dcedc8' : '#558b2f',
                        }}
                        padding={2}>
                        {ingredients.filter(ingredient => ingredient.source === 'App Store').map(ingredient => (
                            <Typography key={ingredient.id}>
                                {`• ${ingredient.name}`}
                            </Typography>
                        ))}
                    </Box>
                </>
            )}
        </Instruction>
    );
};
