import { Image } from '@chakra-ui/react'
import React from 'react'
import LogoCrm from '../../../../public/logo-crm-sem-letras.png'

export default function ImageLogoSM (): JSX.Element {
  return (
      <Image pos={'absolute'} left={-2} w={'100px'} src={LogoCrm} />
  )
}
