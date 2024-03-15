import * as Sentry from '@sentry/react';
import { FirebaseApp, } from 'firebase/app';
import { getAnalytics, logEvent, } from 'firebase/analytics';

export const handleError = (error : any) => {
    if (import.meta.env.PROD) {
        Sentry.captureException(error);
    } else {
        console.error(error);
    }
};

export const logPageView = (app : FirebaseApp, {
    pageName,
    route,
} : {
    pageName : string,
    route    : string,
}) => {
    try {
        logEvent(getAnalytics(app), 'page_view', {
            page_title    : pageName,
            page_location : route,
        });
    } catch (error) {
        handleError(error);
    }
};

export const logAddToCart = (app : FirebaseApp, {
    platform,
    itemId,
} : {
    platform : 'win' | 'mac',
    itemId   : string,
}) => {
    try {
        logEvent(getAnalytics(app), 'add_to_cart', {
            items : [
                {
                    item_id : `${platform}/${itemId}`,
                },
            ],
        });
    } catch (error) {
        handleError(error);
    }
};

export const logRemoveFromCart = (app : FirebaseApp, {
    platform,
    itemId,
} : {
    platform : 'win' | 'mac',
    itemId   : string,
}) => {
    try {
        logEvent(getAnalytics(app), 'remove_from_cart', {
            items : [
                {
                    item_id : `${platform}/${itemId}`,
                },
            ],
        });
    } catch (error) {
        handleError(error);
    }
};

export const logCheckout = (app : FirebaseApp, {
    platform,
    itemIds,
} : {
    platform : 'win' | 'mac',
    itemIds  : string[],
}) => {
    try {
        logEvent(getAnalytics(app), 'checkout', {
            items : itemIds.map((itemId : string) => ({
                item_id : `${platform}/${itemId}`,
            })),
        });
    } catch (error) {
        handleError(error);
    }
};

export const logSearch = (app : FirebaseApp, {
    platform,
    query,
} : {
    platform : 'win' | 'mac',
    query    : string,
}) => {
    try {
        logEvent(getAnalytics(app), 'search', {
            search_term : `${platform}/${query}`,
        });
    } catch (error) {
        handleError(error);
    }
};

export const logShare = (app : FirebaseApp, {
    product,
    itemId,
} : {
    product : 'win/packages' | 'mac/packages' | 'tweaks',
    itemId  : string,
}) => {
    try {
        logEvent(getAnalytics(app), 'share', {
            content_type : product,
            item_id      : itemId,
        });
    } catch (error) {
        handleError(error);
    }
};
