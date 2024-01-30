import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorMode,
} from "@chakra-ui/react";
import { ReactNode, useRef } from "react";

export function DefaultModal({
  isOpen,
  onClose,
  children,
  title,
  footer,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
  footer?: {
    footerChildren: ReactNode;
  };
}) {
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <Modal
      isCentered
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>{children}</ModalBody>
        {footer && <ModalFooter>{footer.footerChildren}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
}
