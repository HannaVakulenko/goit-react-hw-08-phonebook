import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Flex, Link } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex as="nav" display="flex" gap="4">
      <Link as={NavLink} to="/" variant="brand">
        Home
      </Link>
      {isLoggedIn && (
        <Link as={NavLink} to="/contacts" variant="brand">
          Contacts
        </Link>
      )}
    </Flex>
  );
};
