import { SoftwareCodes, SoftwareList } from "@/data/Softwares";
import { cn } from "@/lib/utils";
import { nanoid } from "nanoid";
import { ReactNode, useState } from "react";
import { Card, CardContent } from "../ui/card";
import EnquiryModel from "../enquiry/EnquiryModel";
import { Button } from "../ui/button";
import { ArrowRight, Phone } from "lucide-react";
import EnquiryForm from "../forms/EnquiryForm";
import SoftwareEnquiry from "../forms/SoftwareEnquiry";


const longDescription: { [key in SoftwareCodes]: ReactNode } = {
    'recharge': <p>
        Our Recharge Software is a versatile tool designed to simplify mobile and DTH recharges. It's the go-to solution for retailers and distributors operating in the telecom sector. With this software, businesses can efficiently offer prepaid services, streamline recharge processes, and provide a seamless experience for customers. Whether you run a small shop or a large distribution network, our Recharge Software ensures that your customers can easily top up their accounts, making it a valuable asset for growing your business.
    </p>,

    'aeps': <p>
        Our AEPS (Aadhaar Enabled Payment System) Software is a secure and convenient solution that facilitates financial transactions using Aadhaar authentication. This software is essential for banks, retailers, and financial service providers. It empowers individuals, especially in rural and remote areas, to access a range of banking operations. These include balance inquiries, fund transfers, and cash withdrawals, all linked to their Aadhaar numbers. AEPS Software bridges the gap in financial access, ensuring that even those without traditional banking infrastructure can enjoy the benefits of digital transactions.
    </p>,

    'bbps': <p>
        Our BBPS (Bharat Bill Payment System) Software is a powerful platform designed to streamline utility bill payments. This software is invaluable for utility companies and payment service providers. It simplifies the process of paying bills, allowing customers to settle their utility bills with ease. BBPS offers a unified platform for managing a wide range of bill payments, including electricity, water, gas, and more. By providing a single point for bill payments, it enhances convenience and efficiency for both service providers and consumers.
    </p>,

    'dmt': <p>
        The DMT (Domestic Money Transfer) Software is a quick and secure solution for domestic money transfers. It's an essential tool for financial institutions and agents who are looking to provide efficient money transfer services. DMT Software allows customers to send money to family and friends across the country, making it an essential service for individuals seeking a reliable and accessible means of sending funds.
    </p>,

    'uti': <p>
        Our UTI (Unique Transaction Identifier) Software is a powerful tool designed to enhance transaction tracking and verification. It's invaluable for financial service providers and regulatory agencies. UTI Software helps maintain transparency and security in financial transactions by providing a unique identifier for each transaction. This streamlines record-keeping, making it easier to track and verify financial transactions, ultimately bolstering security and accountability within the financial sector.
    </p>,

    'hotel': <p>
        Our Hotel Software is a comprehensive solution for hotel management. From reservations and check-ins to billing and guest services, it offers a seamless experience for hoteliers. This software is an essential tool for hotels, resorts, and other hospitality businesses looking to improve operational efficiency and guest satisfaction. It streamlines every aspect of hotel operations, ensuring that guests have a memorable experience from the moment they book their stay to the moment they check out.
    </p>,

    'busbooking': <p>
        Our Bus Booking Software simplifies the process of booking bus tickets online. It's a must-have tool for travel agencies and bus operators looking to provide customers with an efficient and user-friendly way to book their bus journeys. This software enhances the overall booking experience, allowing passengers to choose their preferred routes, schedules, and seating arrangements with ease. It's designed to streamline operations for bus companies while making travel more accessible and convenient for passengers.
    </p>,

    'flight': <p>
        Our Flight Software offers a comprehensive solution for flight bookings and reservations. It's essential for travel agencies and airlines looking to provide customers with a seamless booking experience. This software simplifies the booking process, allowing passengers to easily select their flight preferences, dates, and destinations. It ensures that travelers have a smooth and convenient experience when planning their flights, which is crucial for customer satisfaction in the highly competitive travel industry.
    </p>,

    'ecommerce': <p>
        Our E-Commerce Software is a robust platform designed to help businesses establish and manage their online stores. It's an essential tool for retailers and businesses looking to expand their online presence and reach a broader audience. This software enables businesses to create feature-rich e-commerce websites, where they can showcase their products, manage orders, and process payments securely. Whether you're a small business or a large enterprise, our E-Commerce Software can help you set up an online store that drives sales and boosts your brand's visibility.
    </p>,

    'crm': <p>
        Our CRM (Customer Relationship Management) Software is a powerful solution that helps businesses manage and nurture their relationships with customers. It's indispensable for companies of all sizes that want to improve customer engagement and streamline their sales and support processes. This software provides a centralized platform for storing customer information, tracking interactions, and managing sales leads. By using our CRM Software, businesses can better understand their customers' needs and provide personalized service, ultimately driving customer satisfaction and loyalty.
    </p>,

    'erp': <p>
        Our ERP (Enterprise Resource Planning) Software is a comprehensive solution for businesses looking to streamline their operations and manage various aspects of their organization. It's essential for companies seeking to optimize their processes, increase efficiency, and achieve better business outcomes. ERP Software integrates and automates key business functions, including finance, HR, inventory management, and more. With our ERP solution, businesses can gain real-time insights into their operations, make data-driven decisions, and enhance productivity across the organization.
    </p>,

    'education': <p>
        Our Online Education Software is designed to empower educational institutions, trainers, and organizations to deliver high-quality online learning experiences. It's an essential tool for educators who want to adapt to the digital learning landscape and engage with students virtually. This software offers features such as virtual classrooms, multimedia content delivery, and assessment tools. It allows educators to create and deliver courses, interact with students, and track their progress efficiently. Our Online Education Software makes online learning accessible and effective, whether you're a school, university, or a corporate training provider.
    </p>,

    'loanmodule': <p>
        Our Loan Module Software is a specialized solution for financial institutions and lenders looking to streamline their loan management processes. It's crucial for organizations that provide loans, whether for personal, business, or educational purposes. This software simplifies the loan origination, processing, and servicing, helping lenders make informed decisions, reduce operational costs, and improve customer service. It ensures that the entire loan lifecycle, from application to repayment, is managed efficiently, resulting in a smoother experience for both lenders and borrowers.
    </p>,

    'gaming': <p>
        Our Gaming Software is a versatile platform for creating and managing online gaming experiences. It's essential for game developers and companies in the gaming industry looking to launch and operate games effectively. This software offers game creation tools, game hosting, and player management features. It enables developers to design, launch, and maintain a wide range of games, from mobile apps to massive multiplayer online games (MMOs). With our Gaming Software, you can provide an immersive gaming experience to players and effectively manage your gaming ecosystem.
    </p>,

    'fooddelivery': <p>
        Our Food Delivery Software is a comprehensive solution for businesses operating in the food delivery and restaurant industry. It's indispensable for restaurants, cafes, and food delivery services looking to offer customers a convenient way to order and receive food. This software simplifies the entire food delivery process, from menu management and order processing to delivery tracking. It ensures that customers can easily browse menus, place orders, and enjoy their favorite meals from the comfort of their homes. For businesses, our Food Delivery Software streamlines operations and enhances the overall dining experience.
    </p>,

    'apireselling': <p>
        Our API Reselling Software is a versatile platform for businesses that want to resell APIs to other organizations or developers. It's a valuable tool for API providers and resellers who want to expand their reach and monetize their API offerings. This software enables businesses to create a marketplace for APIs, manage API subscriptions, and provide documentation to users. With our API Reselling Software, you can effectively resell APIs, reaching a broader customer base and creating new revenue streams.
    </p>,

    'cabbooking': <p>
        Our Cab Booking Software is designed to simplify the process of booking taxi services online. It's a must-have tool for taxi companies and transportation services looking to offer customers a convenient and user-friendly way to book rides. This software enhances the overall booking experience, allowing passengers to book taxis, select preferred routes, and track their rides in real-time. It's designed to streamline operations for taxi service providers while ensuring a seamless and efficient experience for passengers.
    </p>,

    'grocery': <p>
        Our Grocery Software is a comprehensive solution for grocery stores and retailers looking to establish an online presence. It's essential for businesses seeking to offer customers the ability to shop for groceries online. This software simplifies the process of managing an online grocery store, from inventory management to order processing. It ensures that customers can easily browse and purchase groceries, providing a convenient and efficient shopping experience. For businesses, our Grocery Software allows you to expand your market reach and thrive in the digital age.
    </p>,

    'homeservice': <p>
        Our Home Service Software is a versatile platform designed for businesses in the home services and maintenance industry. It's an essential tool for companies offering services such as plumbing, electrical work, landscaping, and more. This software simplifies service management, appointment scheduling, and customer communication. It ensures that businesses can efficiently dispatch service personnel, schedule appointments, and provide excellent customer service. For customers, our Home Service Software offers a convenient way to book home services, ensuring that their homes receive the attention and care they need.
    </p>,

    'sportsbetting': <p>
        Our Sports Betting Software is a versatile solution for businesses and individuals looking to enter the sports betting industry. It's a crucial tool for sportsbooks, betting operators, and entrepreneurs interested in offering sports betting services. This software provides a comprehensive platform for managing bets, odds, and user accounts. It allows users to place bets on a wide range of sports events, ensuring a seamless and enjoyable betting experience. With our Sports Betting Software, you can launch and operate a sports betting platform that caters to sports enthusiasts and bettors.
    </p>,

    'schoolmanagement': <p>
        Our School Management Software is designed to streamline the administrative and academic processes of educational institutions. It's an essential tool for schools, colleges, and universities looking to enhance efficiency and student engagement. This software offers a range of features, including student management, timetable creation, and examination management. It ensures that educational institutions can manage their operations smoothly, from admissions to graduation. For students, parents, and educators, our School Management Software simplifies interactions and ensures that educational processes run smoothly.
    </p>,

    'hrms': <p>
        Our HRMS (Human Resource Management System) Software is a versatile solution for businesses and organizations seeking to streamline their HR operations. It's crucial for companies of all sizes that want to manage their human resources efficiently and effectively. This software provides a centralized platform for HR tasks, from payroll processing to employee management. It ensures that HR professionals can handle all aspects of employee management and engagement in one place. With our HRMS Software, businesses can enhance their HR processes and create a more productive and satisfied workforce.
    </p>,

    'employeetracking': <p>
        Our Employee Tracking Software is designed to help businesses monitor and manage their workforce efficiently. It's indispensable for organizations seeking to optimize their employee performance and productivity. This software offers features such as time tracking, attendance monitoring, and performance evaluation. It allows businesses to track employee activities and gather data to improve operations and performance. For businesses, our Employee Tracking Software ensures that employees are productive and that business operations run smoothly.
    </p>,

    'travelbooking': <p>
        Our Travel Booking Software is a versatile platform for businesses operating in the travel and tourism industry. It's an essential tool for travel agencies, tour operators, and travel businesses looking to offer customers a comprehensive booking experience. This software simplifies the process of booking travel services, from flights and hotels to tours and activities. It ensures that travelers can easily plan and book their trips, enhancing their overall travel experience. For travel businesses, our Travel Booking Software streamlines operations, increases efficiency, and provides a better service for customers.
    </p>
}

