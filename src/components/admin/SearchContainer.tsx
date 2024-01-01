import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SearchSystem from './SearchSystem'

export default function SearchContainer (): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  return (
        <>
            <Button bg={'transparent'} _hover={{ bg: 'transparent' }} onClick={onOpen}>
                <SearchSystem />
            </Button>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
  )
}
