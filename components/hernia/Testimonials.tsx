"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared";
import {
  CircularGallery,
  type CircularGalleryHandle,
  type GalleryItem,
} from "@/components/ui/circular-gallery-2";

const testimonials = [
  {
    name: "Lúcia Maria",
    text: "Ótimo cirurgião geral poxa agradeço a Deus por colocar ele no dia que entrei no Getúlio doutor Ian foi especial salvou minha vida explica não deixa dúvidas ao paciente",
  },
  {
    name: "Wesley Freitas",
    text: "Recomendo. Profissional excelente!",
  },
  {
    name: "Lucas Couto",
    text: "O Dr. Ian, além de um profissional extremamente competente, é um ser humano maravilhoso! Dedicado ao paciente, à profissão e com toda paciência pra explicar, tirar dúvidas e acolher! Recomendo a todos!",
  },
  {
    name: "Roberta Neves Ferreira",
    text: "Cirurgião excelente, atencioso, competente, interessado. Uma escolha acertada com certeza!!!",
  },
  {
    name: "Ana Paula Messias",
    text: "Venho agradecer ao Dr. Ian pelo seu trabalho de assistência médica de excelência para os pacientes. Além de seu profissionalismo, ele é muito dedicado e explica tudo que o paciente precisa saber. Indico o seu trabalho.",
  },
];

/** Desenha o card (proporção 7:9, igual ao plano da galeria) e devolve um data URL. */
function drawCard(text: string, fontFamily: string, index: number): string {
  const W = 1400;
  const H = 1800;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;

  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, "#14397a");
  bg.addColorStop(0.55, "#0a2250");
  bg.addColorStop(1, "#06142e");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  const glow = ctx.createRadialGradient(W * 0.85, 0, 0, W * 0.85, 0, 900);
  glow.addColorStop(0, "rgba(74,168,255,0.38)");
  glow.addColorStop(1, "rgba(74,168,255,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  // moldura interna
  ctx.strokeStyle = "rgba(120,195,255,0.35)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(46, 46, W - 92, H - 92, 70);
  ctx.stroke();

  // numeração
  ctx.fillStyle = "#4aa8ff";
  ctx.font = `800 54px ${fontFamily}`;
  ctx.textBaseline = "alphabetic";
  ctx.fillText(String(index + 1).padStart(2, "0"), 130, 190);

  // aspas
  ctx.fillStyle = "rgba(74,168,255,0.9)";
  ctx.font = `700 420px Georgia, serif`;
  ctx.fillText("“", 120, 600);

  // texto
  const size = text.length < 60 ? 100 : text.length < 120 ? 82 : 70;
  ctx.fillStyle = "#f4f8ff";
  ctx.font = `600 ${size}px ${fontFamily}`;
  const maxWidth = W - 260;
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = w;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);

  const lineHeight = size * 1.42;
  lines.forEach((l, i) => ctx.fillText(l, 130, 720 + i * lineHeight));

  // fio inferior
  const rule = ctx.createLinearGradient(130, 0, W - 130, 0);
  rule.addColorStop(0, "rgba(74,168,255,0.9)");
  rule.addColorStop(1, "rgba(74,168,255,0)");
  ctx.fillStyle = rule;
  ctx.fillRect(130, H - 170, W - 260, 4);

  return canvas.toDataURL("image/png");
}

export default function Testimonials() {
  const [items, setItems] = useState<GalleryItem[] | null>(null);
  const controls = useRef<CircularGalleryHandle | null>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    let cancelled = false;
    document.fonts.ready.then(() => {
      if (cancelled) return;
      const family = getComputedStyle(document.body).fontFamily;
      setItems(
        testimonials.map((t, i) => ({ image: drawCard(t.text, family, i), text: t.name })),
      );
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="section-edge relative overflow-hidden bg-primary py-16 lg:py-32 bg-[radial-gradient(ellipse_at_top,rgb(74_168_255/0.22),transparent_60%),var(--gradient-primary)]">
      <div aria-hidden className="bg-grid-dark pointer-events-none absolute inset-0" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-tertiary/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="mb-0 flex flex-col items-center text-center gap-5">
          <div className="flex items-center gap-4" aria-hidden>
            <span className="glow-line w-12" />
            <span className="h-1.5 w-1.5 rotate-45 bg-tertiary" />
            <span className="glow-line w-12" />
          </div>
          <h2 className="max-w-3xl text-3xl lg:text-5xl font-extrabold tracking-tight text-secondary leading-[1.1]">
            A experiência dos nossos <span className="text-gold">pacientes</span>
          </h2>
        </Reveal>
      </div>

      {/* Galeria 3D (os cards são desenhados em canvas, então o texto também vai em sr-only) */}
      <div className="relative -mt-8 h-[460px] w-full lg:-mt-16 lg:h-[720px]">
        {items && (
          <CircularGallery
            items={items}
            bend={mobile ? 0.6 : 2.2}
            borderRadius={0.05}
            scrollSpeed={2.4}
            scrollEase={0.06}
            fontClassName="text-secondary font-bold text-[34px]"
            controlsRef={controls}
          />
        )}
        <ul className="sr-only">
          {testimonials.map((t) => (
            <li key={t.name}>
              “{t.text}” — {t.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-2 flex items-center justify-center gap-4">
        {([-1, 1] as const).map((d) => (
          <button
            key={d}
            onClick={() => (d === 1 ? controls.current?.next() : controls.current?.prev())}
            aria-label={d === 1 ? "Próximo depoimento" : "Depoimento anterior"}
            className="glass-dark flex h-12 w-12 items-center justify-center rounded-full text-tertiary transition-all duration-300 hover:scale-105 hover:bg-tertiary hover:text-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d={d === 1 ? "M5 12h14M13 6l6 6-6 6" : "M19 12H5M11 6l-6 6 6 6"} />
            </svg>
          </button>
        ))}
      </div>
    </section>
  );
}
