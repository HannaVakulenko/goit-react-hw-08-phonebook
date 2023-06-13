import { NavLink } from 'react-router-dom';
import { Flex, Link } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Flex display="flex" gap="4">
      <Link size="sm" as={NavLink} to="/register" variant="brand">
        Sign Up
      </Link>
      <Link size="sm" as={NavLink} to="/login" variant="brand">
        Log In
      </Link>
    </Flex>
  );
};
