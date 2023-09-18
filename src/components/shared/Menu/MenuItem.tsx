import { cva } from 'class-variance-authority'
import Link from 'next/link'
import React from 'react'



const MenuItem = ({
    icon,
    lable,
}: {
    icon?: any,
    lable: string,
}) => {
    return (
        <div className='rounded-xl p-2 gap-2 flex items-center group hover:bg-primary hover:text-primary-foreground duration-200 transition-all  [&>*]:duration-200 [&>*]:transition-all'>
            <div className='bg-contain aspect-square group-hover:fill-primary-foreground fill-primary stroke-primary group-hover:stroke-primary-foreground flex items-center' >
                {icon}
            </div>
            <div><h3 className='text-slate-700 font-medium group-hover:text-primary-foreground col-span-2 leading-tight'>{lable}</h3></div>
        </div>
    )
}



export default MenuItem;