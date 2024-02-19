import { FC } from 'react';
import { Table } from '@devexpress/dx-react-grid-material-ui';
import { StatusBadge } from 'src/common/components/StatusBage/StatusBadge.tsx';

import styles from './PaymentStatusCell.module.scss';

export const PaymentStatusCell: FC<Table.DataCellProps> = (props) => {
    const { value } = props;
    return (
        <Table.Cell {...props}>
            <div className={styles.PaymentStatusCell}>
                <StatusBadge label={value.payment_status} variant={value.payment_status} />
                <p>Paid on: {value.payment_date}</p>
            </div>
        </Table.Cell>
    );
};
