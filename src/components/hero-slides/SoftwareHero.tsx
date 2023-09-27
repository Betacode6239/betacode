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
                'Elevate Your Business with Innovative Software Solutions for Growth', // Types 'One'
                3000, // Waits 1s
                'Elevate Your Business with Innovative Software Solutions for Innovation', // Deletes 'One' and types 'Two'
                3000, // Waits 2s
                'Elevate Your Business with Innovative Software Solutions for Efficiency', // Types 'Three' without deleting 'Two'
                3000
            ]}
            wrapper="h1"
            cursor={true}
            speed={1}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
            className='text-4xl font-bold'
        />
    );
}


const Tile = ({
    title,
    delay
}: {
    title: string,
    delay: number
}) => {
    const spring = useSpring({
        from: {
            y: -20
        },
        to: [{y:20}, {y: -20}],
        loop: true,
        delay: delay,
        config: {
            duration: 2000
        }
    })
    return (
        <animated.div style={{...spring}} className='p-2 rounded-xl border-primary border-2 backdrop-blur hover:scale-125 transition-all bg-white/20'>{title}</animated.div>
    )
}

const SoftwareHero = () => {
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
    <div className=' w-full bg-primary/60 text-white pt-32 pb-20' ref={ref}>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center container mx-auto justify-items-center gap-10'>
                <div className='space-y-2 max-w-lg'>
                    <animated.div style={trailes[0]!} className='min-h-[120px]'><HeroHeading /></animated.div>
                    <animated.p style={trailes[1]!}>Welcome to a new era of business efficiency and customer satisfaction. Our software solutions are engineered to propel your organization forward. From optimizing processes to enhancing user experiences, our suite of software can meet your every need. Explore the future of your industry with us.</animated.p>
                    
                    <animated.div style={trailes[2]!} className='flex gap-3 items-center pt-5'>
                        <WhatsappButton><Button size={'lg'} >Contact Us</Button></WhatsappButton>
                        <Link href="/softwares"><Button size={'lg'} >Our Softwares</Button></Link>
                    </animated.div>

                    <div className='flex gap-3 items-center pt-5'>
                        <Image src='/assets/images/hero-logo-1.png' alt="" width={136} height={40} />
                        <Image src='/assets/images/hero-logo-2.png' alt="" width={136} height={40} />
                    </div>
                </div>
                <div className='w-full'>
                    <div className='relative aspect-[2/1.5] z-10 overflow-hidden'>
                       <Image className='' alt="Softwares" src="/assets/images/software-hero-1.png" width={450} height={467}/>

                        {
                            tilesList.map((tile, index) => {
                                return <div key={nanoid()} className={cn([
                                    'absolute z-30',
                                    tile.className
                                ])}><Tile delay={index * 300} title={tile.title}/></div>
                            })
                        }
                        <div className="absolute bg-gradient-to-tr from-primary/20 to-primary w-[70%] h-[70%] -z-10 top-[50%] left-[50%] -translate-x-2/3 -translate-y-1/2" style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% '}}></div>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default SoftwareHero