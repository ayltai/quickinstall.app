import Close from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import React, { type FC, } from 'react';
import { useTranslation, } from 'react-i18next';

import { MaterialButton, } from '../Button';
import type { DialogViewProps, } from './DialogView.types';

/**
 * A dialogue is an overlay that requires users to take an action or gives them important information.
 * @param open Whether the dialog is open
 * @param color The color of the dialog controls
 * @param title The title of the dialog
 * @param action The primary action of the dialog
 * @param onClose Function to call when the close button is clicked
 * @param rest Other props
 */
export const DialogView : FC<DialogViewProps> = ({
    color,
    title,
    action,
    onClose,
    ...rest
}) => {
    const { children, } = rest;

    const { t, } = useTranslation();

    return (
        <Dialog
            onClose={onClose}
            {...rest}>
            <DialogTitle>
                {title}
            </DialogTitle>
            <IconButton
                sx={{
                    position : 'absolute',
                    right    : 8,
                    top      : 8,
                    color    : theme => theme.palette.grey[500],
                }}
                onClick={onClose}>
                <Close />
            </IconButton>
            <DialogContent dividers>
                {children}
            </DialogContent>
            <DialogActions>
                <MaterialButton
                    color={color}
                    onClick={onClose}>
                    {t('action.close')}
                </MaterialButton>
                {action}
            </DialogActions>
        </Dialog>
    );
};
