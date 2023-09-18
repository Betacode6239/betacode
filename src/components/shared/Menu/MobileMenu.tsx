import React, { PropsWithChildren, useContext, useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { nanoid } from 'nanoid'
import Link from 'next/link'
import { ChevronDown, ChevronRight, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/router'
import { Button } from '@/components/ui/button'
import { Cross2Icon } from '@radix-ui/react-icons'
import { MobileMenuContext } from '@/lib/context/mobile-menu/MobileMenuContext'
import WhatsappButton from '../WhatsappButton'
import { api } from '@/utils/api'
import { GeneralSettingOutput } from '@/schema/settingSchema'

type m = {
    lable: string,
    href: string,
    child?: m[]
}

const ItemContent = (props: {
    hasChild?: boolean,
    isOpen?: boolean,
    active?: boolean
} & PropsWithChildren) => {

    return (
        <div className={cn([
            'p-2 w-full flex items-center justify-between transition-all text-gray-500',
            { 'text-primary': props.active }
        ])}>
            <span>{props.children}</span>

            {
                props.hasChild &&
                <span>
                    {
                        props.isOpen ? <ChevronDown className='w-4 h-4' /> : <ChevronRight className='w-4 h-4' />
                    }
                </span>

            }

        </div>
    )
}

const Item = ({ data }: {
    data: m
}) => {
    const [open, setOpen] = useState(false);
    const { asPath } = useRouter();
    if (data.child && data.child.length > 0) {
        return (
            <Collapsible onOpenChange={setOpen} open={open} className='w-full'>
                <CollapsibleTrigger asChild>
                    <div><ItemContent hasChild isOpen={open}>{data.lable}</ItemContent></div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    {
                        data.child.map(d => {
                            return <Item key={nanoid()} data={d} />
                        })
                    }
                </CollapsibleContent>
            </Collapsible>
        )
    }
    return (
        <Link href={data.href} className=''><ItemContent active={asPath === data.href}>{data.lable}</ItemContent></Link>
    )
}

const MobileMenu = ({
    menu
}: {
    menu: m[]
}) => {
    const { drawerOpen, setDrawerOpen } = useContext(MobileMenuContext);
    const {data, isLoading} = api.setting.get.useQuery<any, GeneralSettingOutput>({type: 'GENERAL_SETTING'});

    const socialLink = [
        {
            lable: 'Facebbook',
            icon: <FacebookIcon className='w-5 h-5 ' />,
            href: data?.value.socialLinks?.facebook||'#'
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
        <div className='space-y-5 p-2  h-full relative '>
            <div className='p-2 flex items-center justify-between'>
                <span className='text-2xl font-bold text-primary'>BT</span>

                <Button variant={'outline'} size={'sm'} onClick={() => setDrawerOpen(false)}><Cross2Icon /></Button>
            </div>
            <div className="space-y-2">
                {
                    menu.map(item => {
                        return <Item data={item} key={nanoid()} />
                    })
                }
            </div>

            <div className='flex items-center justify-center gap-3'>
                <Button>Contact</Button>
                <WhatsappButton/>
            </div>


            <div className="absolute bottom-0 left-0 w-full p-2 flex justify-around">
                
                {
                    socialLink.map(sl => {
                        return <a key={nanoid()} target='_blank' href={sl.href}><Button className='text-gray-500' variant={'ghost'} size={'sm'}>{sl.icon}</Button></a>
                    })
                }
            </div>
        </div>


    )
}

export default MobileMenu