import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Footer } from './Footer/Footer';
import { Suspense } from 'react';
import { Box, Container } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Box display="flex" flexDirection="column">
      <AppBar />

      <Container as={Suspense} fallback={null}>
        <Outlet />
      </Container>

      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};
