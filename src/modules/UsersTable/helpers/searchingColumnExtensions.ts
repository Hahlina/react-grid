import type { IntegratedFiltering } from '@devexpress/dx-react-grid';
import { filterPredicate } from 'src/common/utils';
import { COLUMN_NAME } from 'src/modules/UsersTable/constants';

export const searchingColumnExtensions: IntegratedFiltering.ColumnExtension[] = [
    {
        columnName: COLUMN_NAME.NAME,
        predicate: (value, filter, row) => filterPredicate({ value, filter, row })
    },
    {
        columnName: COLUMN_NAME.USER_STATUS,
        predicate: (value, filter, row) => filterPredicate({ value, filter, row })
    }
];
