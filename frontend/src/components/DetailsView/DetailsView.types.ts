import type { HTMLAttributes, } from 'react';

export type DetailsViewProps = Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'onChange'> & {
    color?       : 'info' | 'primary' | 'secondary',
    description? : string,
    infoUrl?     : string,
    source       : string,
};
