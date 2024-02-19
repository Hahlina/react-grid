import { FC } from 'react';
import { Table } from '@devexpress/dx-react-grid-material-ui';

import styles from './NameCell.module.scss';
export const NameCell: FC<Table.DataCellProps> = (props) => {
    const { value } = props;
    return (
        <Table.Cell {...props}>
            <div className={styles.NameSell}>
                <p>{value.name}</p>
                <p>{value.email}</p>
            </div>
        </Table.Cell>
    );
};
