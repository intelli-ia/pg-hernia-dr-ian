import type { Metadata } from "next";
import HerniaHero from "@/components/hernia/HerniaHero";
import Technique from "@/components/hernia/Technique";
import Testimonials from "@/components/hernia/Testimonials";
import About from "@/components/hernia/About";
import Where from "@/components/hernia/Where";
import HerniaFaq from "@/components/hernia/HerniaFaq";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";

export const metadata: Metadata = {
  title: "Cirurgia de Hérnia por Videolaparoscopia no Rio e Niterói | Dr. Ian Damas",
  description:
    "Cirurgia de hérnia inguinal e umbilical por videolaparoscopia no Rio de Janeiro (Tijuca) e Niterói (Icaraí). Incisões milimétricas, menos dor e retorno mais rápido à rotina.",
};

export default function Home() {
  return (
    <main className="theme-hernia">
      <HerniaHero />
      <Technique />
      <Testimonials />
      <About />
      <Where />
      <HerniaFaq />
      <Footer />
      <StickyCta label="Agendar minha consulta" />
    </main>
  );
}
