import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const Modal = ({ isOpen, onClose, title, children }) => (
  <ChakraModal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent bg="purple.100">
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{children}</ModalBody>
    </ModalContent>
  </ChakraModal>
);

export default Modal;