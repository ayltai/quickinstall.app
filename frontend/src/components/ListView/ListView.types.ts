import type { ListProps, } from '@mui/material/List';
import type { ReactNode, } from 'react';

export type ListViewProps = Omit<ListProps, 'children' | 'onClick'> & {
    children?  : ReactNode,
    onClick?   : (key : string) => void,
    onDelete?  : (key : string) => void,
};
