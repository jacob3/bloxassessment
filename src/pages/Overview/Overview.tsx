import React, { ReactElement, useEffect } from 'react';
import { RootState } from '../../store/storeSetup';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoins } from '../../store/actions/overviewActions';
import classes from './Overview.scss';
import { CoinType } from '../../types/coin';
import TableItem from './TableItem/TableItem';
import TableHeader from './TableHeader/TableHeader';

const Overview: React.FC = (): ReactElement => {
    // todo: Loading screen
    // todo: Design
    // todo: flex design (table) is with preset pixel width per column - should be changed

    const { isLoading, coins } = useSelector((state: RootState) => state.overview);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCoins());
    }, []);

    return (
        <div className={classes.container}>
            {isLoading && <div>loading...</div>}
            <div className="coins">
                <TableHeader />
                {coins.map((coin: CoinType) => (
                    <TableItem key={coin.shortName} coin={coin} />
                ))}
            </div>
        </div>
    );
};

export default Overview;
