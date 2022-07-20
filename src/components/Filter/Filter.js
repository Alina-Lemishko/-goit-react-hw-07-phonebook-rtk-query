import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from 'redux/filter/filter-selectors';
import { filter } from 'redux/filter/filter-slice';

import s from './Filter.module.css';

const Filter = () => {
  const filterValue = useSelector(filterSelector);
  const dispatch = useDispatch();

  return (
    <label className={s.filterLabel}>
      Find contacts by name
      <input
        className={s.filterInput}
        name="filter"
        value={filterValue}
        onChange={e => dispatch(filter(e.target.value))}
        placeholder="enter keyword"
      />
    </label>
  );
};

export default memo(Filter);
