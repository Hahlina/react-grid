import type { FC } from 'react';

import { Table } from '@devexpress/dx-react-grid-material-ui';

import styles from './AmountCell.module.scss';

export const AmountCell: FC<Table.DataCellProps> = ({ value, ...rest }) => (
    <Table.Cell {...{ value, ...rest }}>
        <div className={styles.amountCell}>
            <p>${value.amount}</p>
            <p>{value.currency}</p>
        </div>
    </Table.Cell>
);
