import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import LineChart from './components/PieChart'

export default function Home (): JSX.Element {
  const data = [30, 20, 25, 15, 10]
  const labels = ['A', 'B', 'C', 'D', 'E']

  return (
    <Flex ml={{ base: '0', md: '2.5%' }} px={2}
      flexDir={{ base: 'column', md: 'row' }} w={'100%'}
      alignItems={'center'} justifyContent={'center'} >
        a
      <Box w={{ base: '100%', md: '47%' }}>
        <LineChart data={data} labels={labels} />
      </Box>
      b
      <Box w={{ base: '100%', md: '47%' }}>
        <LineChart data={data} labels={labels} />
      </Box>
      c
      <Box w={{ base: '100%', md: '47%' }}>
        <LineChart data={data} labels={labels} />
      </Box>
      d
      <Box w={{ base: '100%', md: '47%' }}>
        <LineChart data={data} labels={labels} />
      </Box>
      e
      <Box w={{ base: '100%', md: '47%' }}>
        <LineChart data={data} labels={labels} />
      </Box>
      f
      <Box w={{ base: '100%', md: '47%' }}>
        <LineChart data={data} labels={labels} />
      </Box>
      g
      <Box w={{ base: '100%', md: '47%' }}>
        <LineChart data={data} labels={labels} />
      </Box>
      h
      <Box w={{ base: '100%', md: '47%' }}>
        <LineChart data={data} labels={labels} />
      </Box>

    </Flex>
  )
}
