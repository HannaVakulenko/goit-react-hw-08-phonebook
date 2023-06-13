import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Container,
  Box,
} from '@chakra-ui/react';

export const ContactModal = ({
  buttonName,
  modalTitle,
  modalBody,
  isOpen,
  onOpen,
  onClose,
}) => {
  const Overlay = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const [overlay, setOverlay] = React.useState(<Overlay />);

  return (
    <Container>
      <Box py={4}>
        <Button
          onClick={() => {
            setOverlay(<Overlay />);
            onOpen();
          }}
          variant="brand"
        >
          {buttonName}
        </Button>
      </Box>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent px={4} py={8}>
          <ModalCloseButton />
          <ModalHeader as="h2" fontSize="xl" align="center">
            {modalTitle}
          </ModalHeader>
          <ModalBody>{modalBody}</ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};
