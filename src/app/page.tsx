import CommunitySection from "@/components/community-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LandingPage from "@/components/landing-page";
import LansiaSection from "@/components/lansia-section";
import ServicesSection from "@/components/services-section";
import TestimonialSection from "@/components/testimonial-section";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
      <Header/>
        <Hero/>
        <ServicesSection />
        <LandingPage/>
        <LansiaSection />
        <CommunitySection />
        <TestimonialSection />
        <ContactSection />
      <Footer/>
    </div>
  );
}
