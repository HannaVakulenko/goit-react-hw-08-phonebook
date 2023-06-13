import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      // light
      50: '#708aa6', //header-footer
      100: '#a6b3bf', //button
      200: '#4b627a', //hover
      300: '#f3ede3', //active
      400: '#4b627a', //random
      // dark
      500: '#474042', //header-footer
      600: '#8E8679', //button
      700: '#706468', //hover
      800: '#6D8F90', //active
      900: '#91510c', //random
      // other
      1000: '#fffde8', //moon
      1100: '#fff175', //sun
    },
  },
  textStyles: {
    link: {
      textDecoration: 'underline',
    },
  },
  components: {
    Button: {
      variants: {
        brand: props => ({
          bg: props.colorMode === 'dark' ? 'brand.600' : 'brand.100',
          boxShadow: 'md',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.700' : 'brand.200',
          },
        }),
      },
    },
    IconButton: {
      variants: {
        brand: props => ({
          bg: props.colorMode === 'dark' ? 'brand.600' : 'brand.100',
          colorScheme: props.colorMode === 'dark' ? 'brand.1100' : 'brand.1000',
          boxShadow: 'md',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.700' : 'brand.200',
          },
        }),
      },
    },
    Link: {
      variants: {
        brand: props => ({
          py: '2',
          px: '2',
          borderRadius: '6px',
          bg: props.colorMode === 'dark' ? 'brand.600' : 'brand.100',
          boxShadow: 'md',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.700' : 'brand.200',
          },

          _activeLink: {
            bg: props.colorMode === 'dark' ? 'brand.800' : 'brand.300',
            fontWeight: 700,
          },
        }),
      },
    },
  },
});
