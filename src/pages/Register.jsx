import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Text, Link } from '@chakra-ui/react';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
      <Text fontSize="sm" textAlign={'center'}>
        Already registered?{' '}
        <Link size="sm" as={NavLink} to="/login">
          Sign in
        </Link>
      </Text>
    </div>
  );
}
