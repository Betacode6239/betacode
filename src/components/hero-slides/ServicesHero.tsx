import React from 'react'
import { Button } from '../ui/button'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'
import { cn } from '@/lib/utils';
import { nanoid } from 'nanoid';
import { useSpring, animated, useTrail, useInView } from '@react-spring/web';
import WhatsappButton from '../shared/WhatsappButton';
import Link from 'next/link';

const HeroHeading = () => {
    return (
        <TypeAnimation
            sequence={[
                'Powering Your Digital Success with Web Development', // Types 'One'
                3000, // Waits 1s
                'Powering Your Digital Success with App Development', // Deletes 'One' and types 'Two'
                3000, // Waits 2s
                'Powering Your Digital Success with API Development', // Types 'Three' without deleting 'Two'
                3000
            ]}
            wrapper="h1"
            cursor={true}
            speed={10}
            repeat={Infinity}
            style={{  display: 'inline-block' }}
            className='text-4xl font-bold'
        />
    );
}


const ServicesHero = () => {
    const [ref, inView] = useInView();
    const trailes = useTrail(3, {
        y: inView ? -50 : 0,
        opacity: inView ? 1 : 0,
        from: {
            y: -50,
            opacity: 0
        }
    })
    const tilesList = [
        {title: 'Cab Software', className: 'left-[10%] top-[10%]'},
        {title: 'Grocery Software', className: 'right-[10%] top-[10%]'},
        {title: 'CRM Software', className: 'left-[30%] bottom-[30%]'},
        {title: 'E-Commerce Software', className: 'right-[20%] bottom-[10%]'},
        {title: 'Reseller Software', className: 'left-[10%] bottom-[50%]'}
    ]
  return (
    <div className=' w-full  text-black bg-gray-100 pb-32 pt-44' ref={ref}>

            <div className='grid grid-cols-1 lg:grid-cols-2 items-center container mx-auto justify-items-center gap-10'>
                <div className='space-y-2 max-w-lg'>
                    <animated.div style={trailes[0]!} className='min-h-[150px] md:min-h-[100px]'><HeroHeading /></animated.div>
                    <animated.p style={trailes[1]!}>Discover the limitless potential of our comprehensive API services. Seamlessly integrate our Recharge API, AEPS API, BBPS API, Bus Booking API, Vehicle Verification API, UTI API, Hotel Booking API, Flight Booking API, and more into your applications.</animated.p>

                    <animated.div style={trailes[2]!} className='flex gap-3 items-center pt-5'>
                        <WhatsappButton><Button size={'lg'}>Contact Us</Button></WhatsappButton>
                        <Link href="/service"><Button size={'lg'}>View Our Services</Button></Link>
                    </animated.div>

                    <div className='flex gap-3 items-center pt-5'>
                        <Image src='/assets/images/hero-logo-1.png' alt="" width={136} height={40} />
                        <Image src='/assets/images/hero-logo-2.png' alt="" width={136} height={40} />
                    </div>
                </div>
                <div className='w-full'>
                    <div className='relative aspect-[2/1.5] z-10 overflow-hidden'>
                       <div className='z-30'> <Image className='' alt="Softwares" src="/assets/images/services-hero.svg" width={1000} height={667}/></div>
                        <div className="absolute bg-gradient-to-tr from-primary/20 to- w-[70%] h-[70%] -z-10 top-[50%] left-[50%] -translate-x-2/3 -translate-y-1/2" style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% '}}></div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ServicesHero