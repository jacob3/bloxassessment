import React, { ReactElement } from 'react';
import classes from './SearchField.scss';

export type SearchFieldProps = {
    onChange: (q) => void;
    isLoading: boolean;
};

const SearchField: React.FC<SearchFieldProps> = (props: SearchFieldProps): ReactElement => {
    const onChange = (e) => {
        props.onChange(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search..."
            className={classes.searchField}
            onChange={onChange}
            disabled={props.isLoading}
        />
    );
};

export default SearchField;
