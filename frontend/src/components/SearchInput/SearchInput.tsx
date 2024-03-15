import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import InputBase from '@mui/material/InputBase';
import { styled, } from '@mui/material/styles';
import React, { type ChangeEvent, type FC, useCallback, useEffect, } from 'react';
import { useDebounceValue, } from 'usehooks-ts';

import type { SearchInputProps, } from './SearchInput.types';

const Search = styled('div')({
    display         : 'inline-block',
    position        : 'relative',
    borderRadius    : '2rem',
    backgroundColor : 'rgba(0, 0, 0, 0.16)',
    '&:hover'       : {
        backgroundColor : 'rgba(0, 0, 0, 0.24)',
    },
});

const SearchIconWrapper = styled('div')(({ theme, }) => ({
    padding        : theme.spacing(0, 2),
    height         : '100%',
    position       : 'absolute',
    pointerEvents  : 'none',
    display        : 'flex',
    alignItems     : 'center',
    justifyContent : 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme, }) => ({
    color                   : 'inherit',
    '& .MuiInputBase-input' : {
        padding                          : theme.spacing(1, 1, 1, 0),
        paddingLeft                      : `calc(1em + ${theme.spacing(4)})`,
        transition                       : theme.transitions.create('width'),
        width                            : '100%',
        [ theme.breakpoints.down('lg') ] : {
            width     : '20ch',
            '&:focus' : {
                width : '26ch',
            },
        },
        [ theme.breakpoints.up('lg') ]   : {
            width     : '48ch',
            '&:focus' : {
                width : '64ch',
            },
        },
    },
}));

/**
 * A search input lets users enter search queries and find relevant pieces of content.
 * @param loading Whether the input is loading
 * @param hint Placeholder text
 * @param onSearch Function to call when the input is changed
 * @param rest Other props
 */
export const SearchInput : FC<SearchInputProps> = ({
    loading,
    hint,
    onSearch,
    ...rest
}) => {
    const [ debouncedKeyword, setValue, ] = useDebounceValue('', 400);

    const handleChange = useCallback((event : ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }, [ setValue, ]);

    useEffect(() => {
        if (!loading && onSearch) onSearch(debouncedKeyword);
    }, [ debouncedKeyword, loading, onSearch, ]);

    return (
        <Search {...rest}>
            <SearchIconWrapper>
                {loading && (
                    <CircularProgress
                        size={24}
                        color='inherit' />
                )}
                {!loading && <SearchIcon />}
            </SearchIconWrapper>
            <StyledInputBase
                placeholder={hint}
                readOnly={loading}
                onChange={handleChange} />
        </Search>
    );
};
