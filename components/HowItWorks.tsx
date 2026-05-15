import OrnamentLine from "./OrnamentLine";

const steps = [
  {
    number: "01",
    title: "Me contactas",
    description:
      "Me escribes por WhatsApp con una foto de tu silla. Te respondo en menos de 24 horas.",
  },
  {
    number: "02",
    title: "Traes tu silla",
    description:
      "Traes la pieza hasta mí para que pueda valorarla en persona, sin compromiso ni coste.",
  },
  {
    number: "03",
    title: "La restauro",
    description:
      "Trabajo con materiales de calidad y técnicas tradicionales, cuidando cada detalle.",
  },
  {
    number: "04",
    title: "Te la entrego",
    description:
      "Recoges tu silla restaurada, con toda su belleza y solidez recuperadas.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-trabajo" className="bg-[#F8F3E8] py-20 px-6">
      <OrnamentLine className="max-w-xs mx-auto mb-10" />

      <h2
        className="text-3xl md:text-4xl font-bold text-[#2D1A0E] text-center mb-4"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Cómo trabajo
      </h2>
      <p
        className="text-center text-[#6B4226] font-light text-base mb-14 max-w-md mx-auto"
        style={{ fontFamily: "var(--font-lato)" }}
      >
        Un proceso sencillo, cercano y sin sorpresas.
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={step.number} className="flex flex-col items-center text-center gap-4">
            {/* Icon circle */}
            <div className="w-16 h-16 rounded-full border border-[#C9A96E] flex items-center justify-center bg-[#F0EAD8]">
              <StepIcon index={i} />
            </div>

            {/* Step number */}
            <span
              className="text-xs tracking-widest text-[#C9A96E] uppercase"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Paso {step.number}
            </span>

            {/* Title */}
            <h3
              className="text-lg font-bold text-[#2D1A0E] leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {step.title}
            </h3>

            {/* Description */}
            <p
              className="text-[#6B4226] text-base font-light leading-relaxed"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function StepIcon({ index }: { index: number }) {
  const icons = [
    // 0 — Me contactas: chat bubble
    <svg key={0} width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>,
    // 1 — Valoro tu silla: eye
    <svg key={1} width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>,
    // 2 — La restauro: tools/hand
    <svg key={2} width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>,
    // 3 — Te la entrego: check circle
    <svg key={3} width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>,
  ];
  return icons[index] ?? null;
}
