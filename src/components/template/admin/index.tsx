import React from 'react'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../molecules/navbar/Navbar'
import Sidebar from '../../molecules/sidebar/Sidebar'

export default function Admin (): JSX.Element {
  return (
    <ChakraProvider>
      <Box h={'100vh'} overflowY={'scroll'} pt={16} pb={6} overflowX={'hidden'}>
        <Navbar />
        <Sidebar />
        <Box>
          <Outlet />
        </Box>
      </Box>
    </ChakraProvider>
  )
}
