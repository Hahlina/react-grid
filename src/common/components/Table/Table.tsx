import { useState } from 'react';

import { Paper } from '@mui/material';
import {
    Grid,
    PagingPanel,
    Table,
    TableHeaderRow,
    TableRowDetail,
    TableSelection,
    SearchPanel,
    Toolbar
} from '@devexpress/dx-react-grid-material-ui';
import {
    IntegratedPaging,
    IntegratedSelection,
    PagingState,
    RowDetailState,
    SelectionState,
    SearchState,
    IntegratedFiltering
} from '@devexpress/dx-react-grid';

import { RootCell } from 'src/common/components/Cells/RootCell.tsx';
import { HeadCell } from 'src/common/components/THead/HeadCell.tsx';
import { CelSelect } from 'src/common/components/TableSelection/CelSelect.tsx';
import { HeaderSelect } from 'src/common/components/TableSelection/HeadetSelect.tsx';
import { TablePagination } from 'src/common/components/TablePagination/TablePagination.tsx';
import { AdditionInfoTable } from 'src/common/components/AdditionInfoTable/AdditionInfoTable.tsx';
import { AdditionalRow } from 'src/common/components/AdditionInfoTable/AdditionalRow/AdditionalRow.tsx';
import { ToggleCellComponent } from 'src/common/components/Cells/ToggleCellComponent/ToggleCellComponent.tsx';

import { filterPredicate } from 'src/common/utils/filterPredicate.ts';
import { columns, userData } from 'src/common/mock/mockTableData.ts';
import styles from './Table.module.scss';
import { TableSearchInput } from 'src/common/components/TableSearchInput/TableSearchInput.tsx';

export const MyTable = () => {
    const [selection, setSelection] = useState<(string | number)[]>([]);
    const pageSizes = [5, 7, 9, 0];
    const [activePageSize, setActivePageSize] = useState<number>(5);
    const [searchValue, setSearchState] = useState<string>('');
    const tableColumnExtensions: Table.ColumnExtension[] = [
        { columnName: 'amount', align: 'right', width: 70 },
        { columnName: 'edit', align: 'center', width: 150 }
    ];

    const searchingColumnExtensions: IntegratedFiltering.ColumnExtension[] = [
        {
            columnName: 'name',
            predicate: (value, filter, row) => filterPredicate({ value, filter, row })
        },
        {
            columnName: 'user_status',
            predicate: (value, filter, row) => filterPredicate({ value, filter, row })
        }
    ];

    return (
        <div className={styles.TableWrapper}>
            <Paper className={styles.Paper}>
                <Grid columns={columns} rows={userData}>
                    <SearchState value={searchValue} onValueChange={setSearchState} />
                    <PagingState
                        defaultCurrentPage={0}
                        pageSize={activePageSize}
                        onPageSizeChange={setActivePageSize}
                    />
                    <SelectionState selection={selection} onSelectionChange={setSelection} />
                    <RowDetailState />

                    <IntegratedFiltering columnExtensions={searchingColumnExtensions} />
                    <IntegratedPaging />
                    <IntegratedSelection />

                    <Table cellComponent={RootCell} columnExtensions={tableColumnExtensions} />
                    <TableHeaderRow cellComponent={HeadCell} />
                    <Toolbar />
                    <SearchPanel inputComponent={TableSearchInput} />
                    <TableRowDetail
                        toggleCellComponent={ToggleCellComponent}
                        rowComponent={AdditionalRow}
                        contentComponent={AdditionInfoTable}
                    />
                    <TableSelection
                        showSelectAll
                        highlightRow
                        cellComponent={CelSelect}
                        headerCellComponent={HeaderSelect}
                    />
                    <PagingPanel pageSizes={pageSizes} containerComponent={TablePagination} />
                </Grid>
            </Paper>
        </div>
    );
};
