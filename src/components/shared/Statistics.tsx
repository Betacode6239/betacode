import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useInView, useSpring, animated } from '@react-spring/web'
import { nanoid } from 'nanoid'
// import AnimatedNumbers from "react-animated-numbers";
const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), { ssr: false })

const StatisticsCard = ({
    num,
    numText,
    children
}: {
    num: number,
    children: any,
    numText: string
}) => {


    return (
        <div className=' text-primary font-black inline-flex flex-col items-center gap-2'>
            <div className='flex text-5xl' >
                <AnimatedNumbers
                    includeComma
                    animateToNumber={num}
                    fontStyle={{ fontSize: 48 }}
                    locale="en-US"
                    configs={[
                        { mass: 1, tension: 220, friction: 100 },
                        { mass: 1, tension: 180, friction: 130 },
                        { mass: 1, tension: 280, friction: 90 },
                        { mass: 1, tension: 180, friction: 135 },
                        { mass: 1, tension: 260, friction: 100 },
                        { mass: 1, tension: 210, friction: 180 },
                    ]}
                ></AnimatedNumbers>
                {numText}
            </div>

            <div className='text-xl font-normal text-muted-foreground'>
                {children}
            </div>

        </div>
    )
}

const Statistics = () => {
    const [ref, springs] = useInView(() => ({
        from: {
            scale: 0.7,
            opacity: 0
        },
        to: {
            scale: 1,
            opacity: 1
        },
        delay: 5000
    })
    );

    const statistics = [
        { num: 2000, numText: '+', extra: 'Satisfied clients' },
        { num: 1000, numText: '+', extra: 'Active Softwares' },
        { num: 95, numText: '%', extra: 'Client Retanion' },
        { num: 5, numText: '', extra: 'Star Rating' },
    ]



    return (
        <animated.div style={{ ...springs }} ref={ref} className='container rounded-xl bg-primary/5 p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-center justify-center'>
            {
                statistics.map(st => {
                    return (
                        <StatisticsCard key={nanoid()} num={st.num!} numText={st.numText}>{st.extra}</StatisticsCard>
                    )
                })
            }
        </animated.div>

    )
}

export default Statistics