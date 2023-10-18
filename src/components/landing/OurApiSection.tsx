import { ApiCodes, apiList } from '@/data/ApiData'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React, { ReactNode, useState } from 'react'
import { Button } from '../ui/button'
import { nanoid } from 'nanoid'
import EnquiryModel from '../enquiry/EnquiryModel'
import EnquiryForm from '../forms/EnquiryForm'
import ApiEnquiry from '../forms/ApiEnquiry'

const apiContentMap: { [key in ApiCodes]: {
    image: string,
    longDesc: ReactNode
} } = {
    'aeps': {
        image: '/assets/images/aeps_api.png',
        longDesc: <p>
            Our AEPS (Aadhaar Enabled Payment System) API is a versatile tool that enables secure and convenient financial transactions using Aadhaar authentication. It's an essential resource for banks, retailers, and financial service providers. This API empowers individuals, particularly in rural and remote areas, to access various banking operations, including balance inquiries, fund transfers, and cash withdrawals, all linked to their Aadhaar numbers. It bridges the gap in financial access, ensuring that even those without traditional banking infrastructure can enjoy the benefits of digital transactions.
        </p>
    },
    'bbps': {
        image: '/assets/images/bbps-image.png',
        longDesc: <p>
            Our BBPS (Bharat Bill Payment System) API is a robust platform that simplifies the process of utility bill payments. It's invaluable for utility companies and payment service providers. This API streamlines the payment of a wide range of bills, including electricity, water, gas, and more. By offering a unified platform for bill payments, it enhances convenience and efficiency for both service providers and consumers, ensuring that bills are settled with ease.
        </p>
    },
    'bus_booking': {
        image: '/assets/images/bus-api.jpg',
        longDesc: <p>
            Our Bus Booking API simplifies the process of booking bus tickets online. It's an essential tool for travel agencies and bus operators looking to provide customers with an efficient and user-friendly way to book their bus journeys. This API enhances the overall booking experience, allowing passengers to choose their preferred routes, schedules, and seating arrangements with ease. It streamlines operations for bus companies while making travel more accessible and convenient for passengers.
        </p>
    },
    'flight': {
        image: '/assets/images/flight-booking.png',
        longDesc: <p>
            Our Flight API offers a comprehensive solution for flight bookings and reservations. It's essential for travel agencies and airlines looking to provide customers with a seamless booking experience. This API simplifies the booking process, allowing passengers to easily select their flight preferences, dates, and destinations. It ensures that travelers have a smooth and convenient experience when planning their flights, crucial for customer satisfaction in the highly competitive travel industry.
        </p>
    },
    'hotel': {
        image: '/assets/images/hotel-booking-api.jpg',
        longDesc: <p>
            Our Hotel Booking API is a versatile platform that facilitates hotel reservations and bookings. It's a must-have resource for travel agencies, online travel platforms, and hotels looking to provide customers with a seamless booking process. This API simplifies the booking experience, enabling users to search and book accommodations based on their preferences, whether it's for a vacation, business trip, or any other travel need. It ensures that travelers find the perfect place to stay, enhancing their overall travel experience.
        </p>
    },
    'pancardverification': {
        image: '/assets/images/pancard.png',
        longDesc: <p>
            Our Pancard Verification API is a powerful tool designed to verify the authenticity of PAN (Permanent Account Number) cards. It's essential for financial institutions, KYC (Know Your Customer) service providers, and businesses that need to verify customer identities. This API allows real-time validation of PAN card details, ensuring they match official government records. It helps organizations enhance their due diligence processes, reduce fraud, and maintain compliance with regulatory requirements.
        </p>
    },
    'recahrge': {
        image: '/assets/images/mobile-recharge-api.jpg',
        longDesc: <p>
            Our Recharge API simplifies mobile and DTH recharges. It's the ideal solution for retailers and distributors in the telecom sector. This API streamlines the recharge process, making it convenient for businesses to offer prepaid services. Whether you're a small shop or a large distributor, our Recharge API ensures that your customers can top up their accounts quickly and efficiently.
        </p>
    },
    'uti': {
        image: '/assets/images/pancard.png',
        longDesc: <p>
            Our UTI (Unique Transaction Identifier) API enhances transaction tracking and verification. It's valuable for financial service providers and regulatory agencies. This API helps maintain a transparent and secure financial environment by providing a unique identifier for each transaction. It streamlines record-keeping, making it easier to track and verify financial transactions, ultimately bolstering security and accountability within the financial sector.
        </p>
    },
    'vehical': {
        image: '/assets/images/vehicle-verification-api.png',
        longDesc: <p>
            Our Vehicle Verification API is a powerful tool designed to provide comprehensive vehicle information. It's essential for businesses that need to verify vehicle details, such as ownership, history, and authenticity. This API streamlines the process of retrieving vehicle data, ensuring that it's accurate and up-to-date. It's invaluable for insurance companies, used car dealers, and organizations that need to validate vehicle information.
        </p>
    }
}

