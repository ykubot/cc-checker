import {
    PRICE_INITIALIZED,
    COIN_PRICE_CHANGED,
    JPY_PRICE_CHANGED,
    BTC_PRICE_CHANGED
} from '../actions/ActionTypes';

const INITIAL_STATE = {
    coin_price: '',
    jpy_price: '',
    btc_price: ''
};

export default (state = INITIAL_STATE, action) => {
    // console.log(action);
    switch (action.type) {
        case PRICE_INITIALIZED:
            return INITIAL_STATE;
        case COIN_PRICE_CHANGED:
            return { ...state, coin_price: action.payload };
        case JPY_PRICE_CHANGED:
            return { ...state, jpy_price: action.payload };
        case BTC_PRICE_CHANGED:
            return { ...state, btc_price: action.payload };
        default:
            return state;
    }
};
