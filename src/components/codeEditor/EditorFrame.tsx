import { cn } from '@/lib/utils'
import React, { PropsWithChildren } from 'react'

const EditorFrame = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn([
        'overflow-hidden rounded-xl border border-primary',
        props.className
    ])}>
        <div className='bg-primary px-3 py-2'>
            <div className='flex gap-2'>
                <span className='border-2 border-white w-3 h-3 rounded-full'></span>
                <span className='border-2 border-white w-3 h-3 rounded-full'></span>
                <span className='border-2 border-white w-3 h-3 rounded-full'></span>
            </div>
        </div>
        <div>
            {props.children}
        </div>
    </div>
  )
}

export default EditorFrame