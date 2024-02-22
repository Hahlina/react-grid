import { FC } from 'react';
import { TableRowDetail } from '@devexpress/dx-react-grid-material-ui';

import styles from './AdditionalRow.module.scss';

export const AdditionalRow: FC<TableRowDetail.RowProps> = (props) => {
    return (
        <TableRowDetail.Row {...props} className={styles.rowWrapper}>
            {props.children}
        </TableRowDetail.Row>
    );
};
