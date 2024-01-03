import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

export default function HomeTemplate (): JSX.Element {
  return (
      <Flex ml={{ base: '0', md: '2.5%' }} px={2}
          flexDir={{ base: 'column', md: 'row' }} w={'100%'}
          alignItems={'center'} justifyContent={'center'} >
          <Box w={{ base: '100%', md: '47%' }}>
          </Box>
          <Box w={{ base: '100%', md: '47%' }}>
          </Box>

      </Flex>
  )
}
