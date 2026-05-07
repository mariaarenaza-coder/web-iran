import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Techniques from "@/components/Techniques";
import About from "@/components/About";
import Works from "@/components/Works";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Techniques />
        <About />
        <Works />
        <Location />
      </main>
      <Footer />
    </>
  );
}
