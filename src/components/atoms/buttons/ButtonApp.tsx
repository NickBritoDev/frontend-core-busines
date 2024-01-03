import { Box, Button, Text } from '@chakra-ui/react'
import React, { type ReactElement } from 'react'

interface ButtonAppProps {
  icon: ReactElement
  text: string
}

const ButtonApp: React.FC<ButtonAppProps> = ({ icon, text }: ButtonAppProps): JSX.Element => {
  return (
        <Button display={{ base: 'none', md: 'flex' }} rounded={'xl'} px={2} py={6} textAlign={'left'} color={'white'} bg={'black'} zIndex={9999} border={'solid 2px white'}>
            {icon}
            <Box ml={4}>
                <Text>Baixar APP</Text>
                <Text>{text}</Text>
            </Box>
        </Button>
  )
}

export default ButtonApp
