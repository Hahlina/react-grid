import { FC } from 'react';
import { TableSelection } from '@devexpress/dx-react-grid-material-ui';
import { CustomCheckBox } from 'src/common/components/CustomCheckBox/CustomCheckBox.tsx';

import styles from './CelSelect.module.scss';

export const CelSelect: FC<TableSelection.CellProps> = (props) => {
    const { onToggle, selected } = props;
    return (
        <td className={styles.selection}>
            <CustomCheckBox onChange={onToggle} checked={selected} />
        </td>
    );
};
