const SoftwareCodesList = [
    'cbs',
    'fds',
    'gs',
    'hss',
    'fss',
    'sbs',
    'sms',
    'crms',
    'hrmss',
    'ets',
    'eps',
    'oes',
    'loan_ms',
    'ress',
    'tbs'
] as const;

export type SoftwareCodes =  typeof SoftwareCodesList[number]


export const SoftwareList: {
    name: string,
    description: string,
    image?: string,
    href: string,
    code: SoftwareCodes
}[] = [
    {
        name: "Cab Booking Software",
        description: "Efficiently manage your fleet and bookings with our user-friendly cab booking software.",
        image: "/assets/images/car-booking.jpg",
        href: "#",
        code: 'cbs'
    },
    {
        name: "Food Delivery Software",
        description: "Streamline food delivery operations and enhance customer experiences with our software.",
        image: "/assets/images/food-delivery.png",
        href: "#",
        code: 'fds'
    },
    {
        name: "Grocery Software",
        description: "Transform your grocery store into a seamless online marketplace with our grocery software.",
        image: "/assets/images/grocery-software.png",
        href: "#",
        code: 'gs'
    },
    {
        name: "Home Service Software",
        description: "Offer a variety of home services with ease, from repairs to cleaning, through our software.",
        image: "/assets/images/home-service.png",
        href: "#",
        code: 'hss'
    },
    {
        name: "Fantasy Sport Software",
        description: "Launch your fantasy sports platform with our feature-rich software solution.",
        image: "/assets/images/fantasy-software.png",
        href: "",
        code: 'fss'
    },
    {
        name: "Sports Betting Software",
        description: "Deliver a secure and exciting sports betting experience with our software.",
        image: "/assets/images/sport-betting.png",
        href: "#",
        code: 'sbs'
    },
    {
        name: "School Management Software",
        description: "Efficiently manage school operations, from attendance to exam results, using our software.",
        image: "/assets/images/school-managment.png",
        href: "#",
        code: 'sms'
    },
    {
        name: "CRM Software",
        description: "Build strong customer relationships and drive sales with our CRM software.",
        image: "/assets/images/crm.png",
        href: "#",
        code: 'crms'
    },
    {
        name: "HRMS Software",
        description: "Simplify human resource management with our comprehensive HRMS software.",
        image: "",
        href: "#",
        code: 'hrmss'
    },
    {
        name: "Employee Tracking Software",
        description: "Monitor and optimize employee productivity with our tracking software.",
        image: "",
        href: "#",
        code: 'ets'
    },
    {
        name: "Ecommerce Portal Software",
        description: "Launch and manage your e-commerce portal effortlessly with our software.",
        image: "",
        href: "#",
        code: 'eps'
    },
    {
        name: "Online Education Software",
        description: "Deliver engaging online education experiences with our user-friendly software.",
        image: "",
        href: "#",
        code: 'oes'
    },
    {
        name: "Loan Module Software",
        description: "Simplify loan processing and management with our specialized software.",
        image: "",
        href: "#",
        code: 'loan_ms'
    },
    {
        name: "Reseller Software",
        description: "Empower resellers and manage partnerships with our reseller software.",
        image: "",
        href: "#",
        code: 'ress'
    },
    {
        name: "Travel Booking Software",
        description: "Facilitate seamless travel bookings and reservations with our travel software.",
        image: "",
        href: "#",
        code: 'tbs'
    }
]


export function getSoftwareByCode (code: SoftwareCodes) {
    return SoftwareList.find(soft => soft.code === code);
}