const arr = [
    'recharge',
    'aeps',
    'bbps',
    'dmt',
    'uti',
    'hotel',
    'busbooking',
    'flight',
    'ecommerce',
    'crm',
    'erp',
    'education',
    'loanmodule',
    'gaming',
    'fooddelivery',
    'apireselling',
    'cabbooking',
    'grocery',
    'homeservice',
    'sportsbetting',
    'schoolmanagement',
    'hrms',
    'employeetracking',
    'travelbooking'
] as const;

export type SoftwareCodes = typeof arr[number]




export const SoftwareList: {
    name: string,
    description: string,
    image?: string,
    href: string,
    code: SoftwareCodes
}[] = [
    {
        name: "Recharge Software",
        description: "Simplify mobile recharge transactions with our versatile Recharge Software.",
        image: "/assets/images/mobile-recharge-api.jpg",
        href: "/softwares",
        code: "recharge"
    },
    {
        name: "AEPS Software",
        description: "Enable secure Aadhaar Enabled Payment System transactions with our AEPS Software.",
        image: "/assets/images/aeps-image.png",
        href: "/softwares",
        code: "aeps"
    },
    {
        name: "BBPS Software",
        description: "Streamline bill payments across various categories with our robust BBPS Software.",
        image: "/assets/images/bbps-image.png",
        href: "/softwares",
        code: "bbps"
    },
    {
        name: "DMT Software",
        description: "Effortlessly manage Domestic Money Transfer operations with our DMT Software.",
        image: "",
        href: "/softwares",
        code: "dmt"
    },
    {
        name: "UTI Software",
        description: "Access real-time Unit Trust of India (UTI) investment data with our UTI Software.",
        image: "/assets/images/pancard.png",
        href: "/softwares",
        code: "uti"
    },
    {
        name: "Hotel Software",
        description: "Transform your hotel management with our comprehensive Hotel Software.",
        image: "",
        href: "/softwares",
        code: "hotel"
    },
    {
        name: "Bus Booking Software",
        description: "Enhance your travel platform with real-time Bus Booking capabilities using our software.",
        image: "",
        href: "/softwares",
        code: "busbooking"
    },
    {
        name: "Flight Software",
        description: "Offer efficient flight booking experiences using our Flight Booking Software.",
        image: "/assets/images/flight-booking.png",
        href: "/softwares",
        code: "flight"
    },
    {
        name: "E-commerce Software",
        description: "Launch and manage your e-commerce platform effortlessly with our E-commerce Software.",
        image: "",
        href: "/softwares",
        code: "ecommerce"
    },
    {
        name: "CRM Software",
        description: "Build strong customer relationships and drive sales with our CRM Software.",
        image: "/assets/images/crm.png",
        href: "/softwares",
        code: "crm"
    },
    {
        name: "ERP Software",
        description: "Optimize business processes with our comprehensive ERP Software.",
        image: "",
        href: "/softwares",
        code: "erp"
    },
    {
        name: "Online Education Software",
        description: "Deliver engaging online education experiences with our user-friendly software.",
        image: "/assets/images/school-managment.png",
        href: "/softwares",
        code: "education"
    },
    {
        name: "Loan Module Software",
        description: "Simplify loan processing and management with our specialized software.",
        image: "",
        href: "/softwares",
        code: "loanmodule"
    },
    {
        name: "Gaming Software",
        description: "Enter the world of gaming with our feature-rich Gaming Software.",
        image: "/assets/images/fantasy-software.png",
        href: "/softwares",
        code: "gaming"
    },
    {
        name: "Food Delivery Software",
        description: "Streamline food delivery operations and enhance customer experiences with our software.",
        image: "/assets/images/food-delivery.png",
        href: "/softwares",
        code: "fooddelivery"
    },
    {
        name: "API Reselling Software",
        description: "Launch your API reselling business with our API Reselling Software.",
        image: "/assets/images/ill-3.png",
        href: "/softwares",
        code: "apireselling"
    },
    {
        name: "Cab Booking Software",
        description: "Efficiently manage your fleet and bookings with our user-friendly cab booking software.",
        image: "/assets/images/car-booking.jpg",
        href: "/softwares",
        code: "cabbooking"
    },
    {
        name: "Grocery Software",
        description: "Transform your grocery store into a seamless online marketplace with our grocery software.",
        image: "/assets/images/grocery-software.png",
        href: "/softwares",
        code: "grocery"
    },
    {
        name: "Home Service Software",
        description: "Offer a variety of home services with ease, from repairs to cleaning, through our software.",
        image: "/assets/images/home-service.png",
        href: "/softwares",
        code: "homeservice"
    },
    {
        name: "Sports Betting Software",
        description: "Deliver a secure and exciting sports betting experience with our software.",
        image: "/assets/images/sport-betting.png",
        href: "/softwares",
        code: "sportsbetting"
    },
    {
        name: "School Management Software",
        description: "Efficiently manage school operations, from attendance to exam results, using our software.",
        image: "/assets/images/school-managment.png",
        href: "/softwares",
        code: "schoolmanagement"
    },
    {
        name: "HRMS Software",
        description: "Simplify human resource management with our comprehensive HRMS software.",
        image: "",
        href: "/softwares",
        code: "hrms"
    },
    {
        name: "Employee Tracking Software",
        description: "Monitor and optimize employee productivity with our tracking software.",
        image: "",
        href: "/softwares",
        code: "employeetracking"
    },
    {
        name: "Travel Booking Software",
        description: "Facilitate seamless travel bookings and reservations with our travel software.",
        image: "/assets/images/flight-booking.png",
        href: "/softwares",
        code: "travelbooking"
    }

];




export function getSoftwareByCode(code: string) {
    return SoftwareList.find(soft => soft.code === code);
}