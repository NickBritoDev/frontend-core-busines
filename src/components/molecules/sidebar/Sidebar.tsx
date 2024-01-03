import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { SlSettings } from 'react-icons/sl'
import { IoIosLogOut } from 'react-icons/io'
import { MdBusinessCenter } from 'react-icons/md'
import { IoHomeOutline } from 'react-icons/io5'
import { RiSecurePaymentLine, RiUserSettingsFill } from 'react-icons/ri'
import BoxFullScreen from '../../atoms/box/BoxFullScreen'
import ButtonNavigation from '../../atoms/buttons/ButtonNavigation'

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
      <BoxFullScreen>
        <ButtonNavigation
          selected={selectedButton === 'home'}
          onClick={() => { handleButtonClick('home') }}
          icon={IoHomeOutline}
        />
        <ButtonNavigation
          selected={selectedButton === 'userGear'}
          onClick={() => { handleButtonClick('userGear') }}
          icon={RiUserSettingsFill}
        />
        <ButtonNavigation
          selected={selectedButton === 'settings'}
          onClick={() => { handleButtonClick('settings') }}
          icon={SlSettings}
        />
        <ButtonNavigation
          selected={selectedButton === 'businessCenter'}
          onClick={() => { handleButtonClick('businessCenter') }}
          icon={MdBusinessCenter}
        />
        <ButtonNavigation
          selected={selectedButton === 'securePayment'}
          onClick={() => { handleButtonClick('securePayment') }}
          icon={RiSecurePaymentLine}
        />
      </BoxFullScreen>

      <BoxFullScreen>
        <ButtonNavigation
          selected={selectedButton === 'logout'}
          onClick={() => { handleButtonClick('logout') }}
          icon={IoIosLogOut}
        />
      </BoxFullScreen>
    </Box>
  )
}
