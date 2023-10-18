import React from 'react'
import WhyChooseUs from '@/components/page-ui/WhyChooseUs'

const WebDevWhyChooseUs = () => {
    const content = [
        {
            title: 'Creative Excellence',
            desc: 'Our websites are creative masterpieces, blending artistry with functionality.'
        },
        {
            title: 'Responsive Design',
            desc: 'We ensure your site looks flawless on every device, from mobile to desktop.'
        },
        {
            title: 'Detail-Oriented',
            desc: 'Meticulous attention to detail in design and coding is our standard.'
        },
        {
            title: 'Industry Expertise',
            desc: "We understand your industry's unique needs, delivering tailored solutions."
        },
        {
            title: 'Client Collaboration',
            desc: 'Your input shapes our process, creating a website that exceeds expectations.'
        },
        {
            title: 'Timely Delivery',
            desc: "We value your time, guaranteeing on-schedule project delivery."
        }
    ]
  return (
    <WhyChooseUs mainImage={'/assets/images/why-choose-us.svg'} items={content} title="Why Choose Us"/>
  )
}

export default WebDevWhyChooseUs