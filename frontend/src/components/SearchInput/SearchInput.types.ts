import type { HTMLAttributes, } from 'react';

export type SearchInputProps = HTMLAttributes<HTMLDivElement> & {
    loading?  : boolean,
    hint?     : string,
    onSearch? : (keyword? : string) => void,
};
