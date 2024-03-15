import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MiniSearch from 'minisearch';
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState, useTransition, } from 'react';
import { useTranslation, } from 'react-i18next';

import { MIN_SEARCH_LENGTH, SEARCH_FUZZINESS, } from '../../constants';
import { FirebaseContext, } from '../../contexts';
import { useAppSelector, useDesktopMode, } from '../../hooks';
import type { Item, } from '../../models';
import { gradientPalette, } from '../../styles';
import { logPageView, logSearch, } from '../../utils';
import { EmptyState, } from '../EmptyState';
import { GridView, SectionedGridView, } from '../GridView';
import { Loading, } from '../Loading';
import { SearchInput, } from '../SearchInput';
import { Terminal, } from '../Terminal';
import type { CatalogueProps, } from './Catalogue.types';

/**
 * A catalogue component that displays the list of items.
 * @param searching Whether the search process is in progress
 * @param suggestedItems The catalogue items to display when search query is empty
 * @param downloadedItems The catalogue items to store locally and to be searched
 * @param tagLine The service tag line
 * @param searchHint The search hint
 * @param title The title of the catalogue
 * @param description The description of the catalogue
 * @param commands The sample commands to show
 * @param categories The categories to group the default items to show
 * @param itemFields The item fields to store in the search engine
 * @param loadingMessage The message to show when the catalogue is loading
 * @param renderCatalogueItem The function to render a catalogue item
 * @param searchResultMapper The search result object mapper
 * @param onSearch The function to call when the search is triggered
 */
export const Catalogue : <T extends Item>(props : CatalogueProps<T>) => JSX.Element = <T extends Item>({
    searching = false,
    suggestedItems,
    downloadedItems,
    tagLine,
    searchHint,
    title,
    description,
    commands,
    categories,
    itemFields,
    loadingMessage,
    renderCatalogueItem,
    searchResultMapper,
    onSearch,
} : CatalogueProps<T>) => {
    const [ query,        setQuery,        ] = useState('');
    const [ matchedItems, setMatchedItems, ] = useState<T[] | undefined>();

    const { product, themeMode, } : { product : 'win/packages' | 'mac/packages' | 'tweaks', themeMode : 'light' | 'dark', } = useAppSelector(state => state.preference);

    const isDesktopMode = useDesktopMode();

    const app = useContext(FirebaseContext);

    const [ isPending, startTransition, ] = useTransition();

    const { t, } = useTranslation();

    const palette = useMemo(() => gradientPalette[themeMode][Math.trunc(Math.random() * gradientPalette[themeMode].length)], [ themeMode, ]);

    const searchEngine = useRef<MiniSearch<Omit<T, 'imageUrl' | 'infoUrl'>>>(new MiniSearch({
        fields        : [
            'id',
            'name',
            'description',
            'author',
        ],
        storeFields   : itemFields,
        searchOptions : {
            fuzzy : SEARCH_FUZZINESS,
        },
    }));

    const search = useCallback((keywords : string) => {
        if (app) logSearch(app, {
            platform : product === 'win/packages' ? 'win' : 'mac',
            query    : keywords,
        });

        return searchEngine.current.search(keywords).map(searchResultMapper);
    }, [ app, product, searchResultMapper, ]);

    const handleSearch = (keywords? : string) => {
        setQuery(keywords ?? '');

        if (onSearch) onSearch(keywords);
    };

    useEffect(() => {
        searchEngine.current.removeAll();

        if (downloadedItems) searchEngine.current.addAll(downloadedItems);

        if (query.length < MIN_SEARCH_LENGTH) {
            setMatchedItems(undefined);
        } else {
            startTransition(() => setMatchedItems(search(query)));
        }
    }, [ downloadedItems, query, search, ]);

    useEffect(() => {
        if (app) logPageView(app, {
            pageName : product === 'win/packages' ? 'Windows/Packages' : product === 'mac/packages' ? 'macOS/Packages' : 'Tweaks',
            route    : `/${product}`,
        });
    }, [ app, product, ]);

    return (
        <>
            <Stack
                spacing={2}
                alignItems='center'>
                <Box
                    sx={{
                        animation            : 'gradient 16s ease infinite',
                        background           : `linear-gradient(315deg, ${palette.map((color, index) => `${color} ${3 + Math.ceil(index * 90 / palette.length)}%`).join(', ')})`,
                        backgroundSize       : '400%',
                        backgroundAttachment : 'fixed',
                        overflow             : 'hidden',
                    }}
                    width='100%'
                    padding={isDesktopMode ? 8 : 2}
                    position='relative'
                    textAlign='center'>
                    <div className='wave' />
                    <div className='wave' />
                    <div className='wave' />
                    <Container maxWidth='lg'>
                        <Typography
                            paddingX={8}
                            paddingBottom={8}
                            textAlign='center'
                            variant={isDesktopMode ? 'h2' : 'h4'}>
                            {tagLine}
                        </Typography>
                        <SearchInput
                            loading={searching || isPending}
                            hint={searchHint}
                            onSearch={handleSearch} />
                    </Container>
                </Box>
                {!matchedItems && (
                    <Container maxWidth='lg'>
                        <Stack
                            paddingTop={8}
                            display='flex'
                            direction={isDesktopMode ? 'row' : 'column'}
                            alignItems={isDesktopMode ? undefined : 'center'}
                            textAlign={isDesktopMode ? undefined : 'center'}>
                            <Box flexGrow={1}>
                                <Typography
                                    gutterBottom
                                    paddingTop={2}
                                    color={product === 'win/packages' ? 'info.main' : product === 'mac/packages' ? 'primary' : 'secondary'}
                                    variant='h4'>
                                    {title}
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {description}
                                </Typography>
                            </Box>
                            <Box
                                marginRight={isDesktopMode ? -4 : 0}
                                textAlign='left'>
                                <Terminal commands={commands} />
                            </Box>
                        </Stack>
                    </Container>
                )}
                <Container maxWidth='lg'>
                    {matchedItems && matchedItems.length > 0 && (
                        <GridView sx={{
                            paddingTop : 4,
                        }}>
                            {matchedItems.map(renderCatalogueItem)}
                        </GridView>
                    )}
                    {!searching && matchedItems && matchedItems.length === 0 && (
                        <Box
                            width='100%'
                            alignItems='center'>
                            <EmptyState>
                                <Typography
                                    paddingTop={8}
                                    variant='h5'>
                                    {t('error.no_results')}
                                </Typography>
                            </EmptyState>
                        </Box>
                    )}
                    {!matchedItems && suggestedItems && categories.map(category => (
                        <SectionedGridView
                            sx={{
                                paddingY : 4,
                            }}
                            key={category}
                            paddingTop={4}
                            color={product === 'win/packages' ? 'info.main' : product === 'mac/packages' ? 'primary' : 'secondary'}
                            title={category}>
                            {suggestedItems.filter(item => item.category === category).map(renderCatalogueItem)}
                        </SectionedGridView>
                    ))}
                </Container>
            </Stack>
            <Loading show={!suggestedItems && !downloadedItems}>
                <Typography color={theme => theme.palette.common.white}>
                    {loadingMessage}
                </Typography>
            </Loading>
        </>
    );
};
