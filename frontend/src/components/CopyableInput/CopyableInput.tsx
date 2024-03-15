import ContentCopy from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';
import { styled, } from '@mui/material/styles';
import React, { type FC, type FocusEvent, useState, } from 'react';
import { useTranslation, } from 'react-i18next';

import { handleError, } from '../../utils';
import type { CopyableInputProps, } from './CopyableInput.types';

const MonospaceInput = styled(OutlinedInput)({
    paddingLeft  : '0.5rem',
    paddingRight : '1.5rem',
    borderRadius : '2rem',
    fontFamily   : 'monospace',
});

/**
 * An input field that allows a user to copy information to the clipboard.
 * @param value The value to copy
 * @param onCopy Function to call when the copy button is clicked
 * @param rest Other props
 */
export const CopyableInput : FC<CopyableInputProps> = ({
    value,
    onCopy,
    ...rest
}) => {
    const [ open, setOpen, ] = useState(false);

    const { t, } = useTranslation();

    const handleCopy = () => {
        if (value) navigator.clipboard.writeText(value).catch(handleError);

        setOpen(true);

        if (onCopy) onCopy();
    };

    const handleFocus = (event : FocusEvent<HTMLInputElement>) => event.target.select();

    const handleClose = () => setOpen(false);

    return (
        <>
            <MonospaceInput
                {...rest}
                value={value}
                endAdornment={navigator.clipboard && (
                    <InputAdornment position='end'>
                        <Tooltip title={t('action.copy')}>
                            <IconButton
                                edge='end'
                                onClick={handleCopy}>
                                <ContentCopy />
                            </IconButton>
                        </Tooltip>
                    </InputAdornment>
                )}
                onFocus={handleFocus} />
            <Snackbar
                open={open}
                anchorOrigin={{
                    horizontal : 'center',
                    vertical   : 'bottom',
                }}
                autoHideDuration={2500}
                message={t('common.copied')}
                onClose={handleClose} />
        </>
    );
};
