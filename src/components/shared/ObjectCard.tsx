import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, MessageSquareDashed, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ObjectCard = ({
    name,
    description,
    image,
    href,
    action
}: {
    name: string,
    description?: string,
    image?: string,
    href?: string,
    action?: any
}) => {



    return (
        <div className="rounded-lg overflow-hidden max-w-xs shadow group hover:-translate-y-3 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20">
            <div className="aspect-video relative overflow-hidden bg-gray-50 p-2">
                <Image src={image||''} className='' width={400} height={300} alt={name} placeholder='empty' />
            </div>

            <div className="p-4 space-y-3 relative">
                <span className='absolute top-0 -translate-y-1/2 right-4'>
                    {
                        action 
                    }
                </span>
                <h3 className='text-base font-bold capitalize line-clamp-2' >{name}</h3>
                <p className='text-gray-400 text-sm line-clamp-3'>{description}</p>
            </div>

            <div className=" flex justify-end px-4 pb-2">
                <Link href={href||'#'}>
                    <Button variant={'ghost'}><ArrowRight /></Button>
                </Link>
            </div>
        </div>
    )
}

export default ObjectCard