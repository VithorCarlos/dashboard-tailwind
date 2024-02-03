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
} from 'lucide-react'
import { UsedSpaceWidget } from './UseSpaceWidget'
import { Profile } from './Profile'
import { InputControl, InputPrefix, InputRoot } from '../Form/Input'

export function Sidebar() {
  return (
    <aside className="border-zinc-20 flex flex-col gap-6 border-r px-5 py-8">
      <Logo />

      <InputRoot>
        <InputPrefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </InputPrefix>
        <InputControl placeholder="Search" />
      </InputRoot>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Taks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={User} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />
        <div className="border-t border-solid border-zinc-200 pt-6">
          <Profile />
        </div>
      </div>
    </aside>
  )
}
