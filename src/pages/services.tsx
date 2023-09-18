import ServicesSection from '@/components/landing/ServicesSection'
import ContactSection from '@/components/shared/ContactSection'
import PageHeader from '@/components/shared/PageHeader'
import Section from '@/components/shared/Section'
import Statistics from '@/components/shared/Statistics'
import TestimonialSection from '@/components/shared/TestimonialSection'
import React from 'react'

const ServicesPage = () => {
    return (
        <>
            <PageHeader title='Services' />
            <ServicesSection />
            <Section><Statistics /></Section>
            <TestimonialSection />
            <ContactSection />
        </>
    )
}

export default ServicesPage