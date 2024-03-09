import { createBrowserRouter } from 'react-router-dom'

import { AppLayput } from './pages/_layouts/app'
import { AuthLayput } from './pages/_layouts/auth'
import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayput />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
  {
    path: '/sign-in',
    element: <AuthLayput />,
    children: [{ path: '/sign-in', element: <SignIn /> }],
  },
])
