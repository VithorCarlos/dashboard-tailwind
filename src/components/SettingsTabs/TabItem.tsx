'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className={twMerge(
        'group relative px-1 pb-4 text-sm font-medium  outline-none hover:text-violet-700',
        'text-zinc-500 data-[state=active]:text-violet-700 dark:text-zinc-500',
        'dark:hover:text-violet-300 dark:data-[state=active]:text-violet-300',
      )}
    >
      <span
        className={twMerge(
          'whitespace-nowrap group-focus:ring-offset-4 ',
          'group-focus-visible:rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400',
        )}
      >
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300"
        />
      )}
    </Tabs.Trigger>
  )
}
