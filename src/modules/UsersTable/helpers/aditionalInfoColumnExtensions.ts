import { Table } from '@devexpress/dx-react-grid-material-ui';

export const aditionalInfoColumnExtensions: Table.ColumnExtension[] = [
    { columnName: 'date' },
    { columnName: 'user_activity', wordWrapEnabled: true },
    { columnName: 'detail_activity', wordWrapEnabled: true }
];
