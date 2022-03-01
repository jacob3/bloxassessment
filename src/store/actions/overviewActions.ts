import * as types from './types/overviewActionsTypes';
import * as actionTypes from '../actionTypes';
import { CoinType } from '../../types/coin';

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
