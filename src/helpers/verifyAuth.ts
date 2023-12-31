const verifyAuth = (): boolean => {
  const auth = localStorage.getItem('TKOCP')
  return !(auth == null)
}

export { verifyAuth }
