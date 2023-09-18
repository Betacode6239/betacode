/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { PropsWithChildren, ReactElement, ReactNode } from 'react'
import Logo from './Logo'
import { LayoutDashboard, MessageCircle, SettingsIcon, Users2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { cn } from '@/lib/utils'
import { nanoid } from 'nanoid'


const SidebarLink = ({
    link,
    icon,
    children
}: PropsWithChildren<{
    link: string,
    icon?: ReactElement<any>
}>) => {
    const router = useRouter();
    const checkActive = () => {
        return router.asPath === link
    }
    return (
        <Link href={link} className={cn([
            'text-base text-gray-400 font-normal rounded-lg flex items-center p-2 hover:bg-gray-800 group',
            { 'bg-gray-800': checkActive() }
        ])}>
            {
                icon
                &&
                React.cloneElement(icon, {
                    className: cn(['w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75', icon.props?.className])
                })
            }
            <span className="ml-3">{children}</span>
        </Link>
    )
}

const AdminSideBar = ({
    open = true
}: { open?: boolean }) => {


    const links = [
        {
            lable: 'Dashboard',
            link: '/admin',
            icon: <LayoutDashboard />
        },
        {
            lable: 'Enquiry',
            link: '/admin/enquiry',
            icon: <MessageCircle />
        },
        {
            lable: 'Subscriber',
            link: '/admin/subscriber',
            icon: <Users2 />
        },
        {
            lable: 'Settings',
            link: '/admin/settings',
            icon: <SettingsIcon />
        },
    ]
    return (
        <>
            <aside id="sidebar" className="fixed hidden z-40  h-full top-0 left-0 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar">
                <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-black pt-0">
                    <div className="p-4">
                        <Link href={'/'}><Logo/></Link>
                    </div>
                    <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                        <div className="flex-1 px-3 b divide-y space-y-1">
                            <ul className="space-y-2 pb-2">
                                {
                                    links.map(link => {
                                        return (
                                            <li key={nanoid()}>
                                                <SidebarLink link={link.link} icon={link.icon}>{link.lable}</SidebarLink>
                                            </li>
                                        )
                                    })
                                }

                            </ul >
                        </div >
                    </div >
                </div >
            </aside >

            <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
        </>
    )
}

export default AdminSideBar