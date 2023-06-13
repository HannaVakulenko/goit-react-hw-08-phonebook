import { useAuth } from 'hooks';
import {
  Container,
  Input,
  FormLabel,
  Button,
  Stack,
  AbsoluteCenter,
  Box,
  Heading,
} from '@chakra-ui/react';

export const LoginForm = () => {
  const { logIn } = useAuth();

  const onLoginBtnSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;

    try {
      await logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      });
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container mt={6}>
      <Box position="relative" padding="10">
        <AbsoluteCenter px="4">
          <Heading as="h2" fontSize="xl" align="center">
            Log In
          </Heading>
        </AbsoluteCenter>
      </Box>

      <form onSubmit={onLoginBtnSubmit} autoComplete="off">
        <Stack spacing={2}>
          <FormLabel htmlFor="email" m="0">
            Email:
          </FormLabel>
          <Input
            type="email"
            as="input"
            name="email"
            placeholder="Email"
            minLength={3}
            id="email"
          />
          <FormLabel htmlFor="password" m="0">
            Password:
          </FormLabel>
          <Input
            type="password"
            as="input"
            name="password"
            placeholder="Password"
            minLength={3}
            id="password"
          />

          <Button type="submit" variant="brand" mt={2}>
            Log In
          </Button>
        </Stack>
      </form>
    </Container>
  );
};
