import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { useContacts } from 'hooks/useContacts';
import { Contact } from '../Contact/Contact';
import { Container, List, ListItem, Text } from '@chakra-ui/react';

const sortedItems = array => {
  return array.slice().sort((a, b) => {
    const fa = a.name.toLowerCase();
    const fb = b.name.toLowerCase();
    return fa.localeCompare(fb);
  });
};

export const ContactsList = () => {
  const filter = useSelector(selectFilter);
  const { isAllContacts } = useContacts();

  const filteredContacts = () => {
    if (!isAllContacts) return [];
    const filteredItems = isAllContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredItems;
  };

  const filteredContactsData = filteredContacts();
  const sortedContactsData = sortedItems(filteredContactsData);

  if (sortedContactsData.length === 0) {
    return (
      <Container>
        <Text>
          Sorry, but you don't have any contacts yet. You need to add your
          contacts.
        </Text>
      </Container>
    );
  }

  return (
    <Container mb={20}>
      <List spacing={4}>
        {sortedContactsData.map(({ id, name, number }) => (
          <ListItem key={id}>
            <Contact name={name} number={number} id={id} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
