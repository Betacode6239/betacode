import ContactOne from '@/components/Contact/ContactOne'
import PageHeader from '@/components/shared/PageHeader'
import Section from '@/components/shared/Section'
import TestimonialSection from '@/components/shared/TestimonialSection'
import React from 'react'

const ContactPage = () => {


  return (
    <>
    <PageHeader 
      title='Contact Us' 
      subtitle=" We'd love to hear from you! Whether you have questions about our services, need assistance with integration, or want to explore collaboration opportunities, our team is here to help."  />
    <Section>
        <div className="max-w-4xl w-full mx-auto px-5">
            <ContactOne/>
        </div>
    </Section>
    <TestimonialSection/>
    </>
  )
}

export default ContactPage