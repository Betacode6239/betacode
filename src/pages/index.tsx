import Head from "next/head";
import Hero from "@/components/landing/Hero";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TestimonialSection from "@/components/shared/TestimonialSection";
import ContactSection from "@/components/shared/ContactSection";
import CallToAction from "@/components/shared/CallToAction";
import Statistics from "@/components/shared/Statistics";
import Section, { SectionTitle } from "@/components/shared/Section";
import SoftwareSliderSection from "@/components/shared/software/SoftwareSliderSection";
import OurApiSection from "@/components/landing/OurApiSection";
import OurSoftwaresSection from "@/components/landing/OurSoftwaresSection";

export default function Home() {

  return (
    <>
      <Head>
        <title>BetaCode</title>
        <meta name="description" content="Beta Code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Hero />
        <FeaturesSection />
        <ServicesSection />
        <Section title="Our Api" className=" py-24">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center">
              <SectionTitle>Our Api</SectionTitle>
            </div>
            <OurApiSection />
          </div>
        </Section>
        <Section title="Our Softwares" className="py-0 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center">
              <SectionTitle>Our Softwares</SectionTitle>
            </div>
            <OurSoftwaresSection />
          </div>
        </Section>
        <Section className="">
          <Statistics />
        </Section>
        <SoftwareSliderSection />
        <CallToAction />
        <TestimonialSection />
        <ContactSection />
      </main>
    </>
  );
}

