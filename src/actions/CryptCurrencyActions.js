import { Actions } from 'react-native-router-flux';
import {
    PRICE_INITIALIZED,
    COIN_PRICE_CHANGED,
    JPY_PRICE_CHANGED,
    BTC_PRICE_CHANGED
} from './ActionTypes';

export const priceInitialized = () => {
    return {
        type: PRICE_INITIALIZED
    };
};

export const coinPriceChanged = (price) => {
    return {
        type: COIN_PRICE_CHANGED,
        payload: price
    };
};

export const jpyPriceChanged = (price) => {
    return {
        type: JPY_PRICE_CHANGED,
        payload: price
    }
};

export const btcPriceChanged = (price) => {
    return {
        type: BTC_PRICE_CHANGED,
        payload: price
    }
};
