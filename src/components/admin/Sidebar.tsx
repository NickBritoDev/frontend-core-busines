import React, { useState } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { SlSettings } from 'react-icons/sl'
import { IoIosLogOut } from 'react-icons/io'
import { MdBusinessCenter } from 'react-icons/md'
import { IoHomeOutline } from 'react-icons/io5'
import { RiSecurePaymentLine, RiUserSettingsFill } from 'react-icons/ri'

export default function Sidebar (): JSX.Element {
  const [selectedButton, setSelectedButton] = useState('home')

  const handleButtonClick = (buttonName: string): void => {
    setSelectedButton(buttonName === selectedButton ? '' : buttonName)
  }

  return (
    <Box
      bg={'orange'}
      boxShadow={'5px 0 10px rgba(0, 0, 0, 0.1)'}
      display={{ base: 'none', md: 'flex' }}
      flexDir={'column'}
      pos={'fixed'}
      bottom={14}
      rounded={'2xl'}
      left={1}
      alignItems={'center'}
      justifyContent={'space-between'}
      py={4}
      w={'65px'}
      h={'80%'}
      gap={4}
      zIndex={99}
      pl={1}
    >
      <Box w={'100%'}>
        <Button
          cursor={'pointer'}
          borderRadius={'20px 0 0 20px'}
          _hover={{ borderRadius: '20px 0 0 20px', bg: 'gray.600', color: 'white' }}
          bg={selectedButton === 'home' ? 'gray.100' : 'transparent'}
          margin={'auto'}
          w={'100%'}
          onClick={() => {
            handleButtonClick('home')
          }}
        >
          <IoHomeOutline fontSize={30} />
        </Button>
        <Button
          cursor={'pointer'}
          borderRadius={'20px 0 0 20px'}
          _hover={{ borderRadius: '20px 0 0 20px', bg: 'gray.600', color: 'white' }}
          bg={selectedButton === 'userGear' ? 'gray.100' : 'transparent'}
          margin={'auto'}
          w={'100%'}
          onClick={() => {
            handleButtonClick('userGear')
          }}
        >
          <RiUserSettingsFill fontSize={30} />
        </Button>
        <Button
          cursor={'pointer'}
          borderRadius={'20px 0 0 20px'}
          _hover={{ borderRadius: '20px 0 0 20px', bg: 'gray.600', color: 'white' }}
          bg={selectedButton === 'settings' ? 'gray.100' : 'transparent'}
          margin={'auto'}
          w={'100%'}
          onClick={() => {
            handleButtonClick('settings')
          }}
        >
          <SlSettings fontSize={30} />
        </Button>
        <Button
          cursor={'pointer'}
          borderRadius={'20px 0 0 20px'}
          _hover={{ borderRadius: '20px 0 0 20px', bg: 'gray.600', color: 'white' }}
          bg={selectedButton === 'businessCenter' ? 'gray.100' : 'transparent'}
          margin={'auto'}
          w={'100%'}
          onClick={() => {
            handleButtonClick('businessCenter')
          }}
        >
          <MdBusinessCenter fontSize={30} />
        </Button>
        <Button
          cursor={'pointer'}
          borderRadius={'20px 0 0 20px'}
          _hover={{ borderRadius: '20px 0 0 20px', bg: 'gray.600', color: 'white' }}
          bg={selectedButton === 'securePayment' ? 'gray.100' : 'transparent'}
          margin={'auto'}
          w={'100%'}
          onClick={() => {
            handleButtonClick('securePayment')
          }}
        >
          <RiSecurePaymentLine fontSize={30} />
        </Button>
      </Box>
      <Box w={'100%'}>
        <Button
          cursor={'pointer'}
          borderRadius={'20px 0 0 20px'}
          _hover={{ borderRadius: '20px 0 0 20px', bg: 'gray.600', color: 'white' }}
          bg={selectedButton === 'logout' ? 'gray.100' : 'transparent'}
          margin={'auto'}
          w={'100%'}
          onClick={() => {
            handleButtonClick('logout')
          }}
        >
          <IoIosLogOut fontSize={30} />
        </Button>
      </Box>
    </Box>
  )
}
