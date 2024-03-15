import Button, { type ButtonOwnProps, } from '@mui/material/Button';
import type { ButtonBaseOwnProps, } from '@mui/material/ButtonBase';
import { styled, } from '@mui/material/styles';
import type { FC, HTMLAttributes, } from 'react';

/**
 *A button lets users take actions and make choices with one click or tap.
 */
export const MaterialButton : FC<HTMLAttributes<HTMLButtonElement> & ButtonBaseOwnProps & ButtonOwnProps> = styled(Button)(({
    theme,
    variant,
}) => ({
    padding       : '0.5rem 1rlh',
    borderRadius  : '2rem',
    boxShadow     : theme.shadows[0],
    ':hover'      : {
        boxShadow : theme.shadows[variant === 'contained' ? 1 : 0],
    },
    fontWeight    : 'normal',
    textTransform : 'none',
}));
