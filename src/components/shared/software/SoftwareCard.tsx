import EnquiryModel from '@/components/enquiry/EnquiryModel'
import EnquiryForm from '@/components/forms/EnquiryForm'
import SoftwareEnquiry from '@/components/forms/SoftwareEnquiry'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { SoftwareCodes } from '@/data/Softwares'
import { ArrowRight, MessageSquareDashed, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const SoftwareCard = ({
    name,
    description,
    image,
    code
}: {
    name: string,
    description?: string,
    image?: string,
    code: SoftwareCodes
}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="rounded-lg overflow-hidden max-w-xs shadow group hover:-translate-y-3 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20">
            <div className="aspect-video relative overflow-hidden bg-gray-50 p-2">
                <Image src={image || ''} className='group-hover:scale-105 transition-all duration-200' width={400} height={300} alt={name} placeholder='empty' />

            </div>

            <div className="p-4 space-y-3 relative">
                <h3 className='text-base font-bold capitalize line-clamp-2' >{name}</h3>
                <p className='text-gray-400 text-sm line-clamp-3'>{description}</p>
            </div>

            <div className=" flex justify-end px-4 pb-2">
                <EnquiryModel
                    isOpen={isOpen}
                    onClose={() => setIsOpen(pre => !pre)}
                    trigger={<Button variant={'ghost'}><ArrowRight /></Button>}
                    title='Api Enquiry'
                    form={<EnquiryForm
                        onDone={() => setIsOpen(false)}
                        className='border-none'
                        subForm={(form) => <SoftwareEnquiry form={form} config={{pinned: code}} />}
                    />}
                />
            </div>
        </div>
    )
}

export default SoftwareCard