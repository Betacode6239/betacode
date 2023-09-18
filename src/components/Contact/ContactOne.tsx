import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Phone, Mail, Locate } from 'lucide-react'
import { nanoid } from 'nanoid'
import ContactCard from '../shared/ContactCard'
import { SectionTitle } from '../shared/Section'
import AnimatedGrid from '../animated/AnimatedGrid'
import { api } from '@/utils/api'
import { GeneralSettingOutput } from '@/schema/settingSchema'



export const CCard = ({
    icon,
    content
}: {
    content: any,
    icon: any
}) => {
    return (
        <Card className='w-full '>
            <CardHeader>
                <div className='flex items-center justify-center'>
                    {icon}
                </div>
            </CardHeader>
            <CardContent>

                <div className='text-center text-muted-foreground '>
                    {content}
                </div>
            </CardContent>
        </Card>
    )
}

const ContactOne = () => {
    const {data} = api.setting.get.useQuery<any, GeneralSettingOutput>({type: 'GENERAL_SETTING'})
    const contents = [
        {
            icon: <Phone className='text-primary' />,
            content: <>
                <p>{data?.value.contact.phone||'-'}</p>
            </>
        },
        {
            icon: <Mail className='text-primary' />,
            content: <>
                <a className='text-muted-foreground' href={`mailto:${data?.value.contact.email||'#'}`}>{data?.value.contact.email||'-'}</a>
            </>
        },
        {
            icon: <Locate className='text-primary' />,
            content: <>
                <p>
                    {
                        `${data?.value.contact.address? data?.value.contact.address + ',':''}
                        ${data?.value.contact.city? data?.value.contact.city + ',':''}
                        ${data?.value.contact.country? data?.value.contact.country + ',':''}
                        ${data?.value.contact.pincode? '('+data?.value.contact.pincode + ')':''}
                        `
                    }
                </p>
            </>
        },
    ]
    return (
        <div>
            <div className='my-10 pb-10'>
                <SectionTitle className='text-center'>Contact Us</SectionTitle>
                <p className='text-muted-foreground text-center max-w-2xl mx-auto'>
                    We'd love to hear from you! Whether you have questions about our services, need assistance with integration, or want to explore collaboration opportunities, our team is here to help.
                </p>
            </div>
            <div className='flex flex-col gap-5'>

                <AnimatedGrid
                    items={
                        contents.map(content => {
                            return <CCard key={nanoid()} {...content} />
                        })
                    }
                    itemsPerRow={3}
                    rowClasses='md:grid-cols-3 lg:grid-cols-3 items-stretch'
                />

                <div>
                    <ContactCard />
                </div>
            </div>
        </div>
    )
}

export default ContactOne