"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cta } from "@/components/shared";

const faqs = [
  {
    q: "Qual é o valor da avaliação e o que está incluído?",
    a: "A consulta particular tem o valor de R$ 400,00. Este montante contempla a avaliação clínica presencial (aproximadamente 1 hora), o planeamento de exames, a consulta de retorno para análise dos laudos e 30 dias de contacto direto comigo pelo WhatsApp para esclarecer qualquer questão pré-operatória.",
  },
  {
    q: "O atendimento abrange planos de saúde (convénios)?",
    a: "Sim. As avaliações e os procedimentos cirúrgicos podem ser realizados através da Golden Cross, Unimed, AMIL, Saúde Caixa e Saúde Petrobras em ambas as clínicas. Exclusivamente para a unidade de Niterói, também atendo pela Sulamerica e Bradesco Saúde.",
  },
  {
    q: "A videolaparoscopia é indicada para o meu tipo de hérnia?",
    a: "Sim. A abordagem minimamente invasiva é o padrão ouro atual para a correção da grande maioria das hérnias umbilicais e inguinais. O método exato será confirmado durante o seu exame físico no consultório.",
  },
  {
    q: "O pós-operatório é muito doloroso?",
    a: "Como a videolaparoscopia utiliza incisões milimétricas em vez dos grandes cortes da cirurgia aberta, o trauma nos tecidos é drasticamente menor. Isto resulta num nível de dor pós-operatória bastante inferior e controlável com medicação simples.",
  },
  {
    q: "Em quanto tempo posso voltar a trabalhar ou a treinar?",
    a: "O tempo de repouso é significativamente mais curto em comparação com o método tradicional. O regresso ao trabalho administrativo ocorre habitualmente em poucos dias. O retorno a atividades físicas intensas será planeado de forma progressiva durante as nossas consultas de acompanhamento.",
  },
  {
    q: "Posso continuar a adiar a cirurgia se não tiver dor?",
    a: "A ausência de dor constante não significa ausência de risco. A falha na musculatura continua presente e pode agravar-se com o esforço físico diário. Programar a cirurgia eletiva é a única forma de garantir que o procedimento seja feito com planeamento, evitando o risco de um encarceramento intestinal de emergência.",
  },
];

export default function HerniaFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-edge relative overflow-hidden bg-primary py-16 lg:py-32 bg-[radial-gradient(ellipse_at_top_right,rgb(74_168_255/0.2),transparent_60%),var(--gradient-primary)]">
      <div aria-hidden className="bg-grid-dark pointer-events-none absolute inset-0" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-4" aria-hidden>
              <span className="h-px w-12 bg-gradient-to-r from-tertiary to-transparent" />
              <span className="h-1.5 w-1.5 rotate-45 bg-tertiary" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-secondary leading-[1.1]">
              Esclareça as suas <span className="text-gold">dúvidas</span> antes da consulta
            </h2>
            <Cta size="lg">Agendar minha consulta</Cta>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={faq.q}
                  className={`glass-dark gborder rounded-2xl transition-all duration-500 ${isOpen ? "shadow-[0_0_40px_-10px_rgb(74_168_255/0.5)]" : ""}`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-5 px-6 py-5 text-left lg:px-8 lg:py-6"
                  >
                    <span className={`text-2xl font-extrabold tabular-nums transition-colors lg:text-3xl ${isOpen ? "text-gold" : "text-secondary/25"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-sm font-bold leading-snug text-secondary lg:text-base">{faq.q}</span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-tertiary transition-all duration-300 ${isOpen ? "rotate-45 border-tertiary bg-tertiary/15" : "border-secondary/20"}`}
                      aria-hidden
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="ml-[4.25rem] border-l border-tertiary/30 pb-6 pl-5 pr-6 text-sm leading-[1.8] text-secondary/75 lg:ml-[5.5rem] lg:pr-8 lg:text-[15px]">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
