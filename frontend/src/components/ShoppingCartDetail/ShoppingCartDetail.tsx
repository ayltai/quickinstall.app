import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React, { useCallback, useContext, useState, } from 'react';
import { useTranslation, } from 'react-i18next';

import { FirebaseContext, } from '../../contexts';
import { useAppSelector, useDesktopMode, } from '../../hooks';
import type { Item, } from '../../models';
import { logCheckout, logRemoveFromCart, } from '../../utils';
import type { DetailsViewProps, } from '../DetailsView';
import { EmptyState, } from '../EmptyState';
import { MaterialButton, } from '../Button';
import { DialogView, } from '../DialogView';
import type { InstructionProps, } from '../Instruction';
import { ListView, } from '../ListView';
import { Loading, } from '../Loading';
import { TruncatedTypography, } from '../TruncatedTypography';
import type { ShoppingCartDetailProps, } from './ShoppingCartDetail.types';

/**
 * A component that displays a list of items in the shopping cart.
 * @param props The component props
 */
export const ShoppingCartDetail = <T extends Item, D extends DetailsViewProps, I extends InstructionProps>({
    items,
    detailsView,
    dialogAction,
    instruction,
    instructionShown,
    onSelect,
    onDelete,
    onNext,
    ...rest
} : ShoppingCartDetailProps<T, D, I>) => {
    const [ openDetail,    setOpenDetail,    ] = useState(false);
    const [ selectedItem,  setSelectedItem,  ] = useState<T | undefined>();

    const { product, } : { product : 'win/packages' | 'mac/packages' | 'tweaks', } = useAppSelector(state => state.preference);

    const app = useContext(FirebaseContext);

    const isDesktopMode = useDesktopMode();

    const { t, } = useTranslation();

    const handleClick = useCallback((id : string) => {
        const item = items.find(i => i.id === id);

        if (onSelect) onSelect(item!);
        setSelectedItem(item);

        setOpenDetail(true);
    }, [ onSelect, items, ]);

    const handleDelete = useCallback((id : string) => {
        if (app) logRemoveFromCart(app, {
            platform : product.split('/')[0] as 'win' | 'mac',
            itemId   : id,
        });

        if (onDelete) onDelete(items.find(item => item.id === id)!);
    }, [ app, product, onDelete, items, ]);

    const handleNext = useCallback(() => {
        if (app) logCheckout(app, {
            platform : product.split('/')[0] as 'win' | 'mac',
            itemIds  : items.map(item => item.id),
        });

        if (onNext) onNext();
    }, [ app, product, items, onNext, ]);

    const handleClose = () => setOpenDetail(false);

    return (
        <Stack
            width={isDesktopMode ? 360 : 320}
            height='100vh'
            display='flex'
            overflow='hidden'>
            {items.length === 0 && (
                <Stack
                    padding={2}
                    display='flex'
                    flexGrow={1}
                    alignItems='center'
                    textAlign='center'>
                    <Box flexGrow={1} />
                    <EmptyState flexGrow={1}>
                        <Typography
                            gutterBottom
                            variant='h5'>
                            {t('cart.empty')}
                        </Typography>
                        <Typography>
                            {t('cart.hint')}
                        </Typography>
                    </EmptyState>
                    <Box flexGrow={1} />
                </Stack>
            )}
            {items.length > 0 && (
                <Stack
                    display='flex'
                    flexGrow={1}>
                    <ListView
                        sx={{}}
                        onClick={handleClick}
                        onDelete={handleDelete}
                        {...rest}>
                        {items.map(item => (
                            <ListItemText
                                key={item.id}
                                primary={
                                    <Tooltip title={item.name}>
                                        <TruncatedTypography noWrap>
                                            {item.name}
                                        </TruncatedTypography>
                                    </Tooltip>
                                }
                                secondary={item.author} />
                        ))}
                    </ListView>
                    <Box flexGrow={1} />
                    <Divider />
                    <Stack
                        padding={2}
                        direction='row'
                        display='flex'
                        alignItems='center'>
                        <Typography
                            variant='h6'
                            flexGrow={1}>
                            {t('cart.total', {
                                count : items.length,
                            })}
                        </Typography>
                        <MaterialButton
                            disabled={instructionShown}
                            color={product === 'win/packages' ? 'info' : product === 'mac/packages' ? 'primary' : 'secondary'}
                            variant='contained'
                            onClick={handleNext}>
                            {t('cart.checkout')}
                        </MaterialButton>
                    </Stack>
                </Stack>
            )}
            {selectedItem && (
                <DialogView
                    open={openDetail}
                    color={product === 'win/packages' ? 'info' : product === 'mac/packages' ? 'primary' : 'secondary'}
                    title={selectedItem.name}
                    action={dialogAction}
                    onClose={handleClose}>
                    {detailsView}
                </DialogView>
            )}
            {instruction}
            <Loading show={!instruction && instructionShown}>
                <Typography color={theme => theme.palette.common.white}>
                    {t('cart.processing')}
                </Typography>
            </Loading>
        </Stack>
    );
};
