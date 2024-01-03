import { Box, Button, Divider, Flex, Input, List, ListIcon, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { type ChangeEvent, useState } from 'react'
import { FaSlackHash } from 'react-icons/fa'
import { FcSearch } from 'react-icons/fc'
import InputSearchSystem from '../../atoms/inputs/InputSearchSystem'
import searchAnimation from '../../../utils/searchAnimation'

export default function SearchContainer (): JSX.Element {
  const animatedSearch = searchAnimation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [filteredOptions, setFilteredOptions] = useState<string[]>([])
  const finalRef = React.useRef(null)

  const options: string[] = ['Cadastrar nova companhia', 'Como pagar fatura ?', 'Muda foto do perfil', '2º Via da fatura']

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchTerm: string = event.target.value
    setSearchTerm(searchTerm)

    const filtered: string[] = options.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setFilteredOptions(filtered)
  }

  return (
        <>
            <Button display={{ base: 'none', md: 'flex' }} bg={'transparent'} _hover={{ bg: 'transparent' }} onClick={onOpen}>
                <InputSearchSystem />
            </Button>
            <Modal size={'xl'} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Pesquise suas dúvidas na nossa documentação</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex alignItems={'center'} >
                            <Box mr={-8}>
                                <FcSearch fontSize={22} />
                            </Box>
                            <Input
                                value={searchTerm}
                                onChange={handleInputChange}
                                pl={10}
                                placeholder={`Pesquisar... ${animatedSearch}`} // Use o resultado da função no placeholder
                                rounded={'2xl'}
                            />                      </Flex>
                        {(searchTerm.length > 0) && (
                            <List spacing={3}>
                                {filteredOptions.map((option: string, index: number) => (
                                    <ListItem mt={4} fontWeight={'bold'} key={index}>
                                        <ListIcon fontSize={22} as={FaSlackHash} color='green.500' />
                                        {option}
                                        <Divider />
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
  )
}
