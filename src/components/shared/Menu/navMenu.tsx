import { ReactElement } from "react"
import DesktopServicesMenu from "./DesktopServicesMenu"
import DesktopApiMenu from "./DesktopApiMenu"
import DesktopSoftwareMenu from "./DesktopSoftwareMenu"
import DesktopIndustriesMenu from "./DesktopIndustriesMenu"

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
        lable: 'About',
        href: '/about',
    },
]


export const menuArray = [
    {
        lable: 'Home',
        href: '/',
    },
    {
        lable: 'Services',
        href: '/services',
        child: [
            {
                lable: 'Website Development',
                href: '/services'
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
        ]
    },
    {
        lable: 'API',
        href: '/api',
        child: [
            {
                lable: 'Aadhaar Verification',
                href: '/our-apis',
            },
            {
                lable: 'Reacharge',
                href: '/our-apis',
            },
            {
                lable: 'AEPS',
                href: '/our-apis',
            },
            {
                lable: 'UTI (Pancard)',
                href: '/our-apis',
            },
            {
                lable: 'Flight Booking',
                href: '/our-apis',
            },
            {
                lable: 'Vehical Verification',
                href: '/our-apis',
            },
            {
                lable: 'BBPS',
                href: '/our-apis',
            },
            {
                lable: 'DMT',
                href: '/our-apis',
            },
            {
                lable: 'Bus Booking',
                href: '/our-apis',
            },
            {
                lable: 'Hotel Booking',
                href: '/our-apis',
            },
            {
                lable: 'Pan Card Verifcation',
                href: '/our-apis',
            },
        ]
    },
    {
        lable: 'Softwares',
        href: '/softwares',
        child: [
            {
                lable: 'Cab Booking Software',
                href: '/softwares',
            },
            {
                lable: 'Food Delivery Software',
                href: '/softwares',
            },
            {
                lable: 'Grocery Software',
                href: '/softwares',
            },
            {
                lable: 'Home Service Software',
                href: '/softwares',
            },
            {
                lable: 'Fantasy Sports Software',
                href: '/softwares',
            },
            {
                lable: 'Sports Betting Software',
                href: '/softwares',
            },
            {
                lable: 'School Management Software',
                href: '/softwares',
            },
            {
                lable: 'CRM Software',
                href: '/softwares',
            },
            {
                lable: 'HRMS Software',
                href: '/softwares',
            },
            {
                lable: 'Employee Tracking Software',
                href: '/softwares',
            },
            {
                lable: 'Ecommerce Portal',
                href: '/softwares',
            },
            {
                lable: 'Online Education Software',
                href: '/softwares',
            },
            {
                lable: 'Loan Module Software',
                href: '/softwares',
            },
            {
                lable: 'Reseller Software',
                href: '/softwares',
            },
            {
                lable: 'Travel Booking Software',
                href: '/softwares',
            },
        ]
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
        lable: 'About',
        href: '/about',
    },
]


