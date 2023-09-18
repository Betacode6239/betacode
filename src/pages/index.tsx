import Head from "next/head";
import Hero from "@/components/landing/Hero";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TestimonialSection from "@/components/shared/TestimonialSection";
import ContactSection from "@/components/shared/ContactSection";
import CallToAction from "@/components/shared/CallToAction";
import Statistics from "@/components/shared/Statistics";
import Section from "@/components/shared/Section";
import SoftwareSliderSection from "@/components/shared/software/SoftwareSliderSection";

export default function Home() {

  return (
    <>
      <Head>
        <title>BetaCode</title>
        <meta name="description" content="Beta Code"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Hero/>
        <FeaturesSection/>
        <Section className="py-0 pb-24">
          <Statistics/>
        </Section>
        <ServicesSection/>
        <SoftwareSliderSection/>
        <CallToAction/>
        <TestimonialSection/>
        <ContactSection/>
      </main>
    </>
  );
}

