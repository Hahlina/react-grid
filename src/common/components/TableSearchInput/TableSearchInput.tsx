import { FC } from 'react';
import { SearchPanel } from '@devexpress/dx-react-grid-material-ui';

import styles from './TableSearchInput.module.scss';
import { SearchIcon } from 'src/common/components/Icons/SearchIcon.tsx';

export const TableSearchInput: FC<SearchPanel.InputProps> = ({ value, onValueChange }) => {
    return (
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
};
