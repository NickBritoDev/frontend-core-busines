import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import LineChart from './components/PieChart'

export default function Home (): JSX.Element {
  const data = [30, 20, 25, 15, 10]
  const labels = ['A', 'B', 'C', 'D', 'E']

  return (
    <Flex overflow={'scroll'} ml={{ base: '0', md: '2.5%' }} px={2}
      flexDir={{ base: 'column', md: 'row' }} w={'100%'} alignItems={'center'} justifyContent={'center'}>
      <Box border={'solid'} w={{ base: '100%', md: '47%' }}>
        <LineChart data={data} labels={labels} />
      </Box>
      <Box border={'solid'} w={{ base: '100%', md: '47%' }}>
        <LineChart data={data} labels={labels} />
      </Box>
    </Flex>
  )
}
