import React from 'react';

import { render, } from '../../utils/test';
import { SectionedGridView, } from './SectionedGridView';

describe('<SectionedGridView />', () => {
    it('renders correctly', () => expect(render(
        <SectionedGridView title='Title'>
            <div key='1' />
            <div key='2' />
            <div key='3' />
        </SectionedGridView>
    )).toMatchSnapshot());
});
