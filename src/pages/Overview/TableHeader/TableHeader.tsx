import React, { ReactElement } from 'react';
import classes from './TableHeader.scss';

const TableHeader: React.FC = (): ReactElement => {
    return (
        <div className={classes.coin}>
            <div className={classes.coinSort}>Coin</div>
            <div className={classes.priceChangePercentage}>Price change</div>
            <div className={classes.price}>Price</div>
        </div>
    );
};

export default TableHeader;
