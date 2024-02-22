import type { FC } from 'react';

import Checkbox from '@mui/material/Checkbox';
import { SomeChekedIcon } from 'src/common/components';

interface ICustomCheckBox {
    checked: boolean;
    onChange: (status: boolean) => void;
    someSelected?: boolean;
}

export const TableCheckBox: FC<ICustomCheckBox> = (props) => {
    const { onChange, checked, someSelected } = props;
    const someSelectIcon = someSelected ? <SomeChekedIcon /> : undefined;

    return (
        <Checkbox
            onChange={(e) => onChange(e.target.checked)}
            checked={checked}
            sx={{
                color: '#8B83BA',
                '&.Mui-checked': {
                    color: '#6D5BD0'
                }
            }}
            checkedIcon={someSelectIcon}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
};
