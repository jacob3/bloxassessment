import { CoinType } from './coin';
import { OverviewSortingTypesEnum } from './overviewSortingTypesEnum';

export type OverviewReducerState = {
    coins: CoinType[];
    isLoading: boolean;
    activeSorting: OverviewSortingTypesEnum | undefined;
};