const content = apiList.map(api => ({
    label: api.name,
    image: apiContentMap[api.code].image,
    desc: api.description,
    content: apiContentMap[api.code].longDesc,
    code: api.code
}))


const ListItem = ({
    label,
    code,
    onItemClick,
    currentActive
}: {
    label: string,
    code: ApiCodes,
    onItemClick?: (code: ApiCodes) => void,
    currentActive?: string
}) => {

    return (
        <div
            className={cn(
                'p-3 rounded-lg cursor-pointer hover:bg-primary hover:text-white flex items-center justify-between transition-all mb-2 ',
                { 'bg-primary text-primary-foreground shadow-lg shadow-primary/30': currentActive && currentActive === code }
            )}
            onClick={() => onItemClick?.(code)}
        >
            <span>{label}</span>
            <span><ChevronRight className='w-4 h-4' /></span>
        </div>
    )
}


const Content = ({
    title,
    link,
    image,
    children,
    code
}: {
    title: string,
    link?: string,
    image?: string,
    children?: ReactNode,
    code: ApiCodes
}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="grid grid-col-1 lg:grid-cols-2 gap-5 items-center  ">
            <div className=''>
                <h3 className='text-3xl lg:text-4xl mb-3 font-bold' >{title}</h3>
                <div className='mb-5'>{children}</div>
                <EnquiryModel
                    isOpen={isOpen}
                    onClose={() => setIsOpen(pre => !pre)}
                    trigger={<Button>Get Started</Button>}
                    title='Api Enquiry'
                    form={<EnquiryForm
                        className='border-none'
                        onDone={() => {
                            setIsOpen(pre => !pre);
                            console.log('Done')
                        }}
                        subForm={(form) =>
                            <ApiEnquiry form={form} config={{ pinned: code }} />
                        }
                    />}
                />
            </div>
            <div className='bg-contain bg-center bg-no-repeat aspect-square ' style={{ backgroundImage: `url(${image || ''})` }}></div>
        </div>
    )
}

const OurApiSection = () => {
    const [activeCode, setActiveCode] = useState<ApiCodes>(content[0]?.code!);

    const getContentByCode = (code: ApiCodes) => {
        return content.find(ct => ct.code === code);
    }
    return (
        <div className="grid grid-col-1 md:grid-cols-3 gap-3 px-5">
            <div className="max-w-lg rounded-lg shadow p-4 bg-white">
                {
                    content.map(ct => (
                        <ListItem key={nanoid()} {...ct} onItemClick={setActiveCode} currentActive={activeCode}  />
                    ))
                }
            </div>
            <div className="col-auto md:col-start-2 md:col-span-3 ">
                <div className="rounded-xl shadow bg-white px-4 py-10 lg:p-5 h-full">
                    <Content 
                    title={getContentByCode(activeCode)?.label||''} 
                    image={getContentByCode(activeCode)?.image||''} 
                    code={activeCode}
                    >{getContentByCode(activeCode)?.content}</Content>
                </div>
            </div>
        </div>
    )
}

export default OurApiSection