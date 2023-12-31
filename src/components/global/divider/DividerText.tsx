import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react'
import React from 'react'

interface DividerTextProps {
  text: string
}

export default function DividerText ({ text }: DividerTextProps): JSX.Element {
  return (
        <Box position='relative' padding={10}>
            <Divider />
            <AbsoluteCenter bg='white' px={4}>
                {text}
            </AbsoluteCenter>
        </Box>
  )
}
