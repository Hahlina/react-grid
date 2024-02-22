import { Column } from '@devexpress/dx-react-grid';

interface IUserDetailActivity {
    date: string;
    user_activity: string;
    detail_activity: string;
}

interface IUserData {
    id: number;
    name: string;
    email: string;
    user_status: 'active' | 'inactive';
    last_login: string;
    payment_status: 'paid' | 'overdue' | 'unpaid';
    payment_date: string | null;
    amount: number;
    currency: string;
    detail?: IUserDetailActivity[];
}

export const userData: IUserData[] = [
    {
        id: 1,
        name: 'John',
        email: 'john@example.com',
        user_status: 'active',
        last_login: '2024-02-05',
        payment_status: 'paid',
        payment_date: '2024-01-25',
        amount: 100,
        currency: 'USD',
        detail: [
            {
                date: '2024-02-05',
                user_activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies',
                detail_activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
            },
            {
                date: '2024-02-05',
                user_activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies',
                detail_activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
            },
            {
                date: '2024-02-05',
                user_activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies',
                detail_activity:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
            }
        ]
    },
    {
        id: 2,
        name: 'Mary',
        email: 'mary@example.com',
        user_status: 'inactive',
        last_login: '2024-02-03',
        payment_status: 'overdue',
        payment_date: '2023-12-20',
        amount: 150,
        currency: 'USD'
    },
    {
        id: 3,
        name: 'Peter',
        email: 'peter@example.com',
        user_status: 'active',
        last_login: '2024-02-04',
        payment_status: 'unpaid',
        payment_date: '2023-12-20',
        amount: 200,
        currency: 'USD'
    },
    {
        id: 4,
        name: 'Olga',
        email: 'olga@example.com',
        user_status: 'active',
        last_login: '2024-02-06',
        payment_status: 'paid',
        payment_date: '2024-02-01',
        amount: 120,
        currency: 'USD'
    },
    {
        id: 5,
        name: 'Andrew',
        email: 'andrew@example.com',
        user_status: 'inactive',
        last_login: '2024-01-28',
        payment_status: 'paid',
        payment_date: '2024-01-15',
        amount: 180,
        currency: 'USD'
    },
    {
        id: 6,
        name: 'Julia',
        email: 'julia@example.com',
        user_status: 'active',
        last_login: '2024-02-05',
        payment_status: 'overdue',
        payment_date: '2023-11-10',
        amount: 250,
        currency: 'USD'
    },
    {
        id: 7,
        name: 'Vasily',
        email: 'vasily@example.com',
        user_status: 'active',
        last_login: '2024-02-03',
        payment_status: 'paid',
        payment_date: '2024-01-20',
        amount: 130,
        currency: 'USD'
    },
    {
        id: 8,
        name: 'Oksana',
        email: 'oksana@example.com',
        user_status: 'inactive',
        last_login: '2024-02-02',
        payment_status: 'paid',
        payment_date: '2024-01-10',
        amount: 170,
        currency: 'USD'
    },
    {
        id: 9,
        name: 'Michael',
        email: 'michael@example.com',
        user_status: 'active',
        last_login: '2024-02-05',
        payment_status: 'paid',
        payment_date: '2024-01-30',
        amount: 140,
        currency: 'USD'
    },
    {
        id: 10,
        name: 'Natalie',
        email: 'natalie@example.com',
        user_status: 'inactive',
        last_login: '2024-01-31',
        payment_status: 'unpaid',
        payment_date: '2023-01-31',
        amount: 220,
        currency: 'USD'
    }
];

export const detailColumns: Column[] = [
    {
        name: 'date',
        title: 'DATE',
        getCellValue: (row: IUserDetailActivity) => row.date
    },
    {
        name: 'user_activity',
        title: 'USER ACTIVITY',
        getCellValue: (row: IUserDetailActivity) => row.user_activity
    },
    {
        name: 'detail_activity',
        title: 'DETAIL',
        getCellValue: (row: IUserDetailActivity) => row.detail_activity
    }
];

export const columns: Column[] = [
    {
        name: 'name',
        title: 'NAME',
        getCellValue: (row: IUserData) => ({ name: row.name, email: row.email })
    },
    {
        name: 'user_status',
        title: 'USER STATUS',
        getCellValue: (row: IUserData) => ({ user_status: row.user_status, last_login: row.last_login })
    },
    {
        name: 'payment_status',
        title: 'PAYMENT STATUS',
        getCellValue: (row: IUserData) => ({ payment_status: row.payment_status, payment_date: row.payment_date })
    },
    {
        name: 'amount',
        title: 'AMOUNT',
        getCellValue: (row: IUserData) => ({
            amount: row.amount,
            currency: row.currency
        })
    },
    {
        name: 'edit'
    }
];
