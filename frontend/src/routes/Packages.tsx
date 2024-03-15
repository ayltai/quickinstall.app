import type { SerializedError, } from '@reduxjs/toolkit';
import type { FetchBaseQueryError, } from '@reduxjs/toolkit/query';
import type { SearchResult, } from 'minisearch';
import React, { useCallback, useEffect, useState, } from 'react';
import { useTranslation, } from 'react-i18next';
import { useParams, } from 'react-router-dom';

import { useCaskQuery, useFormulaQuery, useIngredientsQuery, useSearchQuery, useSearchChocoQuery, } from '../apis';
import { Catalogue, CatalogueItem, } from '../components/Catalogue';
import { DetailsView, } from '../components/DetailsView';
import { HOMEBREW_REFRESH_INTERVAL, INGREDIENT_CATEGORIES, MIN_SEARCH_LENGTH, RECIPE_COMMANDS, } from '../constants';
import { useAppDispatch, useAppSelector, } from '../hooks';
import type { Ingredient, } from '../models';
import { addIngredient, removeIngredient, } from '../states';
import { handleError, } from '../utils';

export const Packages = () => {
    const { platform, } = useParams();

    const [ query,                 setQuery,                 ] = useState('');
    const [ downloadedIngredients, setDownloadedIngredients, ] = useState<Ingredient[]>([]);

    const { product, } : { product : 'win/packages' | 'mac/packages' | 'tweaks', } = useAppSelector(state => state.preference);

    const { ingredients, } : { ingredients : Ingredient[], } = useAppSelector(state => state.recipe);

    const { data : suggestedIngredients, error : ingredientsError, } = useIngredientsQuery(undefined, {
        pollingInterval : HOMEBREW_REFRESH_INTERVAL,
    });

    const { data : caskData, error : caskError, } = useCaskQuery(undefined, {
        skip            : platform === 'win',
        pollingInterval : HOMEBREW_REFRESH_INTERVAL,
    });

    const { data : formulaData, error : formulaError, } = useFormulaQuery(undefined, {
        skip            : platform === 'win',
        pollingInterval : HOMEBREW_REFRESH_INTERVAL,
    });

    const { data : searchData, error : searchError, isFetching : searchFetching, isLoading : searchLoading, } = useSearchQuery(query, {
        skip : platform === 'win' || query.length < MIN_SEARCH_LENGTH,
    });

    const { data : chocoData, error : chocoError, isFetching : chocoFetching, isLoading : chocoLoading, } = useSearchChocoQuery(query, {
        skip : platform === 'mac' || query.length < MIN_SEARCH_LENGTH,
    });

    const dispatch = useAppDispatch();

    const { t, } = useTranslation();

    const searchResultMapper = useCallback((result : SearchResult) => ({
        id          : result.id,
        name        : result.name,
        description : result.description,
        imageUrl    : result.imageUrl,
        infoUrl     : result.infoUrl,
        author      : result.author,
        source      : result.source,
    }), []);

    const handleSearch = (keywords? : string) => setQuery(keywords ?? '');

    const handleSelectionChange = useCallback((ingredient : Ingredient, selected : boolean) => dispatch(selected ? addIngredient(ingredient) : removeIngredient(ingredient)), [ dispatch, ]);

    const renderCatalogueItem = useCallback((ingredient : Ingredient) => (
        <CatalogueItem
            key={ingredient.id}
            selected={ingredients.some(item => item.id === ingredient.id)}
            item={ingredient}
            detailsView={
                <DetailsView
                    color={product === 'win/packages' ? 'info' : 'primary'}
                    description={ingredient.description}
                    infoUrl={ingredient.infoUrl}
                    source={ingredient.source} />
            }
            onSelectionChange={handleSelectionChange} />
    ), [ product, handleSelectionChange, ingredients, ]);

    const handleApiError = useCallback((error? : FetchBaseQueryError | SerializedError) => {
        if (error) {
            if ('status' in error && (error.status === 404 || error.status === 'FETCH_ERROR' || error.status === 'TIMEOUT_ERROR')) {
                console.error(error);
            } else {
                handleError(error);
            }
        }
    }, []);

    useEffect(() => {
        const newDownloadedIngredients : Ingredient[] = [];

        if (caskData) newDownloadedIngredients.push(...caskData.map(item => ({
            ...item,
            id : `${item.source}/${item.id}`,
        })));

        if (formulaData) newDownloadedIngredients.push(...formulaData.map(item => ({
            ...item,
            id : `${item.source}/${item.id}`,
        })));

        if (searchData) newDownloadedIngredients.push(...searchData.map(item => ({
            ...item,
            id : `${item.source}/${item.id}`,
        })));

        if (chocoData) newDownloadedIngredients.push(...chocoData.map(item => ({
            ...item,
            id : `${item.source}/${item.id}`,
        })));

        setDownloadedIngredients(newDownloadedIngredients);
    }, [ caskData, formulaData, searchData, chocoData, ]);

    useEffect(() => {
        handleApiError(ingredientsError);
        handleApiError(caskError);
        handleApiError(formulaError);
        handleApiError(searchError);
        handleApiError(chocoError);
    }, [ handleApiError, ingredientsError, caskError, formulaError, searchError, chocoError, ]);

    return (
        <Catalogue
            searching={searchFetching || searchLoading || chocoFetching || chocoLoading}
            suggestedItems={(suggestedIngredients ?? []).filter(ingredient => platform === 'win' ? ingredient.source === 'Chocolatey' : ingredient.source === 'Homebrew' || ingredient.source === 'Homebrew (Cask)' || ingredient.source === 'App Store')}
            downloadedItems={downloadedIngredients}
            tagLine={product === 'win/packages' ? t('packages.tagline.win') : t('packages.tagline.mac')}
            searchHint={t('packages.search.hint')}
            title={t('packages.about.title')}
            description={product === 'win/packages' ? t('packages.about.description.win') : t('packages.about.description.mac')}
            commands={RECIPE_COMMANDS}
            categories={INGREDIENT_CATEGORIES}
            itemFields={[
                'id',
                'name',
                'description',
                'imageUrl',
                'infoUrl',
                'author',
                'source',
            ]}
            loadingMessage={t('packages.loading')}
            renderCatalogueItem={renderCatalogueItem}
            searchResultMapper={searchResultMapper}
            onSearch={handleSearch} />
    );
};
