const verifyAuth = () => {
    const auth = localStorage.getItem('TKOCP')
    return auth
}

export {verifyAuth}