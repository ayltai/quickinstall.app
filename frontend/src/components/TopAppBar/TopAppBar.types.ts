import type { AppBarOwnProps, } from '@mui/material/AppBar';
import type { ReactNode, } from 'react';

export interface TopAppBarProps extends AppBarOwnProps {
    logo?     : ReactNode,
    title?    : ReactNode,
    actions?  : ReactNode,
    children? : ReactNode,
}
