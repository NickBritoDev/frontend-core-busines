import React, { useEffect, useState } from 'react'
import 'react-chat-widget/lib/styles.css'
import '@fontsource/poppins'
import '../../theme/style.css'
import { Box } from '@chakra-ui/react'

export default function Access() {
localStorage.removeItem('TKOCP')
  return (
    <div className='App'>
      <Box>Access</Box>
    </div>
  )
}
