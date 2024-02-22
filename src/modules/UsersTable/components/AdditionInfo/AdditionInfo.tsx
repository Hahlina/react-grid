import { type FC } from 'react';

import { Grid, Table, TableHeaderRow, TableRowDetail } from '@devexpress/dx-react-grid-material-ui';
import { NoDataDetail } from 'src/modules/UsersTable/components';

import { detailColumns, aditionalInfoColumnExtensions } from 'src/modules/UsersTable/helpers';

export const AdditionInfo: FC<TableRowDetail.ContentProps> = ({ row }) => (
    <Grid columns={detailColumns} rows={row?.detail || []}>
        <Table columnExtensions={aditionalInfoColumnExtensions} noDataRowComponent={NoDataDetail} />
        <TableHeaderRow />
    </Grid>
);
