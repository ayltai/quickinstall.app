import type { HTMLAttributes, ReactNode, } from 'react';

export type LoadingProps = HTMLAttributes<HTMLDivElement> & {
    show?     : boolean,
    size?     : number | string,
    children? : ReactNode,
};
