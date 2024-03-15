import React from 'react';

import { render, } from '../../utils/test';
import { TopAppBar, } from './TopAppBar';

describe('<TopAppBar />', () => {
    it('renders correctly', () => expect(render(
        <TopAppBar
            logo='Logo'
            title='Title'
            actions='Actions'>
            Children
        </TopAppBar>
    )).toMatchSnapshot());
});
