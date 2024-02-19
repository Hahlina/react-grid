import { FC } from 'react';
import { Table } from '@devexpress/dx-react-grid-material-ui';
import { StatusBadge } from 'src/common/components/StatusBage/StatusBadge.tsx';

import styles from './StatusCell.module.scss';

export const StatusCell: FC<Table.DataCellProps> = (props) => {
    const { value } = props;
    return (
        <Table.Cell {...props}>
            <div className={styles.StatusCell}>
                <StatusBadge label={value.user_status} variant={value.user_status} />
                <p>Last login: {value.last_login}</p>
            </div>
        </Table.Cell>
    );
};
