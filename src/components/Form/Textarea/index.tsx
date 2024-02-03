import { ComponentProps } from 'react'

export type TextAreaProps = ComponentProps<'textarea'>

export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      id="bio"
      className="min-h-[120px] w-full resize-none rounded-lg border border-zinc-300 px-3 py-2  shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[placeholder]:text-zinc-600"
      {...props}
    />
  )
}
