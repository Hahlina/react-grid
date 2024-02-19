import { FC } from 'react';
import { TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

import { HeaderEditCell } from 'src/common/components/THead/HeaderEditCell/HeaderEditCell.tsx';

export const HeadCell: FC<TableHeaderRow.CellProps> = (props) => {
    const { children } = props;
    if (props.column.name === 'edit') return <HeaderEditCell {...props}>{children}</HeaderEditCell>;
    return <TableHeaderRow.Cell {...props}> {children}</TableHeaderRow.Cell>;
};
