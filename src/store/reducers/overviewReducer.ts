import { OverviewReducerState } from '../../types/overviewReducerType';
import * as actionTypes from '../actionTypes';
import * as types from '../actions/types/overviewActionsTypes';

const initialState: OverviewReducerState = {
    coins: [],
    activeSorting: undefined,
    initialized: false,
    isLoading: false,
    error: false
};

const setStartLoading = (state: OverviewReducerState): OverviewReducerState => {
    return {
        ...state,
        isLoading: true
    };
};

const setAllCoins = (state: OverviewReducerState, action: types.SetAllCoins): OverviewReducerState => {
    return {
        ...state,
        coins: action.coins,
        initialized: true,
        isLoading: false
    };
};

const setSorting = (state: OverviewReducerState, action: types.SetSorting): OverviewReducerState => {
    return {
        ...state,
        activeSorting: action.sorting
    };
};

const setError = (state: OverviewReducerState, action: types.SetError): OverviewReducerState => {
    return {
        ...state,
        isLoading: false,
        error: action.error
    };
};

const reducer = (
    state = initialState,
    action: types.SetStartLoadingCoins | types.SetAllCoins | types.SetSorting | types.SetError
): OverviewReducerState => {
    switch (action.type) {
        case actionTypes.SET_START_LOADING_COINS:
            return setStartLoading(state);
        case actionTypes.SET_ALL_COINS:
            return setAllCoins(state, action);
        case actionTypes.SET_SORTING:
            return setSorting(state, action);
        case actionTypes.SET_ERROR:
            return setError(state, action);
        default:
            return state;
    }
};

export default reducer;
