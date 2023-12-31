import React from 'react'
import { Box } from '@chakra-ui/react'
import { FaUserGear } from 'react-icons/fa6'
import { SlSettings } from 'react-icons/sl'
import { IoIosLogOut } from 'react-icons/io'
import { MdBusinessCenter } from 'react-icons/md'
import { RiSecurePaymentFill } from 'react-icons/ri'

export default function Sidebar (): JSX.Element {
  return (
    <Box boxShadow={'5px 0 10px rgba(0, 0, 0, 0.1)'} display={{ base: 'none', md: 'flex' }} flexDir={'column'}
    alignItems={'center'} justifyContent={'center'}
     w={'65px'} h={'100%'} gap={4}>
      <FaUserGear fontSize={30}/>
      <SlSettings fontSize={30}/>
      <MdBusinessCenter fontSize={30} />
      <RiSecurePaymentFill fontSize={30} />
      <IoIosLogOut fontSize={30} />
    </Box>
  )
}
