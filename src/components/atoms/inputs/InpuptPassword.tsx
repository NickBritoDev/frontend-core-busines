import React, { type ChangeEvent, useState } from 'react'
import { Button, Input, InputGroup, InputRightElement, type InputProps } from '@chakra-ui/react'

interface InputPasswordProps extends InputProps {
  placeholder: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function InputPassword ({ placeholder, value, setValue, ...props }: InputPasswordProps): JSX.Element {
  const [show, setShow] = useState(false)
  const handleClick = (): void => { setShow(!show) }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  return (
    <InputGroup size='md' mb={1}>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        {...props}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
