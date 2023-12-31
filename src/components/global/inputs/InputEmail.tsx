import React, { type ChangeEvent } from 'react'
import { Input, type InputProps } from '@chakra-ui/react'

interface InputEmailProps extends InputProps {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function InputEmail ({ value, setValue, ...props }: InputEmailProps): JSX.Element {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  return (
    <Input
      mb={1}
      type='email'
      placeholder='Digite seu email'
      onChange={handleChange}
      value={value}
      {...props}
    />
  )
}
