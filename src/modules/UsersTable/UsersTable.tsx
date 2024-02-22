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
    IntegratedFiltering,
    IntegratedSorting,
    SortingState
} from '@devexpress/dx-react-grid';
import {
    CellBodyComponent,
    HeaderCellComponent,
    TablePagination,
    TableSearchInput,
    BodyCells,
    ToggleCellComponent,
    AdditionalRow,
    AdditionInfo,
    HeadCells
} from 'src/modules/UsersTable/components';

import {
    columns,
    searchingColumnExtensions,
    tableColumnExtensions,
    sortingColumnExtensions
} from 'src/modules/UsersTable/helpers';
import { userData } from 'src/modules/UsersTable/mock';
import styles from './UsersTable.module.scss';

export const UsersTable = () => {
    const [selection, setSelection] = useState<(string | number)[]>([]);
    const pageSizes = [5, 7, 9, 0];
    const [activePageSize, setActivePageSize] = useState<number>(7);

    return (
        <div className={styles.tableWrapper}>
            <Paper className={styles.paper}>
                <Grid columns={columns} rows={userData}>
                    <SearchState />
                    <PagingState
                        defaultCurrentPage={0}
                        pageSize={activePageSize}
                        onPageSizeChange={setActivePageSize}
                    />
                    <SelectionState selection={selection} onSelectionChange={setSelection} />
                    <RowDetailState />
                    <SortingState />

                    <IntegratedFiltering columnExtensions={searchingColumnExtensions} />
                    <IntegratedPaging />
                    <IntegratedSelection />
                    <IntegratedSorting columnExtensions={sortingColumnExtensions} />

                    <Table cellComponent={BodyCells} columnExtensions={tableColumnExtensions} />
                    <TableHeaderRow cellComponent={HeadCells} showSortingControls />
                    <Toolbar />
                    <SearchPanel inputComponent={TableSearchInput} />
                    <TableRowDetail
                        toggleCellComponent={ToggleCellComponent}
                        rowComponent={AdditionalRow}
                        contentComponent={AdditionInfo}
                    />
                    <TableSelection
                        showSelectAll
                        highlightRow
                        cellComponent={CellBodyComponent}
                        headerCellComponent={HeaderCellComponent}
                    />
                    <PagingPanel pageSizes={pageSizes} containerComponent={TablePagination} />
                </Grid>
            </Paper>
        </div>
    );
};
