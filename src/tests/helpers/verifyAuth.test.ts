import { verifyAuth } from '../../helpers/verifyAuth'

describe('verifyAuth', () => {
  it('deve retornar o valor armazenado em localStorage', () => {
    const token = 'meuToken'
    localStorage.setItem('TKOCP', token)

    expect(verifyAuth()).toEqual(token)
  })

  it('deve retornar null se não houver valor armazenado', () => {
    localStorage.removeItem('TKOCP')

    expect(verifyAuth()).toBeNull()
  })
})
