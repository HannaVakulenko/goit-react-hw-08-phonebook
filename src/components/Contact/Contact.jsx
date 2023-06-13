import { useContacts } from 'hooks/useContacts';
import {
  Flex,
  Avatar,
  Box,
  Text,
  Button,
  Divider,
  useDisclosure,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { ContactModal } from 'components/ContactModal/ContactModal';
import { UpdateContact } from 'components/UpdateContact/UpdateContact';

export const Contact = ({ id, name, number }) => {
  const { deleteContact } = useContacts();
  const update = useDisclosure();

  return (
    <>
      <Flex align="center" p={2}>
        <Avatar src="https://bit.ly/broken-link" />
        <Box ml="3">
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm">{number}</Text>
        </Box>
        <Box ml="auto" display="flex" alignItems="center">
          <ContactModal
            {...update}
            buttonName={'Update'}
            modalTitle={'Update you contact'}
            modalBody={
              <UpdateContact
                id={id}
                name={name}
                number={number}
                onSubmit={update.onClose}
              />
            }
          />
          <Button
            type="button"
            onClick={() => deleteContact(id)}
            variant="brand"
          >
            <DeleteIcon />
          </Button>
        </Box>
      </Flex>
      <Divider />
    </>
  );
};
