import EnquiryForm from "@/components/forms/EnquiryForm";
import ServiceEnquiry from "@/components/forms/ServiceEnquiryForm";
import WhatsappButton from "@/components/shared/WhatsappButton";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <div className="relative">
            <img
                src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-opacity-75 bg-primary/70">
                <svg
                    className="absolute inset-x-0 bottom-0 text-white"
                    viewBox="0 0 1160 163"
                >
                    <path
                        className="fill-background"
                        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                    />
                </svg>
                <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                            Elevate Your Online Presence with Expert Web Development
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                            Crafting Stunning, Tailored Websites for Your Success. Let's Transform Your Online Presence Today.
                            </p>
                            <WhatsappButton><Button>Contact Us</Button></WhatsappButton>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <EnquiryForm
                                className='border-none shadow-2xl'
                                title="Enquiry Our Services"
                                subForm={(form) => <ServiceEnquiry form={form} />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Hero;