import { useContacts } from 'hooks/useContacts';
import toast from 'react-hot-toast';
import {
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Icon,
  Button,
  FormLabel,
  InputLeftAddon,
} from '@chakra-ui/react';
import { BsFillPersonFill } from 'react-icons/bs';
import { phoneNumberScheme } from 'utils/phoneNumberSheme';

export const ContactsForm = ({ onSubmit }) => {
  const { isAllContacts, addContact } = useContacts();

  const handleSubmit = async event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value;

    const isNameAlreadyExist = isAllContacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase()
    );

    if (isNameAlreadyExist) {
      toast.error(`${name} is already exist.`, {
        position: 'top-center',
      });
      return;
    }

    const newContact = {
      name,
      number: phoneNumberScheme(number),
    };

    try {
      await addContact(newContact);
      form.reset();
      onSubmit();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <FormLabel htmlFor="name" m="0">
            Name:
          </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={BsFillPersonFill} color="gray.300" />
            </InputLeftElement>

            <Input
              as="input"
              name="name"
              placeholder="Name"
              minLength={3}
              id="name"
            />
          </InputGroup>
          <FormLabel htmlFor="number" m="0">
            Phone:
          </FormLabel>
          <InputGroup>
            <InputLeftAddon>+38</InputLeftAddon>
            <Input
              as="input"
              name="number"
              placeholder="(XXX)-XX-XX-XXX"
              minLength={10}
              maxLength={10}
              id="number"
            />
          </InputGroup>
          <Button type="submit" variant="brand" mt={4}>
            Add contact
          </Button>
        </Stack>
      </form>
    </>
  );
};
