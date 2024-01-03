// BoxFullScreen.tsx
import { Box } from '@chakra-ui/react'
import React from 'react'

export default function BoxFullScreen ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
        <Box w={'100%'}>
            {children}
        </Box>
  )
}
