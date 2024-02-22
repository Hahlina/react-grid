import type { Column } from '@devexpress/dx-react-grid';
import type { IUserData, IUserDetailActivity } from 'src/modules/UsersTable/types';
import { COLUMN_DESCRIPTION } from 'src/modules/UsersTable/constants';

export const detailColumns: Column[] = [
    {
        ...COLUMN_DESCRIPTION.DATE,
        getCellValue: (row: IUserDetailActivity) => row.date
    },
    {
        ...COLUMN_DESCRIPTION.USER_ACTIVITY,
        getCellValue: (row: IUserDetailActivity) => row.user_activity
    },
    {
        ...COLUMN_DESCRIPTION.DETAIL_ACTIVITY,
        getCellValue: (row: IUserDetailActivity) => row.detail_activity
    }
];

export const columns: Column[] = [
    {
        ...COLUMN_DESCRIPTION.NAME,
        getCellValue: ({ name, email }: IUserData) => ({ name, email })
    },
    {
        ...COLUMN_DESCRIPTION.USER_STATUS,
        getCellValue: ({ user_status, last_login }: IUserData) => ({ user_status, last_login })
    },
    {
        ...COLUMN_DESCRIPTION.PAYMENT_STATUS,
        getCellValue: ({ payment_status, payment_date }: IUserData) => ({ payment_status, payment_date })
    },
    {
        ...COLUMN_DESCRIPTION.AMOUNT,
        getCellValue: ({ amount, currency }: IUserData) => ({
            amount,
            currency
        })
    },
    {
        ...COLUMN_DESCRIPTION.EDIT
    }
];
