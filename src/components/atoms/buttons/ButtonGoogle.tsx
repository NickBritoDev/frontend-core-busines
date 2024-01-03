import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

interface ButtonGoogleProps {
  text: string
}

export default function ButtonGoogle ({ text }: ButtonGoogleProps): JSX.Element {
  return (
        <Button
            _hover={{ bg: 'blue.400', color: 'white' }}
            rounded={'2xl'}
            mt={2}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            w={'100%'}
        >
            <FcGoogle fontSize={22} />
            <Text mb={-1} ml={2}>
                {text}
            </Text>
        </Button>
  )
}
