import { OverviewReducerState } from '../../types/overviewReducerType';
import * as actionTypes from '../actionTypes';
import * as types from '../actions/types/overviewActionsTypes';

const initialState: OverviewReducerState = {
    coins: [],
    isLoading: false,
    activeSorting: undefined
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
        isLoading: false
    };
};

const setSorting = (state: OverviewReducerState, action: types.SetSorting): OverviewReducerState => {
    return {
        ...state,
        activeSorting: action.sorting
    };
};

const reducer = (
    state = initialState,
    action: types.SetStartLoadingCoins | types.SetAllCoins | types.SetSorting
): OverviewReducerState => {
    switch (action.type) {
        case actionTypes.SET_START_LOADING_COINS:
            return setStartLoading(state);
        case actionTypes.SET_ALL_COINS:
            return setAllCoins(state, action);
        case actionTypes.SET_SORTING:
            return setSorting(state, action);
        default:
            return state;
    }
};

export default reducer;
