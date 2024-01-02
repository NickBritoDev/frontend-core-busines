import React from 'react'
import Navbar from '../../components/admin/Navbar'
import Sidebar from '../../components/admin/Sidebar'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

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
