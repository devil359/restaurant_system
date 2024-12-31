'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart3, ChefHat, Clock, HelpCircle, LayoutDashboard, Menu, MessageSquare, Package, Settings, Store, Users, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

interface NavItem {
  title: string
  label?: string
  icon: React.ComponentType<{ className?: string }>
  variant: 'default' | 'ghost'
  href: string
}

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    variant: 'default',
    href: '/',
  },
  {
    title: 'Orders',
    icon: Package,
    variant: 'ghost',
    href: '/orders',
  },
  {
    title: 'Kitchen',
    icon: ChefHat,
    variant: 'ghost',
    href: '/kitchen',
  },
  {
    title: 'Reservation',
    icon: Clock,
    variant: 'ghost',
    href: '/reservations',
  },
  {
    title: 'Customer',
    icon: MessageSquare,
    variant: 'ghost',
    href: '/customers',
  },
  {
    title: 'Menu',
    icon: Menu,
    variant: 'ghost',
    href: '/menu',
  },
  {
    title: 'Suppliers',
    icon: Store,
    variant: 'ghost',
    href: '/suppliers',
  },
  {
    title: 'Staff',
    icon: Users,
    variant: 'ghost',
    href: '/staff',
  },
  {
    title: 'Analytics',
    icon: BarChart3,
    variant: 'ghost',
    href: '/analytics',
  },
  {
    title: 'Settings',
    icon: Settings,
    variant: 'ghost',
    href: '/settings',
  },
]

interface LayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: LayoutProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      {/* Desktop Sidebar */}
      <div className="hidden border-r bg-white/90 backdrop-blur-sm dark:bg-gray-800/90 lg:block">
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold text-indigo-600 dark:text-indigo-400" href="/">
              <Package className="h-6 w-6" />
              <span>Restaurants</span>
            </Link>
          </div>
          <ScrollArea className="flex-1 px-3">
            <div className="space-y-1 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
                    pathname === item.href &&
                      'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400'
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white/90 backdrop-blur-sm dark:bg-gray-800/90">
          <nav className="grid gap-2 py-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  'flex items-center gap-2 text-lg font-medium',
                  pathname === item.href ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400'
                )}
                onClick={() => setIsMobileOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-white/50 backdrop-blur-sm px-6 dark:bg-gray-800/50">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex flex-1 items-center gap-4">
            <Link
              className="flex items-center gap-2 font-semibold text-indigo-600 dark:text-indigo-400 lg:hidden"
              href="/"
            >
              <Package className="h-6 w-6" />
              <span>Restaurants</span>
            </Link>
          </div>
          <Button variant="ghost" size="icon" className="text-gray-700 dark:text-gray-300">
            <HelpCircle className="h-5 w-5" />
          </Button>
        </header>
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

