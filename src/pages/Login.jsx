import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { NavLink } from 'react-router-dom';
import { Text, Link } from '@chakra-ui/react';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <LoginForm />
      <Text fontSize="sm" textAlign={'center'}>
        Don't have an account?{' '}
        <Link size="sm" as={NavLink} to="/register">
          Sign up
        </Link>
      </Text>
    </div>
  );
}
