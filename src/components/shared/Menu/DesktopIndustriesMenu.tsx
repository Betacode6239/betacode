import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import React from 'react'
import MenuItem from './MenuItem'
import { nanoid } from 'nanoid'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Button } from '../../ui/button'
import Link from 'next/link'

const Dot = () => {
    return (
        <div className='w-2 h-2 rounded-full bg-primary group-hover:bg-primary-foreground'></div>
    )
}

const ApiMenuContent = [
    {
        lable: 'Neo Banking',
        href: '#',
        icon: <Dot />
    },
    {
        lable: 'Stock Market',
        href: '#',
        icon: <Dot />
    },
    {
        lable: 'Manufacturing and E-Commerce',
        href: '#',
        icon: <Dot />
    },
    {
        lable: 'Transportation & Logistics',
        href: '#',
        icon: <Dot />
    },
    {
        lable: 'Healthcare',
        href: '#',
        icon: <Dot />
    },
    {
        lable: 'Household',
        href: '#',
        icon: <Dot />
    },
    {
        lable: 'Media & Entertainement',
        href: '#',
        icon: <Dot />
    },
    {
        lable: 'Education',
        href: '#',
        icon: <Dot />
    },
    {
        lable: 'Automotive',
        href: '#',
        icon: <Dot />
    },
    {
        lable: 'Tarvel & Hospitality',
        href: '#',
        icon: <Dot />
    },
    {
        lable: 'Gaming',
        href: '#',
        icon: <Dot />
    },
    {
        lable: 'Real Estate',
        href: '#',
        icon: <Dot />
    },
    {
        lable: 'Corporate',
        href: '#',
        icon: <Dot />
    },
    {
        lable: 'Food & Beverages',
        href: '#',
        icon: <Dot />
    },
    {
        lable: 'Sales and Marketing',
        href: '#',
        icon: <Dot />
    },
]

const DesktopIndustriesMenu = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Our Softwares</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="md:w-[400px] lg:w-[500px]  grid grid-cols-2 items-center justify-center">
                    {
                        ApiMenuContent.map(menu => {
                            return (
                                <Link key={nanoid()} href={menu.href}><MenuItem  {...menu} /></Link>
                            )
                        })
                    }
                </div>
            </CardContent>

            <CardFooter className=''>
                <div className="flex justify-end w-full ">
                    <Button variant={'default'} size={'lg'}>Contact Us</Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default DesktopIndustriesMenu;