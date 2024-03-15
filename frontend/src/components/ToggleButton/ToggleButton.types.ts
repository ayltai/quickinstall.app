import type { ToggleButtonOwnProps, } from '@mui/material/ToggleButton';
import type { ReactNode, } from 'react';

export type ToggleButtonProps = Omit<ToggleButtonOwnProps, 'color' | 'value' | 'onClick' | 'onChange'> & {
    color?        : 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
    icon?         : ReactNode,
    selectedIcon? : ReactNode,
    deselectIcon? : ReactNode,
    text?         : ReactNode,
    selectedText? : ReactNode,
    deselectText? : ReactNode,
    onClick?      : () => void,
    onChange?     : (selected : boolean) => void,
};
