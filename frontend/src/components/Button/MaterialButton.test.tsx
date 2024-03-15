import React from 'react';

import { render, } from '../../utils/test';
import { MaterialButton, } from './MaterialButton';

describe('<MaterialButton />', () => {
    it('renders default style correctly', () => expect(render(<MaterialButton>Default</MaterialButton>)).toMatchSnapshot());

    it('renders default style with secondary colour correctly', () => expect(render(<MaterialButton color='secondary'>Default Secondary</MaterialButton>)).toMatchSnapshot());

    it('renders contained style correctly', () => expect(render(<MaterialButton variant='contained'>Contained</MaterialButton>)).toMatchSnapshot());

    it('renders contained style with secondary colour correctly', () => expect(render(
        <MaterialButton
            color='secondary'
            variant='contained'>
            Contained Secondary
        </MaterialButton>
    )).toMatchSnapshot());

    it('renders outlined style correctly', () => expect(render(<MaterialButton variant='outlined'>Outlined</MaterialButton>)).toMatchSnapshot());

    it('renders outlined style with secondary colour correctly', () => expect(render(
        <MaterialButton
            color='secondary'
            variant='outlined'>
            Outlined Secondary
        </MaterialButton>
    )).toMatchSnapshot());

    it('renders text style correctly', () => expect(render(<MaterialButton variant='text'>Text</MaterialButton>)).toMatchSnapshot());

    it('renders text style with secondary colour correctly', () => expect(render(
        <MaterialButton
            color='secondary'
            variant='text'>
            Text Secondary
        </MaterialButton>
    )).toMatchSnapshot());
});
