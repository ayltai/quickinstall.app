import type { ButtonOwnProps, } from '@mui/material/Button';
import type { ButtonBaseOwnProps, } from '@mui/material/ButtonBase';
import type { HTMLAttributes, } from 'react';

export type ShoppingCartProps = HTMLAttributes<HTMLButtonElement> & ButtonBaseOwnProps & ButtonOwnProps & {
    onClick? : () => void,
};
