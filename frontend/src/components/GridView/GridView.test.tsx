import React from 'react';

import { render, } from '../../utils/test';
import { GridView, } from './GridView';

describe('<GridView />', () => {
    it('renders correctly', () => expect(render(
        <GridView>
            <div key='1' />
            <div key='2' />
            <div key='3' />
        </GridView>
    )).toMatchSnapshot());
});
