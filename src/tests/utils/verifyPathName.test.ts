import '@testing-library/jest-dom'
import { verifyPathName } from '../../utils/verifyPathName'

describe('verifyPathName', () => {
  const originalLocation = { ...window.location }

  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { ...originalLocation }
    })
  })

  it('deve retornar true para URL que inclui "/admin"', () => {
    window.location.pathname = '/admin/dashboard'

    expect(verifyPathName()).toBe(true)
  })

  it('deve retornar false para URL que não inclui "/admin"', () => {
    window.location.pathname = '/user/profile'

    expect(verifyPathName()).toBe(false)
  })
})
