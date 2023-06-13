import { useContacts } from 'hooks/useContacts';
import { phoneNumberScheme } from 'utils/phoneNumberSheme';
import { removeDelimiters } from 'utils/removeDelimiters';

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

export const UpdateContact = ({ id, name, number, onSubmit }) => {
  const { updateContact } = useContacts();

  const handleSubmit = async event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value;

    const updatedContact = {
      id,
      name,
      number: phoneNumberScheme(number),
    };

    try {
      await updateContact(updatedContact);
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
              defaultValue={name}
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
              minLength={10}
              maxLength={10}
              id="number"
              defaultValue={removeDelimiters(number)}
            />
          </InputGroup>
          <Button type="submit" variant="brand" mt={4}>
            Update contact
          </Button>
        </Stack>
      </form>
    </>
  );
};
