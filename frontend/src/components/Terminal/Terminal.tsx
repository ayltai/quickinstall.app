import Box from '@mui/material/Box';
import React, { type FC, } from 'react';
import { TypeAnimation, } from 'react-type-animation';

import { useDesktopMode, } from '../../hooks';
import './terminal.css';
import background from './terminal.webp';
import type { TerminalProps, } from './Terminal.types';

/**
 * A terminal animates the typing of commands.
 * @param commands The commands to type
 * @param rest Other props
 */
export const Terminal : FC<TerminalProps> = ({
    commands,
    ...rest
}) => {
    const isDesktopMode = useDesktopMode();

    return (
        <Box
            sx={{
                backgroundImage : `url(${background})`,
                backgroundSize  : isDesktopMode ? undefined : '373px 170px',
            }}
            position='relative'
            width={isDesktopMode ? 747 : 373}
            height={isDesktopMode ? 341 : 170}
            {...rest}>
            <TypeAnimation
                style={{
                    position   : 'absolute',
                    width      : isDesktopMode ? 636 : 318,
                    left       : 0,
                    top        : 0,
                    marginLeft : isDesktopMode ? 52 : 28,
                    marginTop  : isDesktopMode ? 48 : 24,
                    color      : 'white',
                    fontSize   : isDesktopMode ? '1rem' : '0.5rem',
                    fontFamily : 'monospace',
                    wordBreak  : 'break-all',
                }}
                className='type'
                speed={24}
                deletionSpeed={96}
                sequence={commands}
                repeat={Infinity} />
        </Box>
    );
};
