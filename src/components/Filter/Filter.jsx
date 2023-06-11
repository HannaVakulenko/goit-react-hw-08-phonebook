import { FilterLabel, FilterLabelWrapper, FilterInput } from './Filter.styled';
import { BsSearch } from 'react-icons/bs';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeInputValue = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };

  return (
    <FilterLabel>
      <FilterLabelWrapper>
        <BsSearch size="16" />
        Find contact by name
      </FilterLabelWrapper>
      <FilterInput
        type="text"
        value={filter}
        onChange={changeInputValue}
        placeholder="search..."
      ></FilterInput>
    </FilterLabel>
  );
};
