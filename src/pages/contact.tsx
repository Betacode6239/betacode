import ContactOne from '@/components/Contact/ContactOne'
import Section from '@/components/shared/Section'
import TestimonialSection from '@/components/shared/TestimonialSection'
import React from 'react'

const ContactPage = () => {


  return (
    <>
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