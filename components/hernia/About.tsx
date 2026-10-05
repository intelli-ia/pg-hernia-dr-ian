import Image from "next/image";
import { Cta, Reveal } from "@/components/shared";

export default function About() {
  return (
    <section className="section-edge relative overflow-hidden bg-primary py-16 lg:py-32 bg-[radial-gradient(ellipse_at_left,rgb(74_168_255/0.2),transparent_55%),var(--gradient-primary)]">
      <div aria-hidden className="bg-grid-dark pointer-events-none absolute inset-0" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal className="lg:col-span-5 flex justify-center">
          <div className="relative w-4/5 max-w-md lg:w-full">
            <div aria-hidden className="absolute -inset-6 rounded-[3rem] bg-tertiary/25 blur-3xl" />
            <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-tertiary/50 lg:translate-x-6 lg:translate-y-6" />
            <div className="gborder relative overflow-hidden rounded-[2rem] shadow-2xl shadow-black/50">
              <Image
                src="/images/ian-sm.webp"
                alt="Dr. Ian Damas"
                width={700}
                height={938}
                sizes="(min-width: 1024px) 38vw, 80vw"
                className="h-auto w-full object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7 flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
          <div className="flex items-center gap-4" aria-hidden>
            <span className="h-px w-12 bg-gradient-to-r from-tertiary to-transparent" />
            <span className="h-1.5 w-1.5 rotate-45 bg-tertiary" />
          </div>

          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-secondary leading-[1.1]">
            Quem <span className="text-gold">sou eu?</span>
          </h2>

          <div className="glass-dark gborder relative rounded-3xl p-7 text-left lg:p-10">
            <span aria-hidden className="absolute bottom-8 left-0 top-8 w-1 rounded-r-full bg-gradient-to-b from-[#9fe0ff] to-[#4aa8ff]" />
            <p className="text-base leading-[1.8] text-secondary/85 lg:text-lg">
              Me chamo Dr. Ian Damas, sou Cirurgião Geral e do Aparelho Digestivo com 8 anos de experiência focada
              na sua rápida recuperação. Sou um dos poucos profissionais no Brasil especializado em cirurgia
              minimamente invasiva. Com atuação na linha de frente de grandes centros de trauma como o Hospital
              Federal dos Servidores do Estado e o Hospital Estadual Getúlio Vargas, além da preceptoria no
              Hospital Federal da Lagoa, o meu foco é realizar uma intervenção de alta precisão para resolver a sua
              hérnia sem atrasar o seu regresso à rotina.
            </p>
          </div>

          <Cta size="lg">Agendar minha consulta</Cta>
        </Reveal>
      </div>
    </section>
  );
}
