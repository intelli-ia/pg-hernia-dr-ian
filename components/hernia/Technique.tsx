import Image from "next/image";
import { Cta, Reveal } from "@/components/shared";

export default function Technique() {
  return (
    <section className="section-edge relative overflow-hidden bg-secondary bg-stripes py-16 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute -right-32 top-10 h-[520px] w-[520px] rounded-full bg-tertiary/20 blur-[130px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Imagem com moldura deslocada */}
        <Reveal className="relative order-2 lg:order-1 lg:col-span-5">
          <div aria-hidden className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-tertiary/50 lg:-left-6 lg:-top-6" />
          <div aria-hidden className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-gradient-to-br from-tertiary to-[#1560d4] opacity-90 blur-[1px] lg:-bottom-6 lg:-right-6 lg:h-32 lg:w-32" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/40">
            <Image
              src="/images/card-minimamente-invasiva-ian.webp"
              alt="Cirurgia minimamente invasiva por videolaparoscopia"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/10" />
            <div aria-hidden className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/20" />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2 lg:col-span-7 flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
          <div className="flex items-center gap-4" aria-hidden>
            <span className="h-px w-12 bg-gradient-to-r from-tertiary to-transparent" />
            <span className="h-1.5 w-1.5 rotate-45 bg-tertiary" />
          </div>

          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-ink leading-[1.1]">
            Esqueça a recuperação demorada e as{" "}
            <span className="text-azure">cicatrizes visíveis</span> da cirurgia tradicional.
          </h2>

          <div className="glass-light relative rounded-3xl p-7 text-left lg:p-10">
            <span aria-hidden className="absolute bottom-8 left-0 top-8 w-1 rounded-r-full bg-gradient-to-b from-[#4aa8ff] to-[#1560d4]" />
            <p className="text-base leading-[1.8] text-ink/75 lg:text-lg">
              A videolaparoscopia substitui a agressão dos métodos antigos por incisões milimétricas. Esta técnica
              minimamente invasiva garante menos dor no pós-operatório, reduz o risco de infeções e permite um
              regresso muito mais rápido ao seu trabalho e à sua rotina. Resolva a sua hérnia de forma definitiva,
              sem colocar a sua vida em pausa.
            </p>
          </div>

          <Cta size="lg">Agendar minha consulta</Cta>
        </Reveal>
      </div>
    </section>
  );
}
