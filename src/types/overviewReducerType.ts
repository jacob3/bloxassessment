import { CoinType } from './coin';
import { OverviewSortingTypesEnum } from './overviewSortingTypesEnum';

export type OverviewReducerState = {
    coins: CoinType[];
    activeSorting: OverviewSortingTypesEnum | undefined;
    initialized: boolean;
    isLoading: boolean;
    error: boolean;
};
