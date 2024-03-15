import Check from '@mui/icons-material/Check';
import DeleteForever from '@mui/icons-material/DeleteForever';
import { useTheme, } from '@mui/material/styles';
import React, { type ComponentType, JSX, useMemo, useState, } from 'react';
import { useTranslation, } from 'react-i18next';

import { ToggleButton, } from '../ToggleButton';
import { DialogView, } from '../DialogView';
import { MaterialButton, } from '../Button';
import { CardView, } from './CardView';
import type { CardViewProps, } from './CardView.types';
import type { SelectableCardViewProps, } from './SelectableCardView.types';

const withSelectable = (Component : ComponentType<CardViewProps>) => {
    const ComponentWithSelectable : (props : SelectableCardViewProps) => JSX.Element = (props : SelectableCardViewProps) => {
        const { style, selected = false, color, dialogAction, actionIcon, actionText, children, onChange, ...rest } = props;

        const [ open, setOpen, ] = useState(false);

        const theme = useTheme();

        const { t, } = useTranslation();

        const borderColor = useMemo(() => color === 'info' ? theme.palette.info.main : color === 'primary' ? theme.palette.primary.main : color === 'secondary' ? theme.palette.secondary.main : theme.palette.divider, [ color, theme, ]);

        const handleClick = () => setOpen(true);

        const handleChange = (checked : boolean) => onChange && onChange(checked);

        const handleClose = () => setOpen(false);

        return (
            <>
                <Component
                    style={{
                        ...style,
                        border          : `1px solid ${selected ? borderColor : 'transparent'}`,
                        backgroundColor : selected ? theme.palette.action.selected : theme.palette.background.paper,
                    }}
                    onClick={handleClick}
                    {...rest}>
                    {(actionIcon || actionText) && (
                        <MaterialButton
                            color={color}
                            startIcon={actionIcon}
                            onClick={handleClick}>
                            {actionText}
                        </MaterialButton>
                    )}
                    <ToggleButton
                        selected={selected}
                        color={color}
                        icon={<Check />}
                        text={t('action.select')}
                        selectedIcon={<Check />}
                        selectedText={t('action.deselect')}
                        deselectIcon={<DeleteForever />}
                        deselectText={t('action.remove')}
                        onChange={handleChange} />
                </Component>
                {children && (
                    <DialogView
                        open={open}
                        color={color}
                        title={props.title}
                        action={dialogAction}
                        onClose={handleClose}>
                        {children}
                    </DialogView>
                )}
            </>
        );
    };

    return ComponentWithSelectable;
};

/**
 * A selectable card displays a title, subtitle, description, and optionally one or more buttons.
 */
export const SelectableCardView = withSelectable(CardView);
