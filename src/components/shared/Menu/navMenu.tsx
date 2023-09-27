import { ReactElement } from "react"
import DesktopServicesMenu from "./DesktopServicesMenu"
import DesktopApiMenu from "./DesktopApiMenu"
import DesktopSoftwareMenu from "./DesktopSoftwareMenu"
import DesktopIndustriesMenu from "./DesktopIndustriesMenu"
import { SoftwareList } from "@/data/Softwares"
import { apiList } from "@/data/ApiData"

export type NavMenuLink = {
    lable: string,
    href?: string,
    icon?: any,
    child?: NavMenuLink[]|ReactElement
}


export const menuList: NavMenuLink[] = [
    {
        lable: 'Home',
        href: '/',
    },
    {
        lable: 'About',
        href: '/about',
    },
    {
        lable: 'Services',
        href: '/services',
        child: <DesktopServicesMenu/>
    },
    {
        lable: 'API',
        href: '/api',
        child: <DesktopApiMenu/>
    },
    {
        lable: 'Softwares',
        href: '/softwares',
        child: <DesktopSoftwareMenu/>
    },
    {
        lable: 'Industries',
        href: '/industries',
        child: <DesktopIndustriesMenu/>
    },
    {
        lable: 'Contact',
        href: '/contact',
    },
    {
        lable: 'Hosting',
        href: '#',
    },
]


export const menuArray = [
    {
        lable: 'Home',
        href: '/',
    },
    {
        lable: 'About',
        href: '/about',
    },
    {
        lable: 'Services',
        href: '/services',
        child: [
            {
                lable: 'Website Development',
                href: '/services/web-development'
            },
            {
                lable: 'API Development',
                href: '/services'
            },
            {
                lable: 'Digital Marketing',
                href: '/services'
            },
            {
                lable: 'App Development',
                href: '/services'
            },
            {
                lable: 'App Development',
                href: '/services'
            },
            {
                lable: 'Software Development',
                href: '/services'
            },
            {
                lable: 'Engineering',
                href: '/services'
            },
        ]
    },
    {
        lable: 'API',
        href: '/api',
        child: apiList.map(api => ({lable: api.name, href: api.href}))
    },
    {
        lable: 'Softwares',
        href: '/softwares',
        child: SoftwareList.map(soft => ({lable: soft.name, href: soft.href}))
    },
    {
        lable: 'Industries',
        href: '/industries',
        child: [
            {
                lable: 'Neo Banking',
                href: '#',
            },
            {
                lable: 'Stock Market',
                href: '#',
            },
            {
                lable: 'Manufacturing and E-Commerce',
                href: '#',
            },
            {
                lable: 'Transportation & Logistics',
                href: '#',
            },
            {
                lable: 'Healthcare',
                href: '#',
            },
            {
                lable: 'Household',
                href: '#',
            },
            {
                lable: 'Media & Entertainement',
                href: '#',
            },
            {
                lable: 'Education',
                href: '#',
            },
            {
                lable: 'Automotive',
                href: '#',
            },
            {
                lable: 'Tarvel & Hospitality',
                href: '#',
            },
            {
                lable: 'Gaming',
                href: '#',
            },
            {
                lable: 'Real Estate',
                href: '#',
            },
            {
                lable: 'Corporate',
                href: '#',
            },
            {
                lable: 'Food & Beverages',
                href: '#',
            },
            {
                lable: 'Sales and Marketing',
                href: '#',
            },
        ]
    },
    {
        lable: 'Contact',
        href: '/contact',
    },
    {
        lable: 'Hosting',
        href: '#',
    },
]


