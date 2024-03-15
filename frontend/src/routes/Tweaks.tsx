import Settings from '@mui/icons-material/Settings';
import type { SearchResult, } from 'minisearch';
import React, { useCallback, useEffect, useRef, useState, } from 'react';
import { useTranslation, } from 'react-i18next';

import { useTweaksQuery, } from '../apis';
import { MaterialButton, } from '../components/Button';
import { Catalogue, CatalogueItem, } from '../components/Catalogue';
import { TweakDetailsView, } from '../components/DetailsView';
import { SPELL_COMMANDS, TWEAKS_REFRESH_INTERVAL, TWEAK_CATEGORIES, } from '../constants';
import { useAppDispatch, useAppSelector, } from '../hooks';
import type { Tweak, } from '../models';
import { addTweak, removeTweak, updateTweak, } from '../states';
import { handleError, } from '../utils';

export const Tweaks = () => {
    const [ cachedTweaks, setCachedTweaks, ] = useState<Tweak[] | undefined>();

    const { tweaks, } : { tweaks : Tweak[], } = useAppSelector(state => state.spell);

    const { data : suggestedTweaks, error, } = useTweaksQuery(undefined, {
        pollingInterval : TWEAKS_REFRESH_INTERVAL,
        skip            : cachedTweaks !== undefined,
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
        parameters  : result.parameters,
        types       : result.types,
        values      : result.values,
        impact      : result.impact,
        privileged  : result.privileged,
        sipInvolved : result.sipInvolved,
    }), []);

    const handleSelectionChange = useCallback((tweak : Tweak, selected : boolean) => dispatch(selected ? addTweak(tweak) : removeTweak(tweak)), [ dispatch, ]);

    const TweakView = ({
        tweak,
    } : {
        tweak : Tweak,
    }) => {
        const tweakRef = useRef({
            ...tweak,
            values : {
                ...tweak.values,
            },
        });

        const isSelected = tweaks.some(item => item.id === tweakRef.current.id);

        const handleValueChange = (parameter : string, value? : boolean | number | string) => {
            if (value) tweakRef.current.values[tweakRef.current.parameters.indexOf(parameter)] = value;
        };

        const handleSubmit = () => {
            if (cachedTweaks) {
                const newCachedTweaks = [
                    ...cachedTweaks,
                ];

                newCachedTweaks[newCachedTweaks.findIndex(cachedTweak => cachedTweak.id === tweakRef.current.id)] = tweakRef.current;

                setCachedTweaks(newCachedTweaks);
            }

            if (tweaks.some(selectedTweak => selectedTweak.id === tweakRef.current.id)) dispatch(updateTweak(tweakRef.current));
        };

        useEffect(() => {
            tweakRef.current = {
                ...tweak,
                values : {
                    ...tweak.values,
                },
            };
        }, [ tweak, ]);

        return (
            <CatalogueItem
                selected={isSelected}
                item={tweakRef.current}
                detailsView={
                    <TweakDetailsView
                        description={tweakRef.current.description}
                        infoUrl={tweakRef.current.infoUrl}
                        source={tweakRef.current.author ?? ''}
                        parameters={tweakRef.current.parameters}
                        types={tweakRef.current.types}
                        values={tweakRef.current.values}
                        onChange={handleValueChange} />
                }
                dialogAction={
                    <MaterialButton
                        color='secondary'
                        variant='contained'
                        onClick={handleSubmit}>
                        {t('action.save')}
                    </MaterialButton>
                }
                actionText={isSelected ? t('action.configure') : undefined}
                actionIcon={isSelected ? <Settings /> : undefined}
                onSelectionChange={handleSelectionChange} />
        );
    };

    const renderCatalogueItem = (tweak : Tweak) => (
        <TweakView
            key={tweak.id}
            tweak={tweak} />
    );

    useEffect(() => {
        if (suggestedTweaks) setCachedTweaks(suggestedTweaks);
    }, [ suggestedTweaks, ]);

    useEffect(() => {
        if (error) {
            if ('status' in error && (error.status === 404 || error.status === 'FETCH_ERROR' || error.status === 'TIMEOUT_ERROR')) {
                console.error(error);
            } else {
                handleError(error);
            }
        }
    }, [ error, ]);

    return (
        <Catalogue
            suggestedItems={cachedTweaks}
            downloadedItems={cachedTweaks}
            tagLine={t('tweaks.tagline')}
            searchHint={t('tweaks.search.hint')}
            title={t('tweaks.about.title')}
            description={t('tweaks.about.description')}
            commands={SPELL_COMMANDS}
            categories={TWEAK_CATEGORIES}
            itemFields={[
                'id',
                'name',
                'description',
                'imageUrl',
                'infoUrl',
                'author',
                'parameters',
                'types',
                'values',
                'impact',
                'privileged',
                'sipInvolved',
            ]}
            loadingMessage={t('tweaks.loading')}
            renderCatalogueItem={renderCatalogueItem}
            searchResultMapper={searchResultMapper}
        />
    );
};
