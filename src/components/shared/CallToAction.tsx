import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { useInView, useTrail, animated } from '@react-spring/web'
import { nanoid } from 'nanoid'
import EnquiryModel from '../enquiry/EnquiryModel'
import EnquiryForm from '../forms/EnquiryForm'


const Statement = ({
    statement
}: {
    statement: string
}) => {
    return (
        <div className='flex items-center gap-3'>
            <Check className='w-6 h-6 text-primary' />
            <p className='text-lg text-muted-foreground'>{statement}</p>
        </div>
    )
}

const CallToAction = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [ref, inView] = useInView();
    const leftTrails = useTrail(3, {
        y: inView ? 0 : -50,
        opacity: inView ? 1 : 0,
        from: {
            opacity: 0,
            y: -50
        }
    });
    const rightTrails = useTrail(3, {
        x: inView ? 0 : -50,
        opacity: inView ? 1 : 0,
        from: {
            opacity: 0,
            x: -50
        }
    });
    const statments = [
        'Explore our comprehensive API offerings',
        'Discuss your project requirements',
        'Receive personalized solutions tailored to your needs'
    ]
    return (

        <section className='py-24 px-4 bg-primary/5'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 justify-center gap-5'>
                <div className='space-y-10'>
                    <div className=' max-w-2xl' ref={ref}>
                        <animated.div style={leftTrails[0]}><h2 className='text-5xl font-bold mb-3'>Ready to Transform Your FinTech Vision into Reality?</h2></animated.div>
                        <animated.div style={leftTrails[1]}>
                            <p>
                                Join us on this exciting journey of innovation and possibilities. Elevate your FinTech offerings with our cutting-edge API services and digital solutions. Let's collaborate to create a seamless digital experience that empowers your users and sets your platform apart.
                            </p>
                        </animated.div>
                    </div>
                    <animated.div style={leftTrails[2]}>
                        <EnquiryModel
                            isOpen={isOpen}
                            onClose={() => setIsOpen(pre => !pre)}
                            trigger={<Button>Get Started</Button>}
                            title='Get Started'
                            form={<EnquiryForm
                                className='border-none'
                                onDone={() => {
                                    setIsOpen(pre => !pre);
                                }}
                            />}
                        />
                    </animated.div>
                </div>

                <div className='  border-l border-primary px-5 flex flex-col justify-center'>
                    <div className='space-y-3'>
                        {
                            rightTrails.map((trail, index) => {
                                return <animated.div style={{ ...trail }} key={nanoid()}>
                                    <Statement statement={statments[index]!} />
                                </animated.div>
                            })
                        }
                        {/* {
                            statments.map(st => {
                                return (
                                    <Statement statement={st} />
                                )
                            })
                        } */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction