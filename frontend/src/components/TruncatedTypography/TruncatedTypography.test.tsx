import React from 'react';

import { render, } from '../../utils/test';
import { TruncatedTypography, } from './TruncatedTypography';

describe('<TruncatedTypography />', () => {
    it('renders correctly', () => expect(render(
        <TruncatedTypography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam ultricies, nunc nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl
        </TruncatedTypography>
    )).toMatchSnapshot());
});
