import { useDispatch } from 'react-redux';
import { DataList, DataItem, BtnDeleteContact } from './ContactsList.styled';
import { MdDeleteForever } from 'react-icons/md';
import { Notification } from 'components/Notification/Notification';

import { deleteContact } from 'redux/contacts/operations';
import { useFilteredContacts } from 'redux/contacts/hooks';

export const ContactsList = () => {
  const contacts = useFilteredContacts();

  const dispatch = useDispatch();

  const onDeleteContact = Id => {
    dispatch(deleteContact(Id));
  };

  return contacts.length > 0 ? (
    <DataList>
      {contacts.map(({ id, name, number }) => {
        return (
          <DataItem key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <BtnDeleteContact type="button" onClick={() => onDeleteContact(id)}>
              <MdDeleteForever size="16" />
              Delete
            </BtnDeleteContact>
          </DataItem>
        );
      })}
    </DataList>
  ) : (
    <Notification message="There is no contacts" />
  );
};
