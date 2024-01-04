import { Image } from '@chakra-ui/react'
import React from 'react'

interface BackgroundFullPageProps {
  background: string
}

const BackgroundFullPage: React.FC<BackgroundFullPageProps> = ({ background }): JSX.Element => {
  return (
        <Image
            top={0}
            left={0}
            pos={'fixed'}
            src={background}
            w={'100vw'}
            h={'100vh'}
            backgroundPosition={'center'}
        />
  )
}

export default BackgroundFullPage
