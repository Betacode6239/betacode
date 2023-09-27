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
                'rounded-xl overflow-hidden shadow p-3 bg-white',
                props.className
            ])}
        >

            <div className="flex items-center justify-center">
                <div className='bg-center bg-no-repeat aspect-square bg-contain w-full max-w-[150px]' style={{ backgroundImage: `url(${props.data.image || ''})` }}></div>
            </div>

            <div className='space-y-3 flex flex-col justify-center py-5 px-2 text-center'>
                <h3 className='text-slate-700 text-lg font-bold '>{props.data.title}</h3>
                <p className='text-slate-500'>{props.data.text}</p>
            </div>

        </div>
    )
}

const FeaturesSection = () => {
    const [ref, inView] = useInView();
    const trails = useTrail(6, {
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
            text: 'Streamline your journey with our lightning-fast onboarding process. Get started in no time and experience the benefits right away.',
            image: '/assets/images/ill-1.png',
            color: 'bg-[#C9EDFF]'
        },
        {
            title: 'Industry Leading Success',
            text: 'Join the ranks of industry leaders who have achieved unparalleled success with our solutions. Be part of a winning team.',
            image: '/assets/images/ill-2.png',
            color: 'bg-[#FFE7DF]'
        },
        {
            title: 'Seamless Integration',
            text: 'Effortless integration into your existing systems. Our solutions seamlessly fit into your workflow, enhancing your operations.',
            image: '/assets/images/ill-3.png',
            color: 'bg-[#FEE1EB]'
        },
        {
            title: 'Simple Documenation',
            text: 'We believe in keeping things simple. Our documentation is easy to understand, making implementation a breeze. ',
            image: '/assets/images/ill-4.png',
            color: 'bg-[#DCF5F6]'
        },
        {
            title: 'Real-time Data Updates',
            text: 'Stay ahead with up-to-the-minute data. Our systems ensure you have the latest information at your fingertips.',
            image: '/assets/images/ill-5.svg',
            color: 'bg-[#DCF5F6]'
        },
        {
            title: 'Secure and Compliant',
            text: 'Your data, protected and compliant. We prioritize security and compliance so you can focus on what matters most.',
            image: '/assets/images/ill-6.png',
            color: 'bg-[#DCF5F6]'
        },
    ];
    return (
        <Section className='bg-right-top bg-no-repeat' style={{ backgroundImage: `url(${'/assets/images/shape-1.png'})` }}>
            <div className="container mx-auto">
                <div className=" mx-auto flex items-center justify-center">
                    <div className='max-w-xl text-center'>
                        <SectionTitle>Ignite Digital Success with Our Expertise</SectionTitle>
                        <SectionDescription className='text-base'>450+ customers for 600+ Web and Mobile App Development Projects.</SectionDescription>
                    </div>

                    {/* <div>
                        <SectionDescription>
                            We specialize in creating exceptional websites that elevate brands and drive digital success. Our team of experts combines creative flair with advanced technology to deliver captivating designs and seamless functionality.
                        </SectionDescription>
                    </div> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 " ref={ref}>
                    {
                        trails.map((trail, index) => {
                            return (
                                <animated.div key={nanoid()} style={trail}>
                                    <FeatureSectionCard key={nanoid()} className={``} data={cards[index]!} />
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