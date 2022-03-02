import * as actionTypes from '../../actionTypes';
import { CoinType } from '../../../types/coin';
import { OverviewSortingTypesEnum } from '../../../types/overviewSortingTypesEnum';

export type SetStartLoadingCoins = {
    type: typeof actionTypes.SET_START_LOADING_COINS;
};

export type GetAllCoins = {
    type: typeof actionTypes.GET_ALL_COINS;
};

export type SetAllCoins = {
    type: typeof actionTypes.SET_ALL_COINS;
    coins: CoinType[];
};

export type SetSorting = {
    type: typeof actionTypes.SET_SORTING;
    sorting: OverviewSortingTypesEnum;
};

export type SetError = {
    type: typeof actionTypes.SET_ERROR;
    error: boolean;
};
