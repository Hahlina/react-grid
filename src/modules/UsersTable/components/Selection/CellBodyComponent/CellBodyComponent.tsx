import type { FC } from 'react';
import type { TableSelection } from '@devexpress/dx-react-grid-material-ui';

import { TableCheckBox } from 'src/common/components';

export const CellBodyComponent: FC<TableSelection.CellProps> = ({ onToggle, selected }) => (
    <td>
        <TableCheckBox onChange={onToggle} checked={selected} />
    </td>
);
