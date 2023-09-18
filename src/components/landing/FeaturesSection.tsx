import React from 'react'
import Section, { SectionDescription, SectionTitle } from '../shared/Section'
import { cn } from '@/lib/utils'
import { nanoid } from 'nanoid'
import { useInView, useTrail, animated } from '@react-spring/web'

export type FeatureSectionCardProps = {
    data: {
        title: string,
        text?: string,
        image?: string,
        color?: string
    }
} & React.HTMLAttributes<HTMLDivElement>

const FeatureSectionCard = (props: FeatureSectionCardProps) => {
    return (
        <div
            className={cn([
                'rounded-xl overflow-hidden grid grid-cols-3 md:grid-cols-2 gap-2 md:gap-5',
                props.className
            ])}
        >

            <div className='bg-center bg-no-repeat aspect-square bg-contain ' style={{ backgroundImage: `url(${props.data.image || ''})` }}></div>

            <div className='space-y-3 flex flex-col justify-center py-5 px-2 col-span-2 md:col-auto'>
                <h3 className='text-slate-700 text-lg font-bold '>{props.data.title}</h3>
                <p className='text-slate-500'>{props.data.text}</p>
            </div>

        </div>
    )
}

const FeaturesSection = () => {
    const [ref, inView] = useInView();
    const trails = useTrail(4, {
        scale: inView ? 1 : 0.5,
        opacity: inView ? 1 : 0,
        from: {
            scale: 0,
            opacity: 0,
        }
    });

    const cards = [
        {
            title: 'Quick On-Boarding',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ',
            image: '/assets/images/ill-1.png',
            color: 'bg-[#C9EDFF]'
        },
        {
            title: 'Industry Leading Success',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ',
            image: '/assets/images/ill-2.png',
            color: 'bg-[#FFE7DF]'
        },
        {
            title: 'Seamless Integration',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ',
            image: '/assets/images/ill-3.png',
            color: 'bg-[#FEE1EB]'
        },
        {
            title: 'Simple Documenation',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ',
            image: '/assets/images/ill-4.png',
            color: 'bg-[#DCF5F6]'
        },
    ];
    return (
        <Section className='bg-right-top bg-no-repeat' style={{ backgroundImage: `url(${'/assets/images/shape-1.png'})` }}>
            <div className="container mx-auto">
                <div className=" mx-auto grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <SectionTitle>Ignite Digital Success with Our Expertise</SectionTitle>
                        <SectionDescription className='text-base'>450+ customers for 600+ Web and Mobile App Development Projects.</SectionDescription>
                    </div>

                    <div>
                        <SectionDescription>
                            We specialize in creating exceptional websites that elevate brands and drive digital success. Our team of experts combines creative flair with advanced technology to deliver captivating designs and seamless functionality.
                        </SectionDescription>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 " ref={ref}>
                    {
                        trails.map((trail, index) => {
                            return(
                                <animated.div key={nanoid()} style={trail}>
                                    <FeatureSectionCard key={nanoid()} className={`${cards[index]!.color}`} data={cards[index]!} />
                                </animated.div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </Section>
    )
}

export default FeaturesSection