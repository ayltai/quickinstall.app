import React, { type FC, useState, } from 'react';

import { MaterialButton, } from '../Button';
import type { ToggleButtonProps, } from './ToggleButton.types';

/**
 * A toggle button lets users switch between the selection of an item on or off.
 * @param icon The icon to show when the button is in the unselected state
 * @param selectedIcon The icon to show when the button is in the selected state
 * @param deselectIcon The icon to show when the button is in the selected state and is hovered
 * @param text The text to show when the button is in the unselected state
 * @param selectedText The text to show when the button is in the selected state
 * @param deselectText The text to show when the button is in the selected state and is hovered
 * @param onChange Function to call when the selected state is changed
 * @param props Other props
 */
export const ToggleButton : FC<ToggleButtonProps> = ({
    icon,
    selectedIcon,
    deselectIcon,
    text,
    selectedText,
    deselectText,
    onChange,
    ...props
}) => {
    const { color, selected, ...rest } = props;

    const [ hover, setHover, ] = useState(false);

    const handleClick = () => onChange && onChange(!selected);

    const handleMouseOver = () => setHover(true);

    const handleMouseOut = () => setHover(false);

    return (
        <MaterialButton
            aria-checked={selected}
            role='checkbox'
            color={color}
            variant={selected ? 'contained' : 'text'}
            startIcon={selected ? hover ? deselectIcon : selectedIcon : icon}
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            {...rest}>
            {selected ? hover ? deselectText : selectedText : text}
        </MaterialButton>
    );
};
