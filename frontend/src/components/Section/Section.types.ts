import type { HTMLAttributes, ReactNode, } from 'react';

export type SectionProps = HTMLAttributes<HTMLDivElement> & {
    title?    : string,
    color?    : 'info.main' | 'primary' | 'secondary',
    children? : ReactNode,
};
