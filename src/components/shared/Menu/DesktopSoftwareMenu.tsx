import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import React from 'react'
import MenuItem from './MenuItem'
import { nanoid } from 'nanoid'
import { Button } from '../../ui/button'
import Link from 'next/link'

const Dot = () => {
    return (
        <div className='w-2 h-2 rounded-full bg-primary group-hover:bg-primary-foreground'></div>
    )
}

const ApiMenuContent = [
    {
        lable: 'Cab Booking Software',
        href: '/softwares',
        icon: <Dot/>
    },
    {
        lable: 'Food Delivery Software',
        href: '/softwares',
        icon: <Dot/>
    },
    {
        lable: 'Grocery Software',
        href: '/softwares',
        icon: <Dot/>
    },
    {
        lable: 'Home Service Software',
        href: '/softwares',
        icon: <Dot/>
    },
    {
        lable: 'Fantasy Sports Software',
        href: '/softwares',
        icon: <Dot/>
    },
    {
        lable: 'Sports Betting Software',
        href: '/softwares',
        icon: <Dot/>
    },
    {
        lable: 'School Management Software',
        href: '/softwares',
        icon: <Dot/>
    },
    {
        lable: 'CRM Software',
        href: '/softwares',
        icon: <Dot/>
    },
    {
        lable: 'HRMS Software',
        href: '/softwares',
        icon: <Dot/>
    },
    {
        lable: 'Employee Tracking Software',
        href: '/softwares',
        icon: <Dot/>
    },
    {
        lable: 'Ecommerce Portal',
        href: '/softwares',
        icon: <Dot/>
    },
    {
        lable: 'Online Education Software',
        href: '/softwares',
        icon: <Dot/>
    },
    {
        lable: 'Loan Module Software',
        href: '/softwares',
        icon: <Dot/>
    },
    {
        lable: 'Reseller Software',
        href: '/softwares',
        icon: <Dot/>
    },
    {
        lable: 'Travel Booking Software',
        href: '/softwares',
        icon: <Dot/>
    },
]

const DesktopSoftwareMenu = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Our Softwares</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="md:w-[400px] lg:w-[500px] gap-2 grid grid-cols-2">
                    {
                        ApiMenuContent.map(menu => {
                            return (
                               <Link href={menu.href} key={nanoid()}><MenuItem  {...menu} /></Link>
                            )
                        })
                    }
                </div>
            </CardContent>

            <CardFooter>
                <div className="flex justify-end w-full">
                <Button variant={'default'} size={'lg'}>Contact Us</Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default DesktopSoftwareMenu;