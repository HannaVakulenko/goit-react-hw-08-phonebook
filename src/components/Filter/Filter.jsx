import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { Input, Container } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilterInput = event => {
    dispatch(setFilter(event.target.value.toLowerCase().trim()));
  };

  return (
    <Container py={4} px={4}>
      <Input
        as="input"
        onInput={onChangeFilterInput}
        name="filter"
        placeholder="Search contact by name..."
        minLength={3}
        id="filter"
      />
    </Container>
  );
};
