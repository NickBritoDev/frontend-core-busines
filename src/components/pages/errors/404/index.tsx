import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Notfound (): JSX.Element {
  return (
        <Box w={'100%'} h={'100vh'} bg={'white'} pos={'fixed'} top={0}>
            <Heading>Not Found</Heading>
            <Text>404</Text>
        </Box>
  )
}
