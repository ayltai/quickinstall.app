import type { GridProps, } from '@mui/material/Grid/Grid';
import type { ReactNode, } from 'react';

export type GridViewProps = Omit<GridProps, 'children'> & {
    children? : ReactNode,
};
