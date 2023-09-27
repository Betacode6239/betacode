// Service Interface
interface Service {
    name: string;
    description: string;
    image: string;
    href: string;
    code: string;
  }
  
  // Service Codes Enum
  export enum ServiceCodes {
    WEB_DEVELOPMENT = "webdevelopment",
    APP_DEVELOPMENT = "appdevelopment",
    API_DEVELOPMENT = "apidevelopment",
    SOFTWARE_DEVELOPMENT = "softwaredevelopment",
    DIGITAL_MARKETING = "digitalmarketing",
    ENGINEERING = "engineering"
  }
  
  // List of Services
  export const servicesList: Service[] = [
    {
      name: "Web Development",
      description: "Crafting stunning and responsive websites tailored to your business needs.",
      image: "",
      href: "#",
      code: ServiceCodes.WEB_DEVELOPMENT
    },
    {
      name: "App Development",
      description: "Creating innovative and user-friendly mobile applications for various platforms.",
      image: "",
      href: "#",
      code: ServiceCodes.APP_DEVELOPMENT
    },
    {
      name: "API Development",
      description: "Building robust and secure APIs to enable seamless data exchange.",
      image: "",
      href: "#",
      code: ServiceCodes.API_DEVELOPMENT
    },
    {
      name: "Software Development",
      description: "Designing and developing custom software solutions for your unique requirements.",
      image: "",
      href: "#",
      code: ServiceCodes.SOFTWARE_DEVELOPMENT
    },
    {
      name: "Digital Marketing",
      description: "Driving online growth and visibility through strategic digital marketing campaigns.",
      image: "",
      href: "#",
      code: ServiceCodes.DIGITAL_MARKETING
    },
    {
      name: "Engineering",
      description: "Delivering specialized software solutions for civil engineering, including Plant Engineering, Piping Engineering, Reverse Engineering, HVAC Engineering, and Civil & Structural Engineering.",
      image: "",
      href: "#",
      code: ServiceCodes.ENGINEERING
    }
  ];
  
  // Function to Get Service Object by Code
  export function getServiceByCode(code: ServiceCodes): Service | null {
    return servicesList.find(service => service.code === code) || null;
  }
  