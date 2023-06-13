import { Flex, Box, Text, Heading } from '@chakra-ui/react';

export default function Home() {
  const outerBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSize: 'full',
    height: '90vh',
    p: '16',
    background:
      'url(https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80) center/cover no-repeat',
  };

  const innerBoxStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: '480',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '20px',
  };

  return (
    <Flex flexWrap="wrap" gap="16px" justifyContent="space-evenly">
      <Box sx={outerBoxStyles}>
        <Box
          sx={innerBoxStyles}
          backdropFilter="auto"
          backdropBlur="8px"
          borderRadius="8px"
          p="16px"
        >
          <Heading as="h1" size="xl">
            Welcome to phonebook!{' '}
          </Heading>
          <Text fontSize="xxl">
            Create your own personal Phonebook with this app, which allows to
            view, to find and to save your contacts for never lose it!{' '}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
