// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import React from 'react'
import InputEmail from '../../../atoms/inputs/InputEmail'
import InputPassword from '../../../atoms/inputs/InpuptPassword'
import DividerText from '../../../atoms/divider/DividerText'
import ButtonGoogle from '../../../atoms/buttons/ButtonGoogle'

export default function ModalRegister (): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  return (
        <>
            <Button w={'100%'} bg={'blue.400'} color={'white'} _hover={{ color: 'black', bg: 'gray.100' }} rounded={'2xl'} margin={'-10px auto 0 auto'} onClick={onOpen}>Criar conta</Button>
            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Deseja criar uma conta?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Ao criar uma conta você desfrutara das melhores tecnologias e inovações com o crm prospect.
                    </AlertDialogBody>
                    <Box p={4}>
                        <InputEmail />
                        <InputPassword placeholder='Digite uma senha' />
                        <InputPassword placeholder='Confirme a senha' />
                    </Box>
                    <AlertDialogFooter>
                        <Button w={'100%'} ref={cancelRef} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button w={'100%'} bg='blue.300' color={'white'} _hover={{ color: 'black', bg: 'gray.100' }} ml={3}>
                            Criar Conta
                        </Button>
                    </AlertDialogFooter>

                    <DividerText text='ou' />

                    <Box p={4}>
                        <ButtonGoogle text={'Registre-se com sua conta Google'} />
                    </Box>

                </AlertDialogContent>
            </AlertDialog>
        </>
  )
}
