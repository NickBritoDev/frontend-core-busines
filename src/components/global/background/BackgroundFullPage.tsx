import { Image } from '@chakra-ui/react'
import React from 'react'

interface BackgroundFullPageProps {
  background: string // O caminho da imagem
}

const BackgroundFullPage: React.FC<BackgroundFullPageProps> = ({ background }): JSX.Element => {
  return (
        <Image
            top={0}
            left={0}
            pos={'fixed'}
            src={background}
            w="100vw" // largura igual à largura da tela
            h="100vh" // altura igual à altura da tela
            objectFit="cover" // Mantém a proporção da imagem e cobre toda a área
        />
  )
}

export default BackgroundFullPage
