import type { DetailsViewProps, } from './DetailsView.types';

export type TweakDetailsViewProps = Omit<DetailsViewProps, 'children'> & {
    parameters : string[],
    types      : ('boolean' | 'number' | 'string')[],
    values     : (string | number | boolean)[],
    onChange?  : (parameter : string, value? : string | number | boolean) => void,
};
