import { useState } from 'react';

import { Paper } from '@mui/material';
import { Grid, PagingPanel, Table, TableHeaderRow, TableSelection } from '@devexpress/dx-react-grid-material-ui';
import { IntegratedPaging, IntegratedSelection, PagingState, SelectionState } from '@devexpress/dx-react-grid';

import { RootCell } from 'src/common/components/Cells/RootCell.tsx';
import { HeadCell } from 'src/common/components/THead/HeadCell.tsx';
import { CelSelect } from 'src/common/components/TableSelection/CelSelect.tsx';
import { HeaderSelect } from 'src/common/components/TableSelection/HeadetSelect.tsx';

import { columns, userData } from 'src/common/mock/mockTableData.ts';
import styles from './Table.module.scss';

export const MyTable = () => {
    const [selection, setSelection] = useState<(string | number)[]>([]);
    const tableColumnExtensions: Table.ColumnExtension[] = [
        { columnName: 'amount', align: 'right', width: 70 },
        { columnName: 'edit', align: 'center', width: 150 }
    ];

    return (
        <div className={styles.TableWrapper}>
            <Paper className={styles.Paper}>
                <Grid columns={columns} rows={userData}>
                    <PagingState defaultCurrentPage={0} pageSize={5} />
                    <SelectionState selection={selection} onSelectionChange={setSelection} />
                    <IntegratedPaging />
                    <IntegratedSelection />
                    <Table cellComponent={RootCell} columnExtensions={tableColumnExtensions} />
                    <TableHeaderRow cellComponent={HeadCell} />
                    <TableSelection
                        showSelectAll
                        highlightRow
                        cellComponent={CelSelect}
                        headerCellComponent={HeaderSelect}
                    />
                    <PagingPanel />
                </Grid>
            </Paper>
        </div>
    );
};
