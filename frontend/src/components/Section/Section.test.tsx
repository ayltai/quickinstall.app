import React from 'react';

import { render, } from '../../utils/test';
import { Section, } from './Section';

describe('<Section />', () => {
    it('renders correctly', () => expect(render(
        <Section title='Title'>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </Section>
    )).toMatchSnapshot());
});
