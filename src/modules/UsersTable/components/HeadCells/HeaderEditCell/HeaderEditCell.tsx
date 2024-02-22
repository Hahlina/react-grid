import type { FC } from 'react';

import { TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import { ThreeDots } from 'src/common/components';

import styles from './HeaderEditCell.module.scss';

export const HeaderEditCell: FC<TableHeaderRow.CellProps> = (props) => (
    <TableHeaderRow.Cell {...props}>
        <div className={styles.editWrapper}>
            <ThreeDots />
        </div>
    </TableHeaderRow.Cell>
);
