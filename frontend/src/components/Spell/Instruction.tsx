import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React, { type FC, } from 'react';
import { useTranslation, } from 'react-i18next';

import { useAppSelector, } from '../../hooks';
import type { Tweak, } from '../../models';
import { Instruction, InstructionProps, } from '../Instruction';

/**
 * An instruction dialog that informs users about how to apply the selected tweaks.
 */
export const SpellInstruction : FC<InstructionProps> = props => {
    const { transactionId, ...rest } = props;

    const { tweaks,    } : { tweaks    : Tweak[],          } = useAppSelector(state => state.spell);
    const { themeMode, } : { themeMode : 'light' | 'dark', } = useAppSelector(state => state.preference);

    const { t, } = useTranslation();

    return (
        <Instruction
            color='secondary'
            transactionId={transactionId}
            title={t('tweaks.checkout.copy')}
            {...rest}>
            {tweaks.some(tweak => tweak.sipInvolved) && (
                <>
                    <Box paddingBottom={2}>
                        <Typography>
                            {t('tweaks.checkout.instructions.1')}
                        </Typography>
                        <Box
                            sx={{
                                borderRadius    : '1rem',
                                backgroundColor : themeMode === 'light' ? '#ffccbc' : '#d84315',
                            }}
                            padding={2}>
                            {tweaks.filter(tweak => tweak.sipInvolved).map(tweak => (
                                <Typography key={tweak.id}>
                                    {`• ${tweak.name}`}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                    <Box paddingBottom={2}>
                        <Typography>
                            {t('tweaks.checkout.instructions.2')}
                        </Typography>
                        <Link
                            color='secondary'
                            href='https://developer.apple.com/documentation/security/disabling_and_enabling_system_integrity_protection'
                            target='_blank'
                            rel='noreferrer'>
                            https://developer.apple.com/documentation/security/disabling_and_enabling_system_integrity_protection
                        </Link>
                    </Box>
                </>
            )}
        </Instruction>
    );
};
