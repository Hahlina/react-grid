import { FC, useState } from 'react';
import { Grid, Table, TableHeaderRow, TableRowDetail } from '@devexpress/dx-react-grid-material-ui';
import { NoDataDetail } from 'src/common/components/AdditionInfoTable/NoDataDetail/NoDataDetail.tsx';

import { detailColumns } from 'src/common/mock/mockTableData.ts';
import styles from './AdditionInfoTable.module.scss';

export const AdditionInfoTable: FC<TableRowDetail.ContentProps> = ({ row }) => {
    const [tableColumnExtensions] = useState<Table.ColumnExtension[]>([
        { columnName: 'date' },
        { columnName: 'user_activity', wordWrapEnabled: true },
        { columnName: 'detail_activity', wordWrapEnabled: true }
    ]);

    return (
        <div className={styles.wrapper}>
            <Grid columns={detailColumns} rows={row?.detail || []}>
                <Table columnExtensions={tableColumnExtensions} noDataRowComponent={NoDataDetail} />
                <TableHeaderRow />
            </Grid>
        </div>
    );
};
