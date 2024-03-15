import React, { type ComponentType, JSX, } from 'react';

import { Section, } from '../Section';
import { GridView, } from './GridView';
import type { GridViewProps, } from './GridView.types';
import type { SectionedGridViewProps, } from './SectionedGridView.types';

const withSection = (Component : ComponentType<GridViewProps>) => {
    const ComponentWithSection : (props : SectionedGridViewProps) => JSX.Element = (props : SectionedGridViewProps) => {
        const { color, title, children, ...rest } = props;

        return (
            <Section
                title={title}
                color={color}
                {...rest}>
                <Component>
                    {children}
                </Component>
            </Section>
        );
    };

    return ComponentWithSection;
};

/**
 * A grid layout with sections.
 */
export const SectionedGridView = withSection(GridView);
