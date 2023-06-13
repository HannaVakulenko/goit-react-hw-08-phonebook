import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { useColorMode, Box, IconButton, Container } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="header"
      borderBottom="2px"
      borderColor={colorMode === 'dark' ? 'brand.900' : 'brand.400'}
      bg={colorMode === 'dark' ? 'brand.500' : 'brand.50'}
      position="sticky"
      l="0px"
      top="0px"
      w="100%"
      zIndex={1}
    >
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxW="3xl"
        py={2}
        px={4}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          px={4}
        >
          {' '}
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>{' '}
        <IconButton
          variant="brand"
          aria-label="toggle theme"
          rounded="full"
          size="md"
          onClick={toggleColorMode}
          icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
        />
      </Container>
    </Box>
  );
};

// Stack, Switch

// <Stack direction="row">
//     <Switch colorScheme="gray" size="lg" onChange={toggleColorMode} />
// </Stack>

// <Button
//   colorScheme={colorMode === 'light' ? 'blackAlpha' : 'whiteAlpha'}
//   size="sm"
//   onClick={toggleColorMode}
// >
//   {colorMode === 'light' ? 'Dark' : 'Light'} Theme
// </Button>;
