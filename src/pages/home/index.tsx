import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  localStorage.setItem('TKOCP', 'fakeToken123')
  return (
    <Box ml={'67px'}>Home</Box>
  )
}
