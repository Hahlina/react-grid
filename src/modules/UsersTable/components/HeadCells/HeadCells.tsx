import type { FC } from 'react';

import { TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import { HeaderEditCell } from 'src/modules/UsersTable/components';
import { COLUMN_NAME } from 'src/modules/UsersTable/constants';

export const HeadCells: FC<TableHeaderRow.CellProps> = (props) => {
    const { children } = props;
    if (props.column.name === COLUMN_NAME.EDIT) return <HeaderEditCell {...props}>{children}</HeaderEditCell>;
    return <TableHeaderRow.Cell {...props}> {children}</TableHeaderRow.Cell>;
};
