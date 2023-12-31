import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Home (): JSX.Element {
  localStorage.setItem('TKOCP', 'fakeToken123')
  return (
    <Box ml={{ base: '0', md: '67px' }}>Home</Box>
  )
}
