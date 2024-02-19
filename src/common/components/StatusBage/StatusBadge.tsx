import { FC } from 'react';
import styles from './StatusBadge.module.scss';

// const BADGE_VARIANT = {
//     active: 'active',
//     inactive: 'inactive',
//     pain: 'paid',
//     overdue: 'overdue',
//     unpaid: 'unpaid'
// };

interface IStatusBadgeProps {
    variant: 'active' | 'inactive' | 'paid' | 'overdue' | 'unpaid' | string;
    label: string;
}

export const StatusBadge: FC<IStatusBadgeProps> = ({ variant, label }) => (
    <div className={`${styles.wrapper} ${styles[variant]}`}>{label}</div>
);
