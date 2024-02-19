import { FC } from 'react';
import { Table } from '@devexpress/dx-react-grid-material-ui';
import { ThreeDots } from 'src/common/components/Icons/ThreeDots.tsx';

import styles from './EditCell.module.scss';

export const EditCell: FC<Table.DataCellProps> = (props) => {
    return (
        <Table.Cell {...props}>
            <div className={styles.EditCell}>
                View More
                <ThreeDots />
            </div>
        </Table.Cell>
    );
};
