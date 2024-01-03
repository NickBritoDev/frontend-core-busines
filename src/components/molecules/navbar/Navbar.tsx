import React from 'react'
import { Flex, Image } from '@chakra-ui/react'
import LogoCrm from '../../../../public/logo-crm-sem-letras.png'
import SearchContainer from '../../organisms/containers/SearchContainer'
import ButtonNotification from '../../atoms/buttons/ButtonNotification'

export default function Navbar (): JSX.Element {
  return (
    <Flex w={'100%'} pos={'fixed'} bg={'white'} right={0} top={0} py={2} alignItems={'center'} justifyContent={'center'} h={'60px'}>
        <Image pos={'absolute'} left={-2} w={'100px'} src={LogoCrm} />
        <SearchContainer />
      <Flex pos={'absolute'} right={-2} >
        <ButtonNotification />
      </Flex>
    </Flex>
  )
}
