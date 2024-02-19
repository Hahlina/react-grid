import { FC } from 'react';
import { TableSelection } from '@devexpress/dx-react-grid-material-ui';
import { CustomCheckBox } from 'src/common/components/CustomCheckBox/CustomCheckBox.tsx';

export const HeaderSelect: FC<TableSelection.HeaderCellProps> = (props) => {
    const { onToggle, allSelected, someSelected } = props;
    return (
        <th>
            <CustomCheckBox onChange={onToggle} checked={allSelected} someSelected={someSelected} />
        </th>
    );
};
