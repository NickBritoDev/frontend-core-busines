import React, { Fragment } from 'react'
import { Box, Button, Divider, Flex, Icon, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { BsFillBellFill } from 'react-icons/bs'
import { MdOutlineTipsAndUpdates } from 'react-icons/md'
import { GrCompliance } from 'react-icons/gr'
import { LuCalendarClock } from 'react-icons/lu'

export default function Notification (): JSX.Element {
  const notification = [
    {
      text: 'Sua fatura vence dia 05/01 não deixe que vença, pague para continuar explorando o melhor do mundo do crm.',
      icon: LuCalendarClock
    },
    {
      text: 'Complete as informações no seu perfil para ter uma experiência mais completa.',
      icon: GrCompliance
    },
    {
      text: 'Novidades e atualizações!',
      icon: MdOutlineTipsAndUpdates
    }
  ]

  return (
        <Menu>
            <MenuButton rounded={'lg'} display={'flex'} alignItems={'center'} justifyContent={'center'} as={Button}>
                <Box ml={-1}>
                    <BsFillBellFill color='orange' fontSize={22} />
                    <Text bg={'red'} color={'white'} py={1} px={2}
                        borderRadius={'10px 10px 10px 0'} pos={'absolute'} top={-2} right={-3}>{notification.length}</Text>
                </Box>
            </MenuButton>
            <MenuList w={'600px'}>
                {notification.map((item, index) => (
                    <Fragment key={index}>
                        <MenuItem>
                            <Flex alignItems={'center'} justifyContent={'space-between'}>
                                <Icon fontSize={22} mx={6} as={item.icon} />
                                {item.text}
                            </Flex>
                        </MenuItem>
                        <Divider />
                    </Fragment>
                ))}
            </MenuList>
        </Menu>)
}
