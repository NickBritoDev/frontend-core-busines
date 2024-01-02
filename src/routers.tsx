import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Public from './layout/public'
import Access from './pages/access'
import Notfound from './pages/errors/404'
import Unauthorized from './pages/errors/401'
import Admin from './layout/admin'
import { verifyAuth } from './helpers/verifyAuth'
import Home from './pages/home'

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
