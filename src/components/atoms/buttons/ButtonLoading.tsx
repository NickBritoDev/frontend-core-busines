import React from 'react'
import { Button, type ButtonProps, Spinner, Text } from '@chakra-ui/react'

interface ButtonLoadingProps extends ButtonProps {
  text: string
  loadingText: string
  bgColor: string
  isLoading: boolean
}

export default function ButtonLoading ({ text, loadingText, bgColor, isLoading, ...props }: ButtonLoadingProps): JSX.Element {
  return (
    <Button w={'100%'} mt={4} mb={2} bg={bgColor} {...props} rounded={'2xl'}>
      {isLoading
        ? (
          <>
            <Text>{loadingText}</Text>
            <Spinner ml={2} size={'sm'} />
          </>
          )
        : (<Text>{text}</Text>)
      }
    </Button>
  )
}
