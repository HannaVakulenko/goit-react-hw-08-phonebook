import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export const useFilteredContacts = () => {
  return useSelector(selectFilteredContacts);
};
