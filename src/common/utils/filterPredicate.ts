import { Filter, Row } from '@devexpress/dx-react-grid';

interface IFilterPredicateProps {
    value: {
        [key: string]: unknown;
    };
    filter: Filter;
    row: Row;
}

export const filterPredicate = (props: IFilterPredicateProps) => {
    const { value, row, filter } = props;
    const searchResult = Object.keys(value).map((cellValue) =>
        row[cellValue]?.toLowerCase()?.includes(filter.value.toLowerCase())
    );
    return searchResult.some((el) => el);
};
