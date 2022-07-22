import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent
        display='flex'
        flexDir='column'

        flex='1'
        maxWidth='fit-content'
        maxHeight='fit-content'
        background='#353431'
      >
        <ModalBody
          width='full'

        >
          <Image
            maxW='900px'
            maxH='600px'
            src={imgUrl}
            alt={imgUrl}
          />
        </ModalBody>
        <ModalFooter
          display='flex'
          justifyContent='flexStart'
        >
          <Link target='_blank' href={imgUrl}>Abrir original</Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
