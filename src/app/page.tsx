import StructuredData from "@/components/StructuredData";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import Offers from "@/components/Offers";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Brands />
      <Testimonials />
      <Offers />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
