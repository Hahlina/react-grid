import type { FC } from 'react';

import { Table } from '@devexpress/dx-react-grid-material-ui';
import {
    AmountCell,
    NameCell,
    StatusCell,
    PaymentStatusCell,
    EditCell
} from 'src/modules/UsersTable/components/BodyCells';

import { COLUMN_NAME } from 'src/modules/UsersTable/constants';

const CellComponents: Record<string, FC<Table.DataCellProps>> = {
    [COLUMN_NAME.AMOUNT]: AmountCell,
    [COLUMN_NAME.NAME]: NameCell,
    [COLUMN_NAME.USER_STATUS]: StatusCell,
    [COLUMN_NAME.PAYMENT_STATUS]: PaymentStatusCell,
    [COLUMN_NAME.EDIT]: EditCell
};

export const BodyCells: FC<Table.DataCellProps> = ({ column, ...rest }) => {
    const CellComponent = CellComponents[column.name];
    if (CellComponent) {
        return <CellComponent {...{ column, ...rest }} />;
    }
    return <Table.Cell {...{ column, ...rest }} />;
};
