import type { FC } from 'react';
import type { TableRowDetail } from '@devexpress/dx-react-grid-material-ui';

import { IconButton } from '@mui/material';
import { ExpandIcon } from 'src/common/components';

export const ToggleCellComponent: FC<TableRowDetail.ToggleCellProps> = ({ onToggle, expanded }) => (
    <td>
        <IconButton
            onClick={onToggle}
            sx={{
                transform: `rotate(${expanded ? '180deg' : '0'})`
            }}
        >
            <ExpandIcon />
        </IconButton>
    </td>
);
