import { CoinType } from './coin';

export type OverviewReducerState = {
    coins: CoinType[];
    isLoading: boolean;
};
