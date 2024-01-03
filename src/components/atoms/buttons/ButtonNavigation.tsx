// ButtonNavigation.tsx
import { Button } from '@chakra-ui/react'
import React from 'react'
import { type IconType } from 'react-icons'
// Importe todos os ícones que você pretende utilizar

interface ButtonNavigationProps {
  selected: boolean
  onClick: () => void
  icon: IconType
}

const ButtonNavigation: React.FC<ButtonNavigationProps> = ({ selected, onClick, icon }) => {
  return (
        <Button
            cursor={'pointer'}
            borderRadius={'20px 0 0 20px'}
            _hover={{ borderRadius: '20px 0 0 20px', bg: 'gray.600', color: 'white' }}
            bg={selected ? 'gray.100' : 'transparent'}
            margin={'auto'}
            w={'100%'}
            onClick={onClick}
        >
            {React.createElement(icon, { fontSize: 30 })}
        </Button>
  )
}

export default ButtonNavigation
