import type { FC } from 'react';

import { SearchPanel } from '@devexpress/dx-react-grid-material-ui';
import { SearchIcon } from 'src/common/components';

import styles from './TableSearchInput.module.scss';

export const TableSearchInput: FC<SearchPanel.InputProps> = ({ value, onValueChange }) => (
    <div className={styles.searchInputWrapper}>
        <SearchIcon />
        <input
            className={styles.input}
            id="table-search-input"
            placeholder={'Search Users by Name, Email or Date'}
            value={value}
            onChange={(event) => onValueChange(event.target.value)}
        />
    </div>
);
