import type { FC } from 'react';

import { Table } from '@devexpress/dx-react-grid-material-ui';

import styles from './NameCell.module.scss';
export const NameCell: FC<Table.DataCellProps> = ({ value, ...rest }) => (
    <Table.Cell {...{ value, ...rest }}>
        <div className={styles.nameSell}>
            <p>{value.name}</p>
            <p>{value.email}</p>
        </div>
    </Table.Cell>
);
