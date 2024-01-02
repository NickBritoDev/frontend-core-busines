import { Box, ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Public (): JSX.Element {
  return (
    <ChakraProvider>
      <Box h={'100vh'} overflow={'scroll'}>
        <Outlet/>
      </Box>
    </ChakraProvider>
  )
}