const content: {
    name: string,
    description: ReactNode,
    image?: string,
    code: SoftwareCodes
}[] = SoftwareList.map(sft => ({
    ...sft,
    description: longDescription[sft.code]
}));



const SoftwareStripe = ({
    onSelect,
    activeCode,
    items
}: {
    items: {
        lable: string,
        code: SoftwareCodes,
    }[],
    activeCode?: SoftwareCodes,
    onSelect?: (code: SoftwareCodes) => void
}) => {

    return (
        <div className="overflow-y-auto flex gap-2 w-full py-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-neutral-100">
            {
                items.map(item => (
                    <div
                        key={nanoid()}
                        onClick={() => onSelect?.(item.code)}
                        className={cn([
                            'px-4 bg-gray-100 py-2 rounded-full hover:bg-slate-200 cursor-pointer flex-shrink-0 transition-all duration-300',
                            { ' bg-primary text-primary-foreground': activeCode === item.code }
                        ])}>{item.lable}</div>
                ))
            }
        </div>
    )
}

function getContent(code: SoftwareCodes) {
    return content.find(ct => ct.code === code) ?? content[0]!
}


const OurSoftwaresSection = () => {
    const [activeCode, setActiveCode] = useState<SoftwareCodes>(content[0]?.code!);
    const [open, setIsOpen] = useState(false);

    return (
        <div className="px-5">
            <div className="overflow-hidden shadow bg-white rounded-full">
                <SoftwareStripe items={content.map(ct => ({ lable: ct.name, code: ct.code }))} onSelect={code => setActiveCode(code)} activeCode={activeCode} />
            </div>

            <div className="mt-10">
                <Card>
                    <CardContent className="pt-5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className='bg-contain bg-center bg-no-repeat aspect-square ' style={{ backgroundImage: `url(${getContent(activeCode).image || ''})` }}></div>
                            <div className=''>
                                <h3 className='text-3xl lg:text-4xl mb-3 font-bold text-gray-700' >{getContent(activeCode).name}</h3>
                                <p className='mb-5 leading-relaxed text-lg '>{getContent(activeCode).description}</p>

                                <div className="mt-5">
                                    <EnquiryModel
                                        isOpen={open}
                                        onClose={() => setIsOpen(pre => !pre)}
                                        trigger={<Button size={'lg'}><Phone className="w-4 h-4 mr-2"/> Enquiry</Button>}
                                        title='Api Enquiry'
                                        form={<EnquiryForm
                                            onDone={() => setIsOpen(false)}
                                            className='border-none'
                                            subForm={(form) => <SoftwareEnquiry form={form} config={{ pinned: activeCode }} />}
                                        />}
                                    />
                                </div>
                            </div>

                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default OurSoftwaresSection