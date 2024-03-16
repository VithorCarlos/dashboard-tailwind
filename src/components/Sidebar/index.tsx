'use client'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  User,
  LifeBuoy,
  Cog,
  Search,
  Menu,
} from 'lucide-react'
import { UsedSpaceWidget } from './UseSpaceWidget'
import { Profile } from './Profile'
import { InputControl, InputPrefix, InputRoot } from '../Form/Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'
import { twMerge } from 'tailwind-merge'

export function Sidebar() {
  return (
    <Collapsible.Root
      className={twMerge(
        'border-zinc-20 fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 overflow-y-auto border-r bg-white',
        'pt-4 lg:right-auto lg:w-80 lg:border-r  lg:data-[state=closed]:bottom-0',
        'data-[state=open]:bottom-0 data-[state=open]:h-screen',
        'dark:border-zinc-800 dark:bg-zinc-900',
      )}
    >
      <div className="flex items-center justify-between border-b border-zinc-300/30 p-2 lg:border-b-0">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=open]:flex data-[state=closed]:hidden lg:data-[state=closed]:flex "
      >
        <div className="px-4">
          <InputRoot>
            <InputPrefix>
              <Search className="h-5 w-5 text-zinc-500" />
            </InputPrefix>
            <InputControl placeholder="Search" />
          </InputRoot>
        </div>
        <nav className="space-y-0.5 px-4">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Taks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={User} />
        </nav>

        <div className="mt-auto flex flex-col gap-6 ">
          <nav className="space-y-0.5 px-4">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>

          <div className="px-4">
            <UsedSpaceWidget />
          </div>
          <div className="border-t border-solid border-zinc-200 p-4 pt-6 dark:bg-zinc-700">
            <Profile />
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
