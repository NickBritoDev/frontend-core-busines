import { Box, Flex, Input } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { FcSearch } from 'react-icons/fc'

export default function SearchSystem (): JSX.Element {
  const searchInSystem = [
    '"Como pagar fatura?"',
    '"Mudar foto de perfil"',
    '"Cadastrar nova companhia"'
  ]

  const [randomSearch, setRandomSearch] = useState<string>(
    searchInSystem[Math.floor(Math.random() * searchInSystem.length)]
  )
  const [displayedSearch, setDisplayedSearch] = useState<string>('')

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * searchInSystem.length)
      setRandomSearch(searchInSystem[randomIndex])
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [searchInSystem])

  useEffect(() => {
    let currentIndex = 0
    const displayInterval = setInterval(() => {
      if (currentIndex <= randomSearch.length) {
        setDisplayedSearch(randomSearch.substring(0, currentIndex))
        currentIndex += 1
      } else {
        clearInterval(displayInterval)
      }
    }, 100)

    return () => {
      clearInterval(displayInterval)
    }
  }, [randomSearch])

  return (
        <Flex w={'570px'} alignItems={'center'} >
            <Box mr={-8}>
                <FcSearch fontSize={22} />
            </Box>
            <Input w={'530px'} pl={10} placeholder={`Pesquisar... ${displayedSearch}`} rounded={'2xl'} />
        </Flex>
  )
}
