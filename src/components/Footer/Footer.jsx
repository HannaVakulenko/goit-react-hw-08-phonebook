import { useColorMode, Flex, Text, Link } from '@chakra-ui/react';

export const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      as="footer"
      position="fixed"
      l="0px"
      bottom="0px"
      py={2}
      w="100%"
      justify="center"
      align="center"
      borderTop="2px"
      borderColor={colorMode === 'dark' ? 'brand.900' : 'brand.400'}
      bg={colorMode === 'dark' ? 'brand.500' : 'brand.50'}
      zIndex="1"
    >
      <Text fontSize="md" mr={2}>
        Created by
      </Text>
      <Link
        href="https://github.com/HannaVakulenko"
        isExternal
        fontSize="md"
        mr={2}
        color="brand.300"
      >
        &copy; Hanna Vakulenko
      </Link>
      <Text fontSize="md" mr={2}>
        as homework in studies at the
      </Text>
      <Link
        href="https://goit.global/ua/"
        isExternal
        fontSize="md"
        mr={2}
        color="brand.300"
      >
        GoIt
      </Link>
    </Flex>
  );
};
