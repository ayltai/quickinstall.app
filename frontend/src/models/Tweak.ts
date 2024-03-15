import type { Item, } from './Item';

export type Tweak = Item & {
    parameters   : string[],
    types        : ('boolean' | 'number' | 'string')[],
    values       : (boolean | number | string)[],
    impact?      : 'Dock' | 'Finder' | 'SystemUIServer',
    privileged?  : boolean,
    sipInvolved? : boolean,
};
