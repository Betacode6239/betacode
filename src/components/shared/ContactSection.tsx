import React, { ReactNode } from 'react'
import Section, { SectionDescription, SectionTitle } from './Section'
import Rating from './Rating'
import ContactCard from './ContactCard'
import { useInView, useTrail, animated } from '@react-spring/web'
import { cn } from '@/lib/utils'
import EnquiryForm from '../forms/EnquiryForm'


export const ReviewCard = () => {
    return (
        <div className='rounded-xl p-4 bg-primary text-white space-y-3 max-w-lg md:-rotate-12 md:translate-y-10'>
            <Rating rating={4} filledColor='#fff'></Rating>
            <p className=''>Working with Betacode has been a game-changer for our business. Their expertise in website development and digital marketing has significantly boosted our online presence. The team's attention to detail, creativity, and prompt delivery have exceeded our expectations. I highly recommend Betacode for anyone looking to elevate their digital strategy.</p>
            <div className='flex items-center gap-5 '><span className='font-bold'>Mahesh Kushwaha</span></div>

        </div>
    )
}

const ContactSection = ({
    contactForm
}: {
    contactForm?: ReactNode
}) => {
    const [ref, inView] = useInView();
    const [cardRef, spring] = useInView(() => ({
        from: {
            scale: 0.7,
            opacity: 0,
            y: -50
        },
        to: {
            scale: 1,
            opacity: 1,
            y: 0
        }
    }))
    const leftTrails = useTrail(3, {
        y: inView ? 0 : -50,
        opacity: inView ? 1 : 0,
        from: {
            y: -50,
            opacity: 0
        }
    })
    return (
        <Section className='py-24 bg-primary/20' >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto container">
                <div className={cn([
                    'space-y-5',
                ])} ref={ref} >
                    <animated.div style={leftTrails[0]}><SectionTitle className='text-black'>Love To Hear From You Get In Touch</SectionTitle></animated.div>
                    <animated.div style={leftTrails[1]}>
                        <SectionDescription className='font-light leading-relaxed'>
                            Connect with Us Today and Unlock Digital Success. Our team is ready to assist you with your project requirements and provide tailored solutions to propel your business forward.
                        </SectionDescription>
                    </animated.div>
                    <animated.div style={leftTrails[2]}>
                    <ReviewCard />
                    </animated.div>
                </div>
                <div className=''>
                    <div className='mx-auto max-w-md'>
                        {
                            contactForm || <animated.div ref={cardRef} style={{...spring}} >
                                <EnquiryForm/>
                            </animated.div>
                        }
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default ContactSection