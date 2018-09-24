import { combineReducers } from 'redux';
import CryptCurrencyReducer from './CryptCurrencyReducer';
import PortfolioReducer from './PortfolioReducer';
import AddTransactionModalReducer from './AddTransactionModalReducer';

export default combineReducers({
    cryptCurrency: CryptCurrencyReducer,
    portfolio: PortfolioReducer,
    transaction: AddTransactionModalReducer
});
