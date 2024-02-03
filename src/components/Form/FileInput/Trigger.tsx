'use client'
import { UploadCloudIcon } from 'lucide-react'
import { useFileInput } from './Root'

export function Trigger() {
  const { id } = useFileInput()

  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-zinc-500 shadow-sm hover:bg-violet-25 hover:text-violet-500 "
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloudIcon className="h-5 w-5 group-hover:text-violet-700" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span>
          <b className="font-semibold text-violet-700">Click to upload</b> or
          drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}
