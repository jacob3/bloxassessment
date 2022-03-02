import * as types from './types/overviewActionsTypes';
import * as actionTypes from '../actionTypes';
import { CoinType } from '../../types/coin';
import { OverviewSortingTypesEnum } from '../../types/overviewSortingTypesEnum';

export const setStartloadingCoins = (): types.SetStartLoadingCoins => {
    return {
        type: actionTypes.SET_START_LOADING_COINS
    };
};

export const getAllCoins = (): types.GetAllCoins => {
    return {
        type: actionTypes.GET_ALL_COINS
    };
};

export const setAllCoins = (coins: CoinType[]): types.SetAllCoins => {
    return {
        type: actionTypes.SET_ALL_COINS,
        coins
    };
};

export const setSorting = (sorting: OverviewSortingTypesEnum): types.SetSorting => {
    return {
        type: actionTypes.SET_SORTING,
        sorting
    };
};

export const setError = (error: boolean): types.SetError => {
    return {
        type: actionTypes.SET_ERROR,
        error
    };
};
