import type { ReactElement, } from 'react';

import type { Item, } from '../../models';
import type { SelectableCardViewProps, } from '../CardView';
import type { DetailsViewProps, } from '../DetailsView';

export type CatalogueItemProps<T extends Item, D extends DetailsViewProps> = Omit<SelectableCardViewProps, 'itemRef'> & {
    selected?          : boolean,
    item               : T,
    detailsView        : ReactElement<D>,
    onSelectionChange? : (item : T, selected : boolean) => void,
};
