import type { FC } from 'react';
import type { TableSelection } from '@devexpress/dx-react-grid-material-ui';

import { TableCheckBox } from 'src/common/components';

export const HeaderCellComponent: FC<TableSelection.HeaderCellProps> = ({ onToggle, allSelected, someSelected }) => (
    <th>
        <TableCheckBox onChange={onToggle} checked={allSelected} someSelected={someSelected} />
    </th>
);
