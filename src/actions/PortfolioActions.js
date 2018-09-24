import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
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
} from './ActionTypes';

export const portfolioInitialized = () => {
    return {
        type: PORTFOLIO_INITIALIZED
    };
};

export const initialTransaction = () => {
    return {
        type: INITIAL_TRANSACTION
    };
};

export const changeTransactionCoin = (coin) => {
    return {
        type: CHANGE_TRANSACTION_COIN,
        payload: coin
    };
};

export const changeTransactionAmount = (amount) => {
    return {
        type: CHANGE_TRANSACTION_AMOUNT,
        payload: amount
    };
};

export const changeTransactionJpyRate = (jpy_rate) => {
    return {
        type: CHANGE_TRANSACTION_JPY_RATE,
        payload: jpy_rate
    };
};

export const changeTransactionBtcRate = (btc_rate) => {
    return {
        type: CHANGE_TRANSACTION_BTC_RATE,
        payload: btc_rate
    };
};

export const addTransaction = ({transactionId, date, coin, exchange, transactionType, amount, jpy_rate, btc_rate}) => {
    return (dispatch) => {
        // console.log('Action: addTransaction');
        // _clearStorage();
        const transaction = {transactionId, date, coin, exchange, transactionType, amount, jpy_rate, btc_rate};
        // console.log(transaction);
        _pushTransactionList(transaction).then((result) => {
            console.log(result);
            _getTransactionList();
            dispatch({ type: ADD_TRANSACTION });
            Actions.pop({ refresh: {} });
            // setTimeout(() => {
            //     Actions.refresh();
            // }, 100);
        });
    };
};

export const removeTransaction = ({ transaction_id }) => {
    return (dispatch) => {
        dispatch({ type: REMOVE_TRANSACTION });
    };
};

async function _getTransactionList() {
    let response = await AsyncStorage.getItem('transactions');
    // console.log(JSON.parse(response));
};

async function _setTransactionList(transaction_list) {
    await AsyncStorage.setItem('transactions', JSON.stringify(transaction_list));
    return transaction_list;
};

async function _pushTransactionList(transaction) {
    let transactions = await AsyncStorage.getItem('transactions');
    transactions = JSON.parse(transactions) || [];
    transactions.push(transaction);
    await AsyncStorage.setItem('transactions', JSON.stringify(transactions));
    return transactions;
};

async function _clearStorage() {
    await AsyncStorage.clear((err) => {
        console.log(err);
    });
};
