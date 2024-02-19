import { FC } from 'react';
import { TableSelection } from '@devexpress/dx-react-grid-material-ui';
import { CustomCheckBox } from 'src/common/components/CustomCheckBox/CustomCheckBox.tsx';

export const CelSelect: FC<TableSelection.CellProps> = (props) => {
    const { onToggle, selected } = props;
    return (
        <td>
            <CustomCheckBox onChange={onToggle} checked={selected} />
        </td>
    );
};
