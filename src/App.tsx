import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'

export const App = () => (
  <HelmetProvider>
    <Helmet titleTemplate="%s | pizza.shop" />
    <Toaster richColors duration={3000} />
    <RouterProvider router={router} />
  </HelmetProvider>
)
