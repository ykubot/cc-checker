import {
    PORTFOLIO_INITIALIZED,
    ADD_TRANSACTION,
    INITIAL_TRANSACTION,
    CHANGE_TRANSACTION_AMOUNT,
    CHANGE_TRANSACTION_COIN,
    CHANGE_TRANSACTION_TYPE,
    CHANGE_TRANSACTION_JPY_RATE,
    CHANGE_TRANSACTION_BTC_RATE,
    REMOVE_TRANSACTION
} from '../actions/ActionTypes';
import { createTimestamp } from '../utils/Date';

const INITIAL_STATE = {
    transactionId: '',
    date: createTimestamp(),
    selectedCoin: 'btc',
    exchange: 'Coincheck',
    transactionType: '',
    amount: null,
    jpy_rate: 0,
    btc_rate: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            return INITIAL_STATE;
        case INITIAL_TRANSACTION:
            return INITIAL_STATE;
        case CHANGE_TRANSACTION_COIN:
            return { ...state, selectedCoin: action.payload };
        case CHANGE_TRANSACTION_AMOUNT:
            return { ...state, amount: action.payload };
        case CHANGE_TRANSACTION_JPY_RATE:
            return { ...state, jpy_rate: action.payload };
        case CHANGE_TRANSACTION_BTC_RATE:
            return { ...state, btc_rate: action.payload };
        case REMOVE_TRANSACTION:
            return INITIAL_STATE;
        default:
            return state;
    }
};
