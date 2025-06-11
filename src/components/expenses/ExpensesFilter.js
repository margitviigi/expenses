import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const yearChangeHandler = (event) => {
        props.onChangeYear(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label htmlFor="year-select">Filter by year</label>
                <select
                    id="year-select"
                    value={props.selected}
                    onChange={yearChangeHandler}
                >
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                    <option value='2026'>2026</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
