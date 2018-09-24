import {
    PORTFOLIO_INITIALIZED,
    ADD_TRANSACTION,
    REMOVE_TRANSACTION
} from '../actions/ActionTypes';

const INITIAL_STATE = {
    name: '',
    transactions: []
};

export default (state = INITIAL_STATE, action) => {
    // console.log(action);
    switch (action.type) {
        case ADD_TRANSACTION:
            return INITIAL_STATE;
        case REMOVE_TRANSACTION:
            return INITIAL_STATE;
        default:
            return state;
    }
};
