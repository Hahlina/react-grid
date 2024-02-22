import { FC } from 'react';
import { PagingPanel } from '@devexpress/dx-react-grid-material-ui';

import styles from './TablePagination.module.scss';
export const TablePagination: FC<PagingPanel.ContainerProps> = (props) => {
    return <PagingPanel.Container className={styles.paginationWrapper} {...props}></PagingPanel.Container>;
};
