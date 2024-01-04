import React, { useState } from 'react'
import ImageFullPage from '../../../atoms/image/ImageFullPage'
import { Box, Divider, Flex, Heading, Text, useToast } from '@chakra-ui/react'
import InputEmail from '../../../atoms/inputs/InputEmail'
import InputPassword from '../../../atoms/inputs/InpuptPassword'
import ButtonLoading from '../../../atoms/buttons/ButtonLoading'
import DividerText from '../../../atoms/divider/DividerText'
import ButtonApp from '../../../atoms/buttons/ButtonApp'
import { SiApple } from 'react-icons/si'
import { FaGooglePlay } from 'react-icons/fa'
import { setTokenForAuth } from '../../../../helpers/setTokenForAuth'
import { useNavigate } from 'react-router-dom'
import Background from '../../../../../public/crm-background2.jpeg'
import ModalRegister from '../modal/ModalRegister'
import { FcGoogle } from 'react-icons/fc'

export default function FormLogin (): JSX.Element {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const toast = useToast()
  const navigate = useNavigate()

  const submitAccess = (): void => {
    if (email !== '' && password !== '') {
      setIsLoading(true)
      setTokenForAuth()
      setTimeout(() => {
        navigate('/admin/home')
      }, 3000)
    } else if (email === '' || password === '') {
      toast({
        title: 'Preencha todos os campos.',
        description: 'Para acessar sua conta preencha os campos email e senha!',
        status: 'info',
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      })
    }
  }

  return (
    <>
      <ImageFullPage background={Background} />
      <Box
        bg={'white'}
        margin={'auto'}
        w={{ base: '80%', md: '450px' }}
        p={4}
        boxShadow={'lg'}
        rounded={'2xl'}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
      >
        <Heading color={'black'}>CRM PROSPECT</Heading>
        <Divider mb={6} mt={-2} />

        <InputEmail setValue={setEmail} value={email} />
        <InputPassword setValue={setPassword} value={password} placeholder={'Digite sua senha'} />
        <Text textAlign={'right'} mt={4} color={'blue.600'}>Esqueceu sua senha ?</Text>
        <ButtonLoading onClick={submitAccess} isLoading={isLoading} text={'Entrar'} loadingText={'Acessando...'} bgColor={'orange'} />

        <DividerText text={'ou'} />

        <ButtonLoading icon={FcGoogle} onClick={() => { setIsLoadingGoogle(true) }} text={'Entrar com sua conta Google'} loadingText={'Solicitando acesso ao Google'} bgColor={'gray.200'} isLoading={isLoadingGoogle} />

        <DividerText text={'Registre-se'} />

        <ModalRegister />
      </Box>

      <Flex pos={'absolute'} bottom={4} gap={4}>
        <ButtonApp text='Apple Store' icon={<SiApple fontSize={30} />} />
        <ButtonApp text='Play Store' icon={<FaGooglePlay fontSize={30} />} />
      </Flex>
    </>
  )
}
