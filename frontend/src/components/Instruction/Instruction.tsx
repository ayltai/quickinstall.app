import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import React, { type FC, useCallback, useContext, } from 'react';
import { useTranslation, } from 'react-i18next';

import { API_ENDPOINT, } from '../../constants';
import { FirebaseContext, } from '../../contexts';
import { useAppSelector, } from '../../hooks';
import { logShare, } from '../../utils';
import { CopyableInput, } from '../CopyableInput';
import { DialogView, } from '../DialogView';
import type { InstructionProps, } from './Instruction.types';

/**
 * An instruction dialog that displays installation instructions to the user.
 * @param transactionId The ID of the transaction
 * @param props Other props
 */
export const Instruction : FC<InstructionProps> = ({
    transactionId,
    ...props
}) => {
    const { open, title, color, children, ...rest } = props;

    const { product, } : { product : 'win/packages' | 'mac/packages' | 'tweaks', } = useAppSelector(state => state.preference);

    const app = useContext(FirebaseContext);

    const { t, } = useTranslation();

    const handleCopy = useCallback(() => {
        if (app && transactionId) logShare(app, {
            product,
            itemId  : transactionId,
        });
    }, [ app, transactionId, product, ]);

    return (
        <DialogView
            {...rest}
            color={color}
            open={open && !!transactionId}
            title={t('checkout.title')}>
            <Stack spacing={1}>
                {children}
                <Typography>
                    {title}
                </Typography>
                {product === 'win/packages' && (
                    <Link
                        color={color === 'info' ? 'info.main' : color}
                        href='https://www.makeuseof.com/windows-run-command-prompt-admin/'
                        target='_blank'
                        rel='noreferrer'>
                        https://www.makeuseof.com/windows-run-command-prompt-admin/
                    </Link>
                )}
                {product === 'mac/packages' && (
                    <Link
                        color={color === 'info' ? 'info.main' : color}
                        href='https://support.apple.com/en-gb/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac'
                        target='_blank'
                        rel='noreferrer'>
                        https://support.apple.com/en-gb/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac
                    </Link>
                )}
                <CopyableInput
                    value={product === 'win/packages' ? `powershell -command "Invoke-WebRequest ${import.meta.env.DEV ? `http://${window.location.hostname}:8080` : API_ENDPOINT}/win/recipes/${transactionId}/install -OutFile quickinstall.bat" && quickinstall.bat && del quickinstall.bat` : `bash -c "$(curl -fsSL '${import.meta.env.DEV ? `http://${window.location.hostname}:8080` : API_ENDPOINT}/${product === 'mac/packages' ? 'mac/recipes' : 'mac/spells'}/${transactionId}/install')"`}
                    onCopy={handleCopy} />
            </Stack>
        </DialogView>
    );
};
