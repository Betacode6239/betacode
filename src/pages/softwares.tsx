import PageHeader from '@/components/shared/PageHeader'
import React from 'react'
import Image from 'next/image'
import { nanoid } from 'nanoid'
import { Check } from 'lucide-react'
import TestimonialSection from '@/components/shared/TestimonialSection'
import ContactSection from '@/components/shared/ContactSection'
import ObjectCard from '@/components/shared/ObjectCard'
import { useTrail, animated, useInView } from '@react-spring/web'
import { cn, groupIntoRows } from '@/lib/utils'
import { SoftwareCodes, SoftwareList } from '@/data/Softwares'
import SoftwareCard from '@/components/shared/software/SoftwareCard'





const reasons = [
    'Innovation at its Core',
    'Tailored to Your Needs',
    'User-Centric Design',
    'Proven Results',
    'Robust Support and Training',
    'Scalability and Flexibility'
]


const groupedSoftwareList = groupIntoRows(SoftwareList, 4);


const Row = ({
    items,
    className
}: {
    items: {
        name: string;
        description: string;
        image?: string;
        href: string;
        code: SoftwareCodes
    }[],
    className?: string
}) => {
    const [ref, inView] = useInView()
    const trails = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: inView ? 1 : 0,
        y: inView ? 0 : -50,
        from: { opacity: 0, y: -50 }
    })

    return (
        <div ref={ref} className={cn([
            'container mx-auto grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3',
            className
        ])}>

            {
                trails.map((trail, index) => {
                    return <animated.div style={trail}><SoftwareCard key={nanoid()} {...items[index]!} /></animated.div>
                })
            }

        </div>
    )
}


const SoftwaresPage = () => {

    const [ref, inView] = useInView();
    const trails2 = useTrail(6, {
        x: inView ? 0 : -50,
        opacity: inView ? 1 : 0,
        from: {
            x: -50,
            opacity: 0
        }
    });
    
   
    return (
        <>
            <PageHeader title='Our Softwares' />
            <section className='py-24 bg-primary/5'>
                <div className="grid grid-cols-1 lg:grid-cols-5 container mx-auto gap-10 lg:gap-5" ref={ref}>
                    <div className='lg:col-span-2 space-y-3'>
                        <div className="space-y-3 max-w-md mx-auto">
                            <h2 className='text-4xl text-center lg:text-left font-bold'>Why Choose Our Softwares</h2>
                            <p className='text-muted-foreground text-center lg:text-left'>
                                Make the smart choice for your business. Choose our software solutions and experience the difference that innovation, customization, and dedicated support can make in achieving your goals.
                            </p>
                            <div className='space-y-1 grid lg:grid-cols-1 md:grid-cols-2 items-center justify-center'>
                                {
                                    trails2.map((trail, index) => {
                                        return (
                                            <animated.div style={{...trail}} key={nanoid()} className='rounded-lg p-3  flex items-center gap-3 overflow-hidden'>
                                                <span className='rounded bg-primary'> <Check className='text-white'/></span>
                                                <h3 className='text-lg font-bold text-primary capitalize'>{reasons[index]}</h3>
                                            </animated.div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </div>
                    <div className='relative aspect-video lg:col-span-3'>
                        <div className='absolute top-0 right-0 w-3/4 overflow-hidden rounded-lg border-[10px] border-white'>
                            <div className="rounded-lg overflow-hidden ">
                                <Image alt='' width={1000} height={700} src={'/assets/images/software-2.jpg'} />
                            </div>
                        </div>
                        <div className='absolute bottom-0 left-0 w-1/2 overflow-hidden rounded-lg border-[10px] border-white'>
                            <div className="rounded-lg overflow-hidden">
                                <Image alt='' width={1000} height={700} src={'/assets/images/software-1.jpg'} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-24 px-5 space-y-3'>
                {
                    groupedSoftwareList.map(item => {
                        return <Row items={...item}/>
                    })
                }
            </section>

            <TestimonialSection />
            <ContactSection />
        </>
    )
}

export default SoftwaresPage