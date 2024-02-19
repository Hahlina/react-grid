import { FC } from 'react';
import { Table } from '@devexpress/dx-react-grid-material-ui';
import { AmountCell } from 'src/common/components/Cells/AmountCell/AmountCell.tsx';
import { NameCell } from 'src/common/components/Cells/NameCell/NameCell.tsx';
import { StatusCell } from 'src/common/components/Cells/StatusCell/StatusCell.tsx';
import { PaymentStatusCell } from 'src/common/components/Cells/PaymentStatusCell/PaymentStatusCell.tsx';
import { EditCell } from 'src/common/components/Cells/EditCell/EditCell.tsx';

export const RootCell: FC<Table.DataCellProps> = (props) => {
    const { column } = props;
    if (column.name === 'amount') {
        return <AmountCell {...props} />;
    }
    if (column.name === 'name') {
        return <NameCell {...props} />;
    }
    if (column.name === 'user_status') {
        return <StatusCell {...props} />;
    }
    if (column.name === 'payment_status') {
        return <PaymentStatusCell {...props} />;
    }
    if (column.name === 'edit') {
        return <EditCell {...props} />;
    }
    return <Table.Cell {...props} />;
};
