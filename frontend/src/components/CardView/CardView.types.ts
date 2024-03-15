import type { HTMLAttributes, ReactNode, } from 'react';

export type CardViewProps = HTMLAttributes<HTMLDivElement> & {
    title?       : string,
    subtitle?    : string,
    description? : string,
    onClick?     : () => void,
    children?    : ReactNode,
};
