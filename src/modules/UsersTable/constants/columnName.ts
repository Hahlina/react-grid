export const COLUMN_NAME: Record<string, string> = {
    NAME: 'name',
    USER_STATUS: 'user_status',
    PAYMENT_STATUS: 'payment_status',
    AMOUNT: 'amount',
    EDIT: 'edit',
    DATE: 'date',
    USER_ACTIVITY: 'user_activity',
    DETAIL_ACTIVITY: 'detail_activity'
} as const;

export const COLUMN_TITLE: Record<keyof typeof COLUMN_NAME, string> = {
    [COLUMN_NAME.NAME]: 'NAME',
    [COLUMN_NAME.USER_STATUS]: 'USER STATUS',
    [COLUMN_NAME.PAYMENT_STATUS]: 'PAYMENT STATUS',
    [COLUMN_NAME.AMOUNT]: 'AMOUNT',
    [COLUMN_NAME.EDIT]: '',
    [COLUMN_NAME.DATE]: 'DATE',
    [COLUMN_NAME.USER_ACTIVITY]: 'USER ACTIVITY',
    [COLUMN_NAME.DETAIL_ACTIVITY]: 'DETAIL'
} as const;

interface IColumnDescription {
    [key: string]: { name: string; title: string };
}

export const COLUMN_DESCRIPTION: IColumnDescription = {};

for (const key in COLUMN_NAME) {
    const columnNameValue = COLUMN_NAME[key];
    const columnTitleValue = COLUMN_TITLE[columnNameValue];
    COLUMN_DESCRIPTION[key] = { name: columnNameValue, title: columnTitleValue };
}
