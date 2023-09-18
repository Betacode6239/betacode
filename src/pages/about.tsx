import Hero from '@/components/landing/Hero'
import Section, { SectionTitle } from '@/components/shared/Section'
import TestimonialSection from '@/components/shared/TestimonialSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import React from 'react'

const AboutHero = () => {
    return (
        <div className=' w-full bg-[#010423] text-white py-32'>

            <div className='grid grid-cols-1 md:grid-cols-2 items-center container mx-auto justify-items-center gap-10'>
                <div className='space-y-2 max-w-lg'>
                    <h1 className='leading-tight text-5xl font-bold'>About Us</h1>
                    <p>Discover the limitless potential of our comprehensive API services. Seamlessly integrate our Recharge API, AEPS API, BBPS API, Bus Booking API, Vehicle Verification API, UTI API, Hotel Booking API, Flight Booking API, and more into your applications.</p>

                    <div className='flex gap-3 items-center pt-5'>
                        <Button size={'lg'} >Contact Us</Button>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='aspect-video w-full bg-center bg-contain bg-no-repeat' style={{ backgroundImage: `url(/assets/images/about.svg)` }}></div>
                </div>

            </div>
        </div>
    )
}


const WhatSetsUsApart = () => {

    const contents = [
        {
            title: 'Expertise',
            desc: 'Our team comprises industry professionals who bring extensive expertise to the table, ensuring the highest quality solutions.'
        },
        {
            title: 'Innovation',
            desc: 'We are constantly pushing boundaries, exploring new technologies, and staying ahead of industry trends.'
        },
        {
            title: 'Customer-Centric',
            desc: 'Your success is our success. We are dedicated to understanding your unique needs and delivering solutions that exceed your expectations.'
        },
        {
            title: 'Security',
            desc: 'We prioritize the security and privacy of your data, implementing stringent measures to ensure your transactions are secure.'
        },
    ];

    const CardComp = ({
        title,
        desc
    }: {
        title: string,
        desc: string
    }) => {
        return (
            <Card className='pt-5'>
                <CardHeader>
                    <CardTitle className='text-lg'>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>{desc}</CardDescription>
                </CardContent>
            </Card>
        )
    }
    return (
        <div className='grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
                contents.map(content => {
                    return (
                        <CardComp key={nanoid()} {...content} />
                    )
                })
            }
        </div>


    )
}




const AboutPage = () => {
    return (
        <>
            <AboutHero />

            <section className='bg-primary/5'>
                <div className='container mx-auto py-24 grid grid-cols-1 md:grid-cols-2 justify-center md:justify-normal gap-5 items-center '>
                    <div className=''>
                        <div className='max-w-xl'>
                            <SectionTitle>Who We Are</SectionTitle>
                            <p>
                                At Betacode, we are at the forefront of driving innovation in the FinTech industry. Our journey began with a vision to revolutionize digital finance, and today, we stand as a leading provider of cutting-edge API solutions and digital services. With a dedicated team of experts, we are committed to delivering transformative solutions that empower businesses and individuals alike.
                            </p>
                        </div>
                    </div>

                    <div className=''>
                        <div className='max-w-xl'>
                            <SectionTitle>Our Mission</SectionTitle>
                            <p>
                                Our mission is to empower the world of finance with innovative technology. We strive to provide businesses with the tools they need to succeed in the rapidly evolving digital landscape. By offering comprehensive API services and tailored digital solutions, we aim to facilitate seamless transactions, enhance user experiences, and drive growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT SETS US APART */}
            <Section>
                <SectionTitle className='text-center mb-10'>What Sets Us Apart?</SectionTitle>
                <div className='container mx-auto'>
                    <WhatSetsUsApart />
                </div>
            </Section>

            <TestimonialSection/>
            
        </>
    )
}

export default AboutPage