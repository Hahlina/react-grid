import type { FC } from 'react';

import { Table } from '@devexpress/dx-react-grid-material-ui';
import { StatusBadge } from 'src/common/components';

import styles from './StatusCell.module.scss';

export const StatusCell: FC<Table.DataCellProps> = ({ value, ...rest }) => (
    <Table.Cell {...{ value, ...rest }}>
        <div className={styles.statusCell}>
            <StatusBadge label={value.user_status} variant={value.user_status} />
            <p>Last login: {value.last_login}</p>
        </div>
    </Table.Cell>
);
