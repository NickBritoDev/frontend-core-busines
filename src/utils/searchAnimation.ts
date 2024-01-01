/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState, useEffect } from 'react'

const searchAnimation = () => {
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
  }, [])

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

  return displayedSearch
}

export default searchAnimation
