import React from 'react'
import { Avatar, Button, Divider, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Wrap, WrapItem } from '@chakra-ui/react'
import LogoCrm from '../../../public/logo-crm-sem-letras.png'
import Notification from './Notification'
import SearchContainer from './SearchContainer'

export default function Navbar (): JSX.Element {
  return (
    <Flex boxShadow={'none'} py={2} alignItems={'center'} justifyContent={'center'} h={'60px'}>
      <Image pos={'absolute'} left={-2} w={'100px'} src={LogoCrm} />
      <SearchContainer />
      <Flex pos={'absolute'} right={0}>
        <Notification />
        <Menu>
          <MenuButton borderRadius={'50%'} _active={{ bg: 'transparent' }}
            bg={'transparent'} _hover={{ bg: 'transparent' }} as={Button}>
            <Wrap>
              <WrapItem>
                <Avatar name='Dan Abrahmov' src='https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/414877905_665733819105370_4296557760940229744_n.jpg?ccb=11-4&oh=01_AdQuK7QsSRXhEsFgydwPeOHPkAWPfAkxNZYeQC8ZwrBSaw&oe=659FDCE7&_nc_sid=e6ed6c&_nc_cat=104' />
              </WrapItem>
            </Wrap>
          </MenuButton>
          <MenuList mr={8}>
            <MenuItem>Home</MenuItem>
            <MenuItem>Configurações</MenuItem>
            <MenuItem>Perfil</MenuItem>
            <MenuItem>Companias</MenuItem>
            <MenuItem>Faturas</MenuItem>
            <Divider />
            <MenuItem>Sair</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

    </Flex>
  )
}
