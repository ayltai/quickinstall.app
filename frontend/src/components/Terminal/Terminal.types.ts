import type { HTMLAttributes, } from 'react';

export type TerminalProps = HTMLAttributes<HTMLDivElement> & {
    commands : (number | string)[],
};
