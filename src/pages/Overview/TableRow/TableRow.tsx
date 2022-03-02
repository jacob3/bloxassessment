import React, { ReactElement } from 'react';
import { CoinType } from '../../../types/coin';
import { OverviewSortingTypesEnum } from '../../../types/overviewSortingTypesEnum';
import TableItem from './TableItem';
import TableHeader from './TableHeader';
import TableLoadingItem from './TableLoadingItem';

export type TableRowProps = {
    coin?: CoinType;
    activeSorting?: OverviewSortingTypesEnum;
    isLoading?: boolean;
};

const TableRow: React.FC<TableRowProps> = (props: TableRowProps): ReactElement => {
    if (props.isLoading) {
        return (
            <>
                {/* Show 5 skeleton items */}
                {[...Array(5).keys()].map((e) => (
                    <TableLoadingItem key={e} />
                ))}
            </>
        );
    }
    return props.coin ? <TableItem coin={props.coin} /> : <TableHeader activeSorting={props.activeSorting} />;
};

export default TableRow;
