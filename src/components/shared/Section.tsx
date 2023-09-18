import { cn } from '@/lib/utils'
import { useInView } from '@react-spring/web'
import React from 'react'

export const SectionTitle = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h2
            {...props}
            className={cn([
                'text-primary text-3xl md:text-5xl font-bold mb-3 ',
                props.className
            ])}
        >{props.children}</h2>
    )
}

export const SectionDescription = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <p
            {...props}
            className={cn([
                'text-slate-400 text-base md:text-lg',
                props.className
            ])}
        >{props.children}</p>
    )
}


const Section = (props: React.HTMLAttributes<HTMLElement>) => {
    
    return (
        <section
            {...props}
            className={cn([
                'py-24',
                props.className
            ])}
        >
            {props.children}
        </section>
    )
}

export default Section