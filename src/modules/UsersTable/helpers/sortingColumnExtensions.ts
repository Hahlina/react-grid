import { IntegratedSorting } from '@devexpress/dx-react-grid';
import { COLUMN_NAME } from 'src/modules/UsersTable/constants';

export const sortingColumnExtensions: IntegratedSorting.ColumnExtension[] = [
    {
        columnName: COLUMN_NAME.NAME,
        compare: (a, b) => a.name.localeCompare(b.name)
    },
    {
        columnName: COLUMN_NAME.USER_STATUS,
        compare: (a, b) => a.user_status.localeCompare(b.user_status)
    },
    {
        columnName: COLUMN_NAME.PAYMENT_STATUS,
        compare: (a, b) => a.payment_status.localeCompare(b.payment_status)
    },
    {
        columnName: COLUMN_NAME.AMOUNT,
        compare: (a, b) => a.amount - b.amount
    }
];
