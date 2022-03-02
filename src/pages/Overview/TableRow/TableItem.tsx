import React, { ReactElement } from 'react';
import classes from './TableRow.scss';
import classNames from 'classnames';
import { triangleDown, triangleUp } from '../../../common/ts/variables';
import { CoinType } from '../../../types/coin';

export type TableItemProps = {
    coin: CoinType;
};

const TableItem: React.FC<TableItemProps> = (props: TableItemProps): ReactElement => {
    const { icon, shortName, longName, priceChangePercentage, price } = props.coin;

    const positivePricePercentage = priceChangePercentage > 0;
    const negativePricePercentage = priceChangePercentage < 0;

    return (
        <div className={classes.coin}>
            <img className={classes.icon} src={icon} alt={shortName} />
            <div className={classes.shortName}>
                {shortName}
                <div className={classes.mobileLongName}>{longName}</div>
            </div>
            <div className={classes.longName}>{longName}</div>
            <div
                className={classNames(
                    classes.priceChangePercentage,
                    positivePricePercentage && classes.green,
                    negativePricePercentage && classes.red
                )}
            >
                {positivePricePercentage && triangleUp}
                {negativePricePercentage && triangleDown}
                {Intl.NumberFormat('nl', {
                    style: 'percent',
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 2
                }).format(priceChangePercentage / 100)}
            </div>
            <div className={classes.price}>
                {Intl.NumberFormat('nl', {
                    style: 'currency',
                    currency: price.unit
                }).format(price.amount)}
            </div>
        </div>
    );
};

export default TableItem;
