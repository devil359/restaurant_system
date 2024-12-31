import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DarkModeToggle } from './dark-mode-toggle'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white dark:bg-gray-800 overflow-y-auto transition duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center">
            <span className="text-2xl font-semibold text-gray-800 dark:text-white">Restaurant MS</span>
          </div>
        </div>
        <nav className="mt-10">
          <a className="flex items-center px-6 py-2 mt-4 text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-200" href="/">
            <span className="mx-3">Dashboard</span>
          </a>
          <a className="flex items-center px-6 py-2 mt-4 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700" href="/orders">
            <span className="mx-3">Orders</span>
          </a>
          <a className="flex items-center px-6 py-2 mt-4 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700" href="/menu">
            <span className="mx-3">Menu</span>
          </a>
          <a className="flex items-center px-6 py-2 mt-4 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700" href="/reservations">
            <span className="mx-3">Reservations</span>
          </a>
          <a className="flex items-center px-6 py-2 mt-4 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700" href="/staff">
            <span className="mx-3">Staff</span>
          </a>
        </nav>
      </div>
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white ml-2">Dashboard</h1>
          </div>
          <DarkModeToggle />
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

