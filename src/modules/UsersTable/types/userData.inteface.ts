export interface IUserDetailActivity {
    date: string;
    user_activity: string;
    detail_activity: string;
}

export interface IUserData {
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
