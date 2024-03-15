import { ReactNode, } from 'react';

import { CardViewProps, } from './CardView.types';

export type SelectableCardViewProps = Omit<CardViewProps, 'children' | 'onChange'> & {
    selected?     : boolean,
    color?        : 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
    actionText?   : string,
    actionIcon?   : ReactNode,
    dialogAction? : ReactNode,
    children?     : ReactNode,
    onChange?     : (selected : boolean) => void,
};
