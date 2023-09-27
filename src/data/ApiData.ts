const ApiCodesList = [
    'recahrge',
    'aeps',
    'bbps',
    'bus_booking',
    'vehical',
    'uti',
    'hotel',
    'flight',
    'pancardverification'
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
        href: '/our-apis',
        code: 'recahrge'
    },
    {
        name: "AEPS API",
        description: "Enable Aadhaar Enabled Payment System transactions with our secure AEPS API.",
        href: '/our-apis',
        code: 'aeps'
    },
    {
        name: "BBPS API",
        description: "Streamline bill payments across various categories with our robust BBPS API.",
        href: '/our-apis',
        code: 'bbps'
    },
    {
        name: "PAN Card Verification API",
        description: "Verify the authenticity of PAN card details with our secure and reliable API.",
        href: "#",
        code: "pancardverification"
    },
    {
        name: "Bus Booking API",
        description: "Enhance travel platforms with real-time bus booking capabilities using our API.",
        href: '/our-apis',
        code: 'bus_booking'
    },
    {
        name: "Vehicle Verification API",
        description: "Verify vehicle details effortlessly with our reliable Vehicle Verification API.",
        href: '/our-apis',
        code: 'vehical'
    },
    {
        name: "UTI API",
        description: "Access real-time Unit Trust of India (UTI) investment data with our UTI API.",
        href: '/our-apis',
        code: 'uti'
    },
    {
        name: "Hotel Booking API",
        description: "Provide comprehensive hotel booking services with our dynamic Hotel Booking API.",
        href: '/our-apis',
        code: 'hotel'
    },
    {
        name: "Flight Booking API",
        description: "Offer efficient flight booking experiences using our Flight Booking API.",
        href: '/our-apis',
        code: 'flight'
    }
];


export function getApiByCode(code: string){
    return apiList.find(val => val.code === code);
}