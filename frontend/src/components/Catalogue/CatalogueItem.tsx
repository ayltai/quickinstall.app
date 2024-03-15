import React, { JSX, useContext, } from 'react';

import { FirebaseContext, } from '../../contexts';
import { useAppSelector, } from '../../hooks';
import type { Item, } from '../../models';
import { logAddToCart, logRemoveFromCart, } from '../../utils';
import { SelectableCardView, } from '../CardView';
import type { DetailsViewProps, } from '../DetailsView';
import type { CatalogueItemProps, } from './CatalogueItem.types';

/**
 * A catalogue item that displays the details of the item.
 * @param selected Whether the item is selected
 * @param itemRef The item to display
 * @param detailsView The details view to show when the item is clicked
 * @param onSelectionChange The function to call when the item selection is changed
 * @param rest Other props
 */
export const CatalogueItem : <T extends Item, D extends DetailsViewProps>(props : CatalogueItemProps<T, D>) => JSX.Element = ({
    selected,
    item,
    detailsView,
    onSelectionChange,
    ...rest
}) => {
    const { product, } : { product : 'win/packages' | 'mac/packages' | 'tweaks', } = useAppSelector(state => state.preference);

    const app = useContext(FirebaseContext);

    const handleChange = (isSelected : boolean) => {
        if (onSelectionChange) onSelectionChange(item, isSelected);

        if (app) {
            if (isSelected) {
                logAddToCart(app, {
                    platform : product === 'win/packages' ? 'win' : 'mac',
                    itemId   : item.id,
                });
            } else {
                logRemoveFromCart(app, {
                    platform : product === 'win/packages' ? 'win' : 'mac',
                    itemId   :  item.id,
                });
            }
        }
    };

    return (
        <SelectableCardView
            selected={selected}
            color={product === 'win/packages' ? 'info' : product === 'mac/packages' ? 'primary' : 'secondary'}
            title={item.name}
            subtitle={item.author}
            description={item.description}
            onChange={handleChange}
            {...rest}>
            {detailsView}
        </SelectableCardView>
    );
};
