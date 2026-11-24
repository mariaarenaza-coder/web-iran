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
  telephone: "+34696268527",
  image: "https://www.irantzurejilla.es/images/og-image.jpg",
  logo: "https://www.irantzurejilla.es/icon.png",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Álava" },
    { "@type": "AdministrativeArea", name: "Bizkaia" },
  ],
  sameAs: [
    "https://www.google.com/maps/place/?q=place_id:ChIJsajqGYVpjyQRQZFVwj9aqVw",
  ],
  hasMap:
    "https://www.google.com/maps/place/?q=place_id:ChIJsajqGYVpjyQRQZFVwj9aqVw",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  knowsAbout: [
    "Restauración de sillas",
    "Rejilla",
    "Enea",
    "Alga marina",
    "Trenzados",
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
