import { FC } from 'react';
import { Table } from '@devexpress/dx-react-grid-material-ui';

import styles from './NoDataDetail.module.scss';

export const NoDataDetail: FC<Table.RowProps> = (props) => (
    <Table.NoDataRow {...props} className={styles.row}>
        <td colSpan={3} className={styles.wrapper}>
            no records found
        </td>
    </Table.NoDataRow>
);
