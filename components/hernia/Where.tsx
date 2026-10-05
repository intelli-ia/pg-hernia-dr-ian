import { Cta, Reveal, SpotCard } from "@/components/shared";

const locations = [
  {
    city: "Rio de Janeiro",
    area: "Tijuca",
    day: "Terças-feiras",
    hours: "das 14h às 18h30",
    address: "R. Desembargador Izidro, 18, Sala 302",
    map: "https://www.google.com/maps/search/?api=1&query=R.+Desembargador+Izidro,+18,+Tijuca,+Rio+de+Janeiro",
  },
  {
    city: "Niterói",
    area: "Icaraí",
    day: "Sextas-feiras",
    hours: "das 14h às 18h30",
    address: "Rua Mariz e Barros, 550",
    map: "https://www.google.com/maps/search/?api=1&query=Rua+Mariz+e+Barros,+550,+Icara%C3%AD,+Niter%C3%B3i",
  },
];

const Icon = ({ d, extra }: { d: string; extra?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d={d} />
    {extra && <path d={extra} />}
  </svg>
);

export default function Where() {
  return (
    <section id="locais" className="section-edge relative overflow-hidden bg-mist bg-stripes py-16 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-tertiary/20 blur-[130px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="mb-12 lg:mb-20 flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-4" aria-hidden>
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-tertiary" />
            <span className="h-1.5 w-1.5 rotate-45 bg-tertiary" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-tertiary" />
          </div>
          <h2 className="max-w-3xl text-3xl lg:text-5xl font-extrabold tracking-tight text-ink leading-[1.1]">
            Onde realizar a sua <span className="text-azure">avaliação cirúrgica</span>
          </h2>
          <p className="max-w-xl text-base lg:text-lg text-ink/60">
            Estrutura de excelência em dois polos de fácil acesso.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {locations.map((l, i) => (
            <Reveal key={l.city} delay={i * 0.1}>
              <SpotCard
                color="74,168,255"
                className="gborder h-full gap-0 rounded-3xl !border-t-0 bg-[linear-gradient(160deg,#0d2a5c_0%,#06142e_70%)] p-8 lg:p-12"
              >
                <span aria-hidden className="pointer-events-none absolute -right-4 -top-6 select-none text-[9rem] font-extrabold leading-none text-white/[0.04] lg:text-[12rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative flex items-center gap-3 text-tertiary">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tertiary/15 ring-1 ring-tertiary/40">
                    <Icon d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" extra="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.25em]">{l.area}</span>
                </div>

                <h3 className="relative mt-6 text-3xl font-extrabold leading-tight text-secondary lg:text-4xl">
                  {l.city} <span className="text-gold">({l.area})</span>
                </h3>

                <div className="relative mt-8 grid gap-5 border-t border-white/10 pt-8">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 text-tertiary"><Icon d="M12 6v6l4 2" extra="M12 21a9 9 0 100-18 9 9 0 000 18z" /></span>
                    <p className="text-secondary">
                      <span className="block text-lg font-bold">{l.day}</span>
                      <span className="text-sm text-secondary/70">{l.hours}</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 text-tertiary"><Icon d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" /></span>
                    <p className="text-secondary">
                      <span className="block text-xs font-bold uppercase tracking-[0.2em] text-secondary/50">Morada</span>
                      <span className="text-base">{l.address}</span>
                    </p>
                  </div>
                </div>

                <a
                  href={l.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-tertiary/50 px-6 py-3 text-xs font-bold uppercase tracking-widest text-tertiary transition-all duration-300 hover:bg-tertiary hover:text-primary"
                >
                  Ver no Google Maps
                  <Icon d="M5 12h14M13 6l6 6-6 6" />
                </a>
              </SpotCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:mt-16">
          <Cta size="lg">Agendar minha consulta</Cta>
        </div>
      </div>
    </section>
  );
}
