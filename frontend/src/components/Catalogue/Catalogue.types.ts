import type { SearchResult, } from 'minisearch';
import type { ReactNode, } from 'react';

import type { Item, } from '../../models';

export interface CatalogueProps<T extends Item> {
    searching?          : boolean,
    suggestedItems?     : T[],
    downloadedItems?    : T[],
    tagLine?            : string,
    searchHint?         : string,
    title?              : string,
    description?        : string,
    commands            : (number | string)[],
    categories          : string[],
    itemFields          : string[],
    loadingMessage?     : string,
    renderCatalogueItem : (item : T) => ReactNode,
    searchResultMapper  : (result : SearchResult) => T,
    onSearch?           : (keyword? : string) => void,
}
