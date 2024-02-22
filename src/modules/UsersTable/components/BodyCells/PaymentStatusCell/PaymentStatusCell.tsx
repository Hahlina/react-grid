import type { FC } from 'react';

import { Table } from '@devexpress/dx-react-grid-material-ui';
import { StatusBadge } from 'src/common/components';

import styles from './PaymentStatusCell.module.scss';

export const PaymentStatusCell: FC<Table.DataCellProps> = ({ value, ...rest }) => (
    <Table.Cell {...{ value, ...rest }}>
        <div className={styles.paymentStatusCell}>
            <StatusBadge label={value.payment_status} variant={value.payment_status} />
            <p>Paid on: {value.payment_date}</p>
        </div>
    </Table.Cell>
);
