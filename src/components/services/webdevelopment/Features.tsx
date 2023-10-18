import AnimatedGrid from '@/components/animated/AnimatedGrid'
import Section, { SectionHeader, SectionTitle } from '@/components/shared/Section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Square } from 'lucide-react'
import { nanoid } from 'nanoid'
import React from 'react'

const Features = () => {
    const features = [
        {
            title: 'Tailored Solutions',
            desc: 'Every website we create is a unique masterpiece, tailored to your specific business needs and goals.',
            icon: <Square className='w-6 h-6 text-primary' />
        },
        {
            title: 'Proven Expertise',
            desc: 'With years of experience, our team has a deep understanding of the latest web technologies and design trends.',
            icon: <Square className='w-6 h-6 text-primary' />
        },
        {
            title: 'Responsive Design',
            desc: 'Our websites are built to be responsive and mobile-friendly, ensuring a seamless experience across all devices.',
            icon: <Square className='w-6 h-6 text-primary' />
        },
        {
            title: 'Scalability',
            desc: 'We create websites that grow with your business, allowing for easy expansion and updates.',
            icon: <Square className='w-6 h-6 text-primary' />
        },

    ]
    return (
        <Section>
            <SectionHeader className='flex items-center justify-center'>
                <SectionTitle>Benefits of Choosing Us</SectionTitle>
            </SectionHeader>

           
                <AnimatedGrid
                items={
                    features.map(f => {
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
                />
        </Section>
    )
}

export default Features