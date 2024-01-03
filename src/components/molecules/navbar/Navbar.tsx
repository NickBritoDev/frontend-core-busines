import React from 'react'
import { Flex } from '@chakra-ui/react'
import SearchContainer from '../../organisms/containers/SearchContainer'
import ButtonNotification from '../../atoms/buttons/ButtonNotification'
import ImageLogoSM from '../../atoms/image/ImageLogoSM'
import MenuAvatar from '../../atoms/menu/MenuAvatar'

export default function Navbar (): JSX.Element {
  return (
    <Flex w={'100%'} pos={'fixed'} bg={'white'} right={0} top={0} py={2} alignItems={'center'} justifyContent={'center'} h={'60px'}>
      <ImageLogoSM />
      <SearchContainer />
      <Flex pos={'absolute'} right={-2} >
        <ButtonNotification />
        <MenuAvatar/>
      </Flex>
    </Flex>
  )
}
