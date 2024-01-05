import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

const imageBackground =
  'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export const AuthLayout = () => (
  <div className="grid min-h-screen grid-cols-2 antialiased">
    <div
      style={{ backgroundImage: `url(${imageBackground})` }}
      className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted bg-cover bg-center bg-no-repeat p-10 text-muted-foreground opacity-90"
    >
      <div className="flex items-center gap-3 text-center text-lg text-white">
        <Pizza className="h-5 w-5" />
        <span className="font-semibold">pizza.shop</span>
      </div>

      <footer className="text-sm text-white">
        Painel do parceiro &copy; pizza.shop {new Date().getFullYear()}
      </footer>
    </div>

    <div className="relative flex flex-col items-center justify-center">
      <Outlet />
    </div>
  </div>
)
