import { useAuth } from 'hooks';
import { Flex, Button, Text } from '@chakra-ui/react';

export const UserMenu = () => {
  const { user, logOut } = useAuth();

  return (
    <Flex display="flex" gap="4" align="center">
      <Text fontSize="l">Welcome, {user.name}</Text>
      <Button size="md" variant="brand" type="button" onClick={() => logOut()}>
        Log Out
      </Button>
    </Flex>
  );
};
