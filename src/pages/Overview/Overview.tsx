import React, { ReactElement, useEffect, useState } from 'react';
import { RootState } from '../../store/storeSetup';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoins, setStartloadingCoins } from '../../store/actions/overviewActions';
import classes from './Overview.scss';
import { CoinType } from '../../types/coin';
import TableRow from './TableRow/TableRow';
import SearchField from './SearchField/SearchField';
import { sortAndFilter } from './sortAndFilter';
import { setToasterText } from '../../store/actions/toasterActions';
import { ToasterTypesEnum } from '../../types/toasterReducerType';

const Overview: React.FC = (): ReactElement => {
    const { coins, activeSorting, initialized, isLoading, error } = useSelector((state: RootState) => state.overview);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredAndSortedCoins, setFilteredAndSortedCoins] = useState(coins);
    const [timer, setTimer] = useState(true);

    useEffect(() => {
        const refreshTimer = setInterval(() => {
            dispatch(setToasterText(ToasterTypesEnum.INFORMATION, 'Refreshing...'));
            setTimer(true);
        }, 15000);
        return () => {
            clearInterval(refreshTimer);
        };
    }, []);

    useEffect(() => {
        dispatch(setStartloadingCoins());
        const loadingTimer = setTimeout(() => dispatch(getAllCoins()), 1000); // this timer is totally unnecessary, but since the API is so damn fast and I want to show off with my React skills and skeleton loading screen, it's there :)
        setTimer(false);
        return () => {
            clearTimeout(loadingTimer);
        };
    }, [timer]);

    useEffect(() => {
        setFilteredAndSortedCoins(sortAndFilter(coins, activeSorting, searchTerm));
    }, [coins, activeSorting, searchTerm]);

    return !initialized && error ? (
        <div className={classes.error}>
            <p>
                The API can not be fetched right now.
                <br />
                <br />
                <span>
                    {isLoading ? (
                        'Loading...'
                    ) : (
                        <>
                            <a
                                href="#"
                                onClick={() => {
                                    dispatch(getAllCoins());
                                }}
                            >
                                Click here to try again
                            </a>{' '}
                            or wait 15 seconds.
                        </>
                    )}
                </span>
            </p>
        </div>
    ) : (
        <div className={classes.container}>
            <>
                <SearchField onChange={(q) => setSearchTerm(q)} isLoading={!initialized && isLoading} />
                <div className="coins">
                    <TableRow isLoading={!initialized && isLoading} activeSorting={activeSorting} />
                    {filteredAndSortedCoins.map((coin: CoinType) => (
                        <TableRow key={coin.shortName} coin={coin} />
                    ))}
                </div>
            </>
        </div>
    );
};

export default Overview;
