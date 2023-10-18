import EnquiryForm from '@/components/forms/EnquiryForm'
import ServiceEnquiry from '@/components/forms/ServiceEnquiryForm'
import Features from '@/components/services/webdevelopment/Features'
import Hero from '@/components/services/webdevelopment/Hero'
import OfferedServices from '@/components/services/webdevelopment/OfferedServices'
import WebDevWhyChooseUs from '@/components/services/webdevelopment/WebDevWhyChooseUs'
import ContactSection from '@/components/shared/ContactSection'
import Section from '@/components/shared/Section'
import TestimonialSection from '@/components/shared/TestimonialSection'
import React from 'react'


// Title: Highlight the essence of your web development services.
// Description: A brief introduction to your expertise and approach.
// Call-to-Action (CTA): Encourage visitors to learn more or contact you.
// About Our Web Development Services:

// Overview: Explain the scope and importance of web development.
// Benefits: Highlight the advantages of choosing your services.
// Expertise: Showcase your team's skills and experience.
// Our Process:

// Step-by-Step: Describe your web development process.
// Transparency: Explain how you involve clients in the development journey.
// Client-Centric: Emphasize how you tailor solutions to meet clients' goals.
// Services Offered:

// List different types of web development services you provide.
// Brief descriptions for each service.
// Links or buttons for more details on each service.
// Portfolio:

// Showcase your past web development projects.
// Include images, descriptions, and links to the live websites.
// Technologies We Use:

// Highlight the technologies and tools you employ.
// Explain how these technologies benefit clients.
// Client Testimonials:

// Share feedback and success stories from your clients.
// Include client names and logos for credibility.
// Case Studies:

// Dive deeper into specific successful projects.
// Describe challenges, solutions, and outcomes.
// Why Choose Us:

// Unique Selling Points (USPs): Explain what sets you apart.
// Certifications or Awards: Highlight any industry recognition.
// FAQs:

// Answer common questions about your web development services.
// Include inquiries about pricing, timelines, and processes.
// Contact Us:

// Provide multiple ways for visitors to get in touch.
// Include a contact form, email address, phone number, and office location.
// Request a Quote:

// Encourage visitors to request a custom quote for their project.
// Include a form for gathering project details.


const WebDevelopmentPage = () => {
  return (
    <>
      <Hero />
      <OfferedServices />
      <Section className='pt-0'><WebDevWhyChooseUs /></Section>

      <TestimonialSection />
      <ContactSection contactForm={
        <EnquiryForm
          className='border-none shadow-2xl'
          title="Enquiry Our Services"
          subForm={(form) => <ServiceEnquiry form={form} />}
        />
      } />
    </>
  )
}

export default WebDevelopmentPage