import React, { ReactElement, useEffect, useState } from 'react';
import { RootState } from '../../store/storeSetup';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoins, setStartloadingCoins } from '../../store/actions/overviewActions';
import classes from './Overview.scss';
import { CoinType } from '../../types/coin';
import TableRow from './TableRow/TableRow';
import SearchField from './SearchField/SearchField';
import { sortAndFilter } from './sortAndFilter';

const Overview: React.FC = (): ReactElement => {
    const { coins, activeSorting, isLoading } = useSelector((state: RootState) => state.overview);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredAndSortedCoins, setFilteredAndSortedCoins] = useState(coins);

    useEffect(() => {
        dispatch(setStartloadingCoins());
        const loadingTimer = setTimeout(() => dispatch(getAllCoins()), 1000); // this timer is totally unnecessary, but since the API is so damn fast and I want to show off with my React skills and skeleton loading screen, it's there :)
        return () => clearTimeout(loadingTimer);
    }, []);

    useEffect(() => {
        setFilteredAndSortedCoins(sortAndFilter(coins, activeSorting, searchTerm));
    }, [coins, activeSorting, searchTerm]);

    return (
        <div className={classes.container}>
            <SearchField onChange={(q) => setSearchTerm(q)} isLoading={isLoading} />
            <div className="coins">
                <TableRow isLoading={isLoading} activeSorting={activeSorting} />
                {filteredAndSortedCoins.map((coin: CoinType) => (
                    <TableRow key={coin.shortName} coin={coin} />
                ))}
            </div>
        </div>
    );
};

export default Overview;
