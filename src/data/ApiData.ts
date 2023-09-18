const ApiCodesList = [
    'recahrge',
    'aeps',
    'bbps',
    'bus_booking',
    'vehical',
    'uti',
    'hotel',
    'flight'
] as const;

export type ApiCodes = typeof ApiCodesList[number];

export const apiList: {
    name: string,
    description: string,
    href: string,
    code: ApiCodes
}[] = [
    {
        name: "Recharge API",
        description: "Simplify mobile recharge transactions with our versatile Recharge API.",
        href: "",
        code: 'recahrge'
    },
    {
        name: "AEPS API",
        description: "Enable Aadhaar Enabled Payment System transactions with our secure AEPS API.",
        href: "",
        code: 'aeps'
    },
    {
        name: "BBPS API",
        description: "Streamline bill payments across various categories with our robust BBPS API.",
        href: "",
        code: 'bbps'
    },
    {
        name: "Bus Booking API",
        description: "Enhance travel platforms with real-time bus booking capabilities using our API.",
        href: "",
        code: 'bus_booking'
    },
    {
        name: "Vehicle Verification API",
        description: "Verify vehicle details effortlessly with our reliable Vehicle Verification API.",
        href: "",
        code: 'vehical'
    },
    {
        name: "UTI API",
        description: "Access real-time Unit Trust of India (UTI) investment data with our UTI API.",
        href: "",
        code: 'uti'
    },
    {
        name: "Hotel Booking API",
        description: "Provide comprehensive hotel booking services with our dynamic Hotel Booking API.",
        href: "",
        code: 'hotel'
    },
    {
        name: "Flight Booking API",
        description: "Offer efficient flight booking experiences using our Flight Booking API.",
        href: "",
        code: 'flight'
    }
];


export function getApiByCode(code: string){
    return apiList.find(val => val.code === code);
}