import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Unauthorized() {
  return (
    <Box w={'100%'} h={'100vh'} bg={'white'} pos={'fixed'} top={0}>
      <Heading>Unauthorized</Heading>
      <Text>401</Text>
    </Box>  )
}
