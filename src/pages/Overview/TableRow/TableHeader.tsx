import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { triangleDown, triangleUp } from '../../../common/ts/variables';
import { changeSorting } from '../sortAndFilter';
import classNames from 'classnames';
import classes from './TableRow.scss';
import { OverviewSortingTypesEnum } from '../../../types/overviewSortingTypesEnum';

export type TableHeaderProps = {
    activeSorting?: OverviewSortingTypesEnum;
};

const TableHeader: React.FC<TableHeaderProps> = (props: TableHeaderProps): ReactElement => {
    const { activeSorting } = props;

    const dispatch = useDispatch();

    const renderSortingArrows = (asc, desc) => {
        if (activeSorting == asc) return triangleDown;
        if (activeSorting == desc) return triangleUp;
        return triangleUp + triangleDown;
    };

    const sortOnCoins = () => {
        changeSorting(activeSorting, 'coin', dispatch);
    };

    const sortOnPrice = () => {
        changeSorting(activeSorting, 'price', dispatch);
    };

    return (
        <div className={classNames(classes.coin, classes.header)}>
            <div className={classes.icon} onClick={sortOnCoins}>
                Coin
                {renderSortingArrows(OverviewSortingTypesEnum.COIN_ASC, OverviewSortingTypesEnum.COIN_DESC)}
            </div>
            <div className={classes.shortName} />
            <div className={classes.longName} />
            <div className={classes.priceChangePercentage}>Price change</div>
            <div className={classes.price} onClick={sortOnPrice}>
                Price
                {renderSortingArrows(OverviewSortingTypesEnum.PRICE_ASC, OverviewSortingTypesEnum.PRICE_DESC)}
            </div>
        </div>
    );
};

export default TableHeader;
