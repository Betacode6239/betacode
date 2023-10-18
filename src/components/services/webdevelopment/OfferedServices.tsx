import AnimatedGrid from '@/components/animated/AnimatedGrid'
import Section, { SectionHeader, SectionTitle } from '@/components/shared/Section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCheck, Square } from 'lucide-react'
import { nanoid } from 'nanoid'
import React from 'react'
import Slider from 'react-slick'

const OfferedServices = () => {
    const servicesOffered = [
        {
            title: "Custom Website Design",
            desc: "Unique web designs tailored to your brand and goals.",
            icon: <CheckCheck className='w-6 h-6 text-primary' />
        },
        {
            title: "Responsive Web Development",
            desc: "We create websites that look perfect on all devices.",
            icon: <CheckCheck className='w-6 h-6 text-primary' />
        },
        {
            title: "E-Commerce Website Development",
            desc: "Powerful online stores for selling products and services.",
            icon: <CheckCheck className='w-6 h-6 text-primary' />
        },
        {
            title: "Content Management Systems (CMS)",
            desc: "Easy-to-manage websites with user-friendly CMS systems.",
            icon: <CheckCheck className='w-6 h-6 text-primary' />
        },
        {
            title: "Website Maintenance and Support",
            desc: "Continuous support to keep your website running smoothly.",
            icon: <CheckCheck className='w-6 h-6 text-primary' />
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <Section>
            <SectionHeader className='flex items-center justify-center py-10'>
                <SectionTitle>Service We Offered</SectionTitle>
            </SectionHeader>

            <div className="container mx-auto">
                <Slider {...settings}>
                    {
                        servicesOffered.map(f => {
                            return <div key={nanoid()} className='px-3 py-5'>
                                <Card className='shadow-lg shadow-primary/20 border-primary/25'>
                                    <CardHeader>
                                        <div className="flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                                                {f.icon}
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent className='space-y-5'>
                                        <CardTitle className='text-center'>{f.title}</CardTitle>
                                        <CardDescription className='text-center'>{f.desc}</CardDescription>
                                    </CardContent>
                                </Card>
                            </div>
                        })
                    }
                </Slider>
            </div>
            {/* <AnimatedGrid
                items={
                    servicesOffered.map(f => {
                        return <div key={nanoid()}>
                            <Card className='shadow-lg shadow-primary/20 border-primary/25'>
                                <CardHeader>
                                    <div className="flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                                            {f.icon}
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className='space-y-5'>
                                    <CardTitle className='text-center'>{f.title}</CardTitle>
                                    <CardDescription className='text-center'>{f.desc}</CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    })
                }
            /> */}
        </Section>
    )
}

export default OfferedServices