import type { HTMLAttributes, ReactNode, } from 'react';

export type EmptyStateProps = HTMLAttributes<HTMLDivElement> & {
    children?        : ReactNode,
    [ key : string ] : any,
};
