import { cn } from '@/lib/utils'
import { Square } from 'lucide-react'
import React, { ReactNode } from 'react'

const CardOne = ({
    icon = <Square className='w-6 h-6'/>,
    title,
    desc,
    className
}:{
    icon?: ReactNode,
    title?: string,
    desc?: string
    className?: string
}) => {
  return (
    <div
    className={cn([
        'rounded-xl shadow-md p-3',
        className
    ])} 
    >
        <div className="flex items-center justify-center">
            <div className='w-36 h-36 rounded-full p-3'>
                {icon}
            </div>
        </div>
    </div>
  )
}

export default CardOne