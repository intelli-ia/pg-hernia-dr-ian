import Hero from "@/components/Hero";
import Signals from "@/components/Signals";
import Surgeon from "@/components/Surgeon";
import Method from "@/components/Method";
import Locations from "@/components/Locations";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Signals />
      <Surgeon />
      <Method />
      <Locations />
      <FAQ />
      <Footer />
      <StickyCta />
    </main>
  );
}
