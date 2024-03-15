import type { DialogProps, } from '@mui/material/Dialog';
import type { ReactNode, } from 'react';

export interface DialogViewProps extends Omit<DialogProps, 'color' | 'onClose'> {
    color?   : 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
    title?   : string,
    action?  : ReactNode,
    onClose? : () => void,
}
