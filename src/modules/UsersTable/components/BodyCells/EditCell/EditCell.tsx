import type { FC } from 'react';

import { Table } from '@devexpress/dx-react-grid-material-ui';
import { ThreeDots } from 'src/common/components';

import styles from './EditCell.module.scss';

export const EditCell: FC<Table.DataCellProps> = (props) => (
    <Table.Cell {...props}>
        <div className={styles.editCell}>
            View More
            <ThreeDots />
        </div>
    </Table.Cell>
);
