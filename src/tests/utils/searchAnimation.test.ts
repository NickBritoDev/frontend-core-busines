import '@testing-library/jest-dom'
import searchAnimation from '../../utils/searchAnimation' // Substitua pelo caminho correto do arquivo
import React from 'react'

describe('searchAnimation', () => {
  let originalUseState: any
  let useStateMock: jest.Mock<any, any>

  beforeEach(() => {
    originalUseState = React.useState
    useStateMock = jest.fn()
    React.useState = useStateMock
  })

  afterEach(() => {
    React.useState = originalUseState
  })

  it('should call useState', () => {
    useStateMock.mockReturnValue(['', jest.fn()])

    searchAnimation()

    expect(useStateMock).toHaveBeenCalled()
  })
})
