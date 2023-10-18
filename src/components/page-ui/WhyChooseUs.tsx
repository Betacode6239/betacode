import React, { ReactNode } from 'react'
import Image from 'next/image'
import { SectionTitle } from '../shared/Section'
import { Check } from 'lucide-react'

const WhyChooseUs = ({
    mainImage,
    title,
    items
}: {
    mainImage?: string,
    title?: ReactNode,
    items?: { title: string, desc: string }[],
}) => {
    return (
        <div className='container mx-auto'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center'>
                <div className='aspect-square relative'>
                    <Image src={mainImage || ''} alt={''} fill={true} />
                </div>

                <div className='space-y-5'>
                    <div className='flex justify-start '>
                        <SectionTitle className='text-gray-700'>{title}</SectionTitle>
                    </div>
                    <div className='space-y-5'>
                        {
                            items?.map(item => {
                                return <div className='space-y-1'>
                                    <div className='flex items-center gap-3'>
                                        <span className='inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary'>
                                            <Check className='w-4 h-4 text-primary-foreground' />
                                        </span>
                                        <h3 className='text-xl text-gray-700 font-bold'>{item.title}</h3>
                                    </div>
                                    <div>
                                        <p className='text-gray-500 text-lg'>{item.desc}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs