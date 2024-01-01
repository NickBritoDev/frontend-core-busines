import { Box, Flex, Input } from '@chakra-ui/react'
import React from 'react'
import { FcSearch } from 'react-icons/fc'
import searchAnimation from '../../utils/searchAnimation'

export default function SearchSystem (): JSX.Element {
  const animatedSearch = searchAnimation()

  return (
    <Flex w={'570px'} alignItems={'center'} >
      <Box mr={-8}>
        <FcSearch fontSize={22} />
      </Box>
      <Input w={'530px'} pl={10} placeholder={`Pesquisar... ${animatedSearch}`} rounded={'2xl'} />
    </Flex>
  )
}
