import OrnamentLine from "./OrnamentLine";

const testimonials = [
  {
    quote:
      "Le llevé una silla de mi abuela que parecía imposible de recuperar. Irantzu la devolvió como nueva, respetando cada detalle original. No podía creerlo.",
    name: "Miren Etxeberria",
    location: "Vitoria-Gasteiz",
  },
  {
    quote:
      "Trato cercano, presupuesto honesto y un resultado precioso. Volvería sin dudarlo y ya le he recomendado a toda mi familia.",
    name: "Josu Uriarte",
    location: "Bilbao",
  },
  {
    quote:
      "Tenía un juego de sillas isabelinas heredadas que nadie quería tocar. Irantzu las restauró con una paciencia y un oficio impresionantes.",
    name: "Amaia Goikoetxea",
    location: "Durango",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-[#F0EAD8] py-20 px-6">
      <OrnamentLine className="max-w-xs mx-auto mb-10" />

      <h2
        className="text-3xl md:text-4xl font-bold text-[#2D1A0E] text-center mb-14"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Lo que dicen
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-[#F8F3E8] border border-[#C9A96E]/40 rounded-lg p-6 flex flex-col gap-4"
          >
            {/* Quote mark */}
            <span
              className="text-4xl leading-none text-[#C9A96E] opacity-60 font-serif"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <p
              className="text-[#6B4226] text-sm font-light leading-relaxed flex-1"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              {t.quote}
            </p>

            <div className="h-px w-full bg-[#D4C5A9]" />

            <div>
              <p
                className="text-[#2D1A0E] text-sm font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {t.name}
              </p>
              <p
                className="text-[#C9A96E] text-xs tracking-wide"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                {t.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
