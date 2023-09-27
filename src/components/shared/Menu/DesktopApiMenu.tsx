import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import MenuItem from './MenuItem'
import { nanoid } from 'nanoid'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useInView, useTrail, animated} from '@react-spring/web'
import { apiList } from '@/data/ApiData'

const Dot = () => {
    return (
        <div className='w-2 h-2 rounded-full bg-primary group-hover:bg-primary-foreground'></div>
    )
}

const ApiMenuContent = apiList.map(api => ({lable: api.name, href: api.href, icon: <Dot/>}))

const DesktopApiMenu = () => {
    const [ref, inView] = useInView();
    const trailes = useTrail(ApiMenuContent.length, {
        y: inView ? 0 : -10,
        opacity: inView ? 1 : 0,
        from: {
            y: -10,
            opacity: 0,
        },
        config: {duration: 100}
    })
    return (
        <Card>
            <CardHeader>
                <CardTitle>API Services</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="md:w-[400px] lg:w-[500px] gap-2 grid grid-cols-2" ref={ref}>
                    {
                        trailes.map((trail, index) => {
                            return (
                                <animated.div key={nanoid()} style={{...trail}}><Link href={ApiMenuContent[index]!.href || '#'}> <MenuItem  {...ApiMenuContent[index]!} /></Link></animated.div>
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

export default DesktopApiMenu