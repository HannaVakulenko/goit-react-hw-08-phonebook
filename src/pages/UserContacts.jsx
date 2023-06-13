import { useEffect } from 'react';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactModal } from 'components/ContactModal/ContactModal';
import { Filter } from 'components/Filter/Filter';
import { useDisclosure, Spinner, Heading, Flex } from '@chakra-ui/react';

import { useContacts } from 'hooks/useContacts';

export default function UserContacts() {
  const { isContactsLoading, fetchContacts } = useContacts();
  const register = useDisclosure();

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <>
      <Heading as="h1" fontSize="xl" align="center" py="8">
        Your phonebook
      </Heading>

      <div>
        {isContactsLoading && (
          <Flex align="center" justify="center">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Flex>
        )}
      </div>
      <Filter />
      <ContactModal
        {...register}
        buttonName={'Add new contact'}
        modalTitle={'Add new contact'}
        modalBody={<ContactsForm onSubmit={register.onClose} />}
      />
      <ContactsList />
    </>
  );
}
