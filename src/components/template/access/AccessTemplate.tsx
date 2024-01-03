import React from 'react'
import '@fontsource/poppins'
import '../../../theme/style.css'
import { Box } from '@chakra-ui/react'
import FormLogin from '../../organisms/access/form/FormLogin'

export default function AccessTemplate (): JSX.Element {
  return (
        <Box h={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <FormLogin />
        </Box>
  )
}
