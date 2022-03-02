import React, { ReactElement } from 'react';
import classes from './TableRow.scss';
import Skeleton from 'react-loading-skeleton';
import classNames from 'classnames';

const TableLoadingItem: React.FC = (): ReactElement => {
    return (
        <div className={classNames(classes.coin, classes.loadingItem)}>
            <div className={classes.icon}>
                <Skeleton width={40} height={40} circle={true} className={classes.skeleton} />
            </div>
            <div className={classes.shortName}>
                <Skeleton className={classes.skeleton} />
            </div>
            <div className={classes.longName}>
                <Skeleton className={classes.skeleton} />
            </div>
            <div className={classes.priceChangePercentage}>
                <Skeleton className={classes.skeleton} />
            </div>
            <div className={classes.price}>
                <Skeleton className={classes.skeleton} />
            </div>
        </div>
    );
};

export default TableLoadingItem;
