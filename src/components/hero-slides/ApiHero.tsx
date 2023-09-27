import React, { useEffect, useRef, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Button } from '../ui/button';
import EditorPanel from '../codeEditor/EditorPanel';
import EditorFrame from '../codeEditor/EditorFrame';
import Image from 'next/image';

import { useSpring, animated } from '@react-spring/web'
import WhatsappButton from '../shared/WhatsappButton';
import Link from 'next/link';

const HeroHeading = () => {
    return (
        <TypeAnimation
            sequence={[
                'Unleash the Power of APIs for Your Business Success with Recharge API', // Types 'One'
                1000, // Waits 1s
                'Unleash the Power of APIs for Your Business Success with AEPS API', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Unleash the Power of APIs for Your Business Success with BBPS API', // Types 'Three' without deleting 'Two'
            ]}
            wrapper="h1"
            cursor={true}
            speed={10}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
            className='text-4xl font-bold'
        />
    );
}

const ApiHero = () => {
    const springs = useSpring({
        from: { y: -100, opacity: 0 },
        to: [{ y: 0, opacity: 1 }]
    })



    return (
        <div className=' w-full bg-[#010423] text-white pt-32 py-20'>
            <div className='grid grid-cols-1  lg:grid-cols-2 items-center container mx-auto justify-items-center gap-10'>
                <div className='space-y-2 max-w-lg'>
                    <div className='min-h-[100px]' ><HeroHeading /></div>
                    <p>Discover the limitless potential of our comprehensive API services. Seamlessly integrate our Recharge API, AEPS API, BBPS API, Bus Booking API, Vehicle Verification API, UTI API, Hotel Booking API, Flight Booking API, and more into your applications.</p>

                    <div className='flex gap-3 items-center pt-5'>
                        <WhatsappButton><Button size={'lg'} >Contact Us</Button></WhatsappButton>
                        <Link href={'/our-apis'}><Button size={'lg'} >Our Api List</Button></Link>
                    </div>

                    <div className='flex gap-3 items-center pt-5'>
                        <Image src='/assets/images/hero-logo-1.png' alt="" width={136} height={40} />
                        <Image src='/assets/images/hero-logo-2.png' alt="" width={136} height={40} />
                    </div>
                </div>
                <div className='w-full '>
                    <animated.div className={'aspect-[2/1.5]'} style={{ ...springs }}>
                        <EditorFrame className='shadow-2xl shadow-primary'>
                            <EditorPanel />
                        </EditorFrame>
                    </animated.div>
                </div>

            </div>
        </div>
    )
}

export default ApiHero