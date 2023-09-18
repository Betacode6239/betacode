import { cn } from '@/lib/utils'
import React from 'react'

const Logo = (props: {
    className?: string
}) => {
  return (
    <span className={cn([
        'text-primary font-bold text-2xl',
        props.className
    ])}>BetaCode</span>
  )
}

export default Logo