import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Access from './components/pages/access'
import Notfound from './components/pages/errors/404'
import Unauthorized from './components/pages/errors/401'
import { verifyAuth } from './helpers/verifyAuth'
import Home from './components/pages/home'
import Public from './components/template/public'
import Admin from './components/template/admin'

export default function Router (): any {
  const routing = useRoutes([
    {
      path: '/',
      element: <Public />,
      children: [
        { path: '', element: <Access /> }
      ]
    },
    {
      path: '/public',
      element: <Public />,
      children: [
        { path: '404', element: <Notfound /> }
      ]
    },
    {
      path: '/public',
      element: <Public />,
      children: [
        { path: '401', element: <Unauthorized /> }
      ]
    },
    {
      path: '/admin',
      element: <Admin />,
      children: [
        { path: 'home', element: verifyAuth() ? <Home /> : <Navigate to='/public/401' replace /> }
      ]
    },
    { path: '*', element: <Navigate to='/public/404' replace /> },
    { path: '/', element: <Navigate to='/public/access' replace /> }
  ])

  return routing
}
