import type { ButtonGroupProps, } from '@mui/material/ButtonGroup';

export type ProductSelectionProps = Omit<ButtonGroupProps, 'onChange'> & {
    onChange?        : (product : 'win/packages' | 'mac/packages' | 'tweaks') => void,
    [ key : string ] : any,
};
