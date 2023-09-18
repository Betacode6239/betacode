import React from 'react'
import SubscribeForm from './SubscribeForm'
import { nanoid } from 'nanoid'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Logo from './Logo'
import { api } from '@/utils/api'
import { GeneralSettingOutput } from '@/schema/settingSchema'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import { Button } from '../ui/button'

const MenuLinkGroup = ({
    title,
    links = [],
    children
}: {
    title: string,
    links?: { lable: string, url: string }[],
    children?: any
}) => {
    return (
        <div className='space-y-3'>
            <h3 className='font-bold text-base'>{title}</h3>

            <div className="flex flex-col">
                {
                    links.map(l => {
                        return <Link key={nanoid()} href={l.url} className='text-gray-300 hover:text-white transition-all capitalize text-sm' >{l.lable}</Link>
                    })
                }

                {children}
            </div>
        </div>
    )
}

const SocialLink = ({
    title,
    links,
    showTitle = false,
    className
}: {
    title: string,
    links: { lable: string, url: string, icon: any }[],
    showTitle?: boolean,
    className?: boolean
}) => {
    return (
        <div className={cn([
            'flex gap-2 flex-col',
            className
        ])}>

        </div>
    )
}



const Footer = () => {
    const { data } = api.setting.get.useQuery<any, GeneralSettingOutput>({ type: 'GENERAL_SETTING' });
    const socialLink = [
        {
            lable: 'Facebbook',
            icon: <FacebookIcon className='w-5 h-5 ' />,
            href: data?.value.socialLinks?.facebook || '#'
        },
        {
            lable: 'Twitter',
            icon: <TwitterIcon className='w-5 h-5 ' />,
            href: data?.value.socialLinks?.twitter || '#'
        },
        {
            lable: 'Instagram',
            icon: <InstagramIcon className='w-5 h-5 ' />,
            href: data?.value.socialLinks?.instagram || '#'
        },
        {
            lable: 'Linkedin',
            icon: <LinkedinIcon className='w-5 h-5 ' />,
            href: data?.value.socialLinks?.linkedIn || '#'
        },

    ]
    return (
        <footer className='bg-[#010423] py-24 text-white'>
            <div className="container mx-auto">
                <div className='rounded-lg bg-primary shadow shadow-primary p-2 grid grid-cols-1 md:grid-cols-3'>
                    <div className="col-auto md:col-span-2 text-3xl text-primary-foreground font-bold">
                        Grow Your Business fast with BetaCode
                    </div>

                    <div className='col-auto'>
                        <SubscribeForm />
                    </div>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-10 pt-10'>
                    <div>
                        <Logo />
                        <p className='text-sm font-light text-muted-foreground leading-tight max-w-sm'>Connect with Us Today and Unlock Digital Success. Our team is ready to assist you with your project requirements and provide tailored solutions to propel your business forward.</p>
                    </div>
                    <MenuLinkGroup
                        title='Links'
                        links={[
                            { lable: 'Home', url: '#' },
                            { lable: 'Api Services', url: '#' },
                            { lable: 'Services', url: '#' },
                            { lable: 'Softwares', url: '#' },
                            { lable: 'Healp', url: '#' },
                        ]}
                    />
                    <MenuLinkGroup
                        title='Company'
                        links={[
                            { lable: 'About Us', url: '#' },
                            { lable: 'Contact Us', url: '#' },
                            { lable: 'Privacy Policy', url: '#' },
                            { lable: 'Terms & Conditions', url: '#' },
                            { lable: 'Reafund Policy', url: '#' },
                        ]}
                    />
                    <MenuLinkGroup title='Contact'>

                        <p>
                            {
                                `${data?.value.contact.address ? data?.value.contact.address + ',' : ''}
                                ${data?.value.contact.city ? data?.value.contact.city + ',' : ''}
                                ${data?.value.contact.country ? data?.value.contact.country + ',' : ''}
                                ${data?.value.contact.pincode ? '(' + data?.value.contact.pincode + ')' : ''}
                                `
                            }
                        </p>

                        <div className="flex items-center gap-3 mt-3 flex-wrap">
                            {
                                socialLink.map(sl => {
                                    return <a key={nanoid()} target='_blank' href={sl.href}><Button className='text-gray-500' variant={'ghost'} size={'sm'}>{sl.icon}</Button></a>
                                })
                            }
                        </div>
                    </MenuLinkGroup>
                </div>
            </div>
        </footer>
    )
}

export default Footer