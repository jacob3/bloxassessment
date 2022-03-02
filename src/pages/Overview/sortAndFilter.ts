import { OverviewSortingTypesEnum } from '../../types/overviewSortingTypesEnum';
import { CoinType } from '../../types/coin';
import _ from 'lodash';
import { setSorting } from '../../store/actions/overviewActions';
import { Dispatch } from 'redux';

export const changeSorting = (activeSorting: OverviewSortingTypesEnum | undefined, sortOn: string, dispatch: Dispatch): void => {
    if (sortOn === 'coin') {
        if (!activeSorting || activeSorting === OverviewSortingTypesEnum.COIN_DESC)
            dispatch(setSorting(OverviewSortingTypesEnum.COIN_ASC));
        else dispatch(setSorting(OverviewSortingTypesEnum.COIN_DESC));
    } else if (sortOn === 'price') {
        if (!activeSorting || activeSorting === OverviewSortingTypesEnum.PRICE_DESC)
            dispatch(setSorting(OverviewSortingTypesEnum.PRICE_ASC));
        else dispatch(setSorting(OverviewSortingTypesEnum.PRICE_DESC));
    }
};

export const sortAndFilter = (
    coinList: CoinType[],
    activeSorting: OverviewSortingTypesEnum | undefined,
    searchTerm: string
): CoinType[] => {
    return sort(filter(coinList, searchTerm), activeSorting);
};

const sort = (coinList: CoinType[], activeSorting): CoinType[] => {
    if (activeSorting === OverviewSortingTypesEnum.COIN_ASC) return _.orderBy(coinList, ['shortName'], ['asc']);
    if (activeSorting === OverviewSortingTypesEnum.COIN_DESC) return _.orderBy(coinList, ['shortName'], ['desc']);

    if (activeSorting === OverviewSortingTypesEnum.PRICE_ASC) return _.orderBy(coinList, ['price.amount'], ['asc']);
    if (activeSorting === OverviewSortingTypesEnum.PRICE_DESC) return _.orderBy(coinList, ['price.amount'], ['desc']);

    return coinList;
};

const filter = (coinList: CoinType[], searchTerm: string): CoinType[] => {
    if (searchTerm) {
        return coinList.filter(
            (coin) =>
                coin.shortName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
                coin.longName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        );
    }
    return coinList;
};
