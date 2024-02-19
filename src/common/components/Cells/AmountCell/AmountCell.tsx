import { FC } from 'react';
import { Table } from '@devexpress/dx-react-grid-material-ui';

import styles from './AmountCell.module.scss';

export const AmountCell: FC<Table.DataCellProps> = (props) => {
    const { value } = props;
    return (
        <Table.Cell {...props}>
            <div className={styles.AmountCell}>
                <p>${value.amount}</p>
                <p>{value.currency}</p>
            </div>
        </Table.Cell>
    );
};
