import type { Table } from '@devexpress/dx-react-grid-material-ui';
import { COLUMN_NAME } from 'src/modules/UsersTable/constants';

export const tableColumnExtensions: Table.ColumnExtension[] = [
    { columnName: COLUMN_NAME.AMOUNT, align: 'right', width: 100 },
    { columnName: COLUMN_NAME.EDIT, align: 'center', width: 150 }
];
