import React from 'react'
import { Button, type ButtonProps, Spinner, Text, Icon } from '@chakra-ui/react'
import { type IconType } from 'react-icons' // Importe o tipo de ícone adequado

interface ButtonLoadingProps extends ButtonProps {
  text: string
  loadingText: string
  bgColor: string
  isLoading: boolean
  icon?: IconType
}

export default function ButtonLoading ({ text, loadingText, bgColor, isLoading, icon, ...props }: ButtonLoadingProps): JSX.Element {
  return (
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    <Button w={'100%'} mt={4} mb={2} bg={bgColor} {...props} rounded={'2xl'} leftIcon={isLoading ? <Spinner size="sm" /> : (icon && <Icon as={icon} />)}>
      {isLoading ? <Text>{loadingText}</Text> : <Text>{text}</Text>}
    </Button>
  )
}
