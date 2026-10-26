import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Techniques from "@/components/Techniques";
import About from "@/components/About";
import Works from "@/components/Works";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Irantzu Rejilla",
  description:
    "Restauración de sillas, especializada en rejilla y asientos artesanales: rejilla, alga marina, enea y trenzados.",
  url: "https://www.irantzurejilla.es",
  telephone: "+34626407048",
  image: "https://www.irantzurejilla.es/images/og-image.jpg",
  logo: "https://www.irantzurejilla.es/icon.png",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Álava" },
    { "@type": "AdministrativeArea", name: "Bizkaia" },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <Hero />
        <Techniques />
        <About />
        <Works />
        <HowItWorks />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </>
  );
}
