import Image from "next/image";

export default function About() {
  return (
    <section id="sobre-mi" className="bg-[#F8F3E8] py-20 px-6">
      {/* Section header */}
      <div className="flex items-center gap-3 max-w-xs mx-auto mb-6">
        <span className="flex-1 h-px bg-[#C9A96E] opacity-70" />
        <span
          className="text-xs tracking-widest uppercase text-[#C9A96E]"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          Mi historia
        </span>
        <span className="flex-1 h-px bg-[#C9A96E] opacity-70" />
      </div>

      <h2
        className="text-3xl md:text-4xl font-bold text-[#2D1A0E] text-center mb-14"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Sobre mí
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-lg overflow-hidden shadow-[4px_8px_32px_rgba(45,26,14,0.15)]">
            <Image
              src="/images/irantzu-working-1.jpg"
              alt="Irantzu trabajando en la restauración de una silla"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 384px"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6">
          <p
            className="text-[#6B4226] leading-relaxed font-light text-base"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Soy Irantzu, apasionada por la restauración. Lo que empezó siendo
            una simple afición, tras muchos años de aprendizaje y práctica, se
            ha convertido en auténtica pasión. En especial por las sillas
            antiguas de rejilla y por todo lo que cuentan. Creo que cada pieza tiene una
            historia que merece continuar. Y ese es mi objetivo. Mi trabajo
            combina técnica, paciencia y respeto por la tradición, para
            devolver a cada silla de rejilla su belleza y solidez.
          </p>

          <p
            className="text-[#6B4226] leading-relaxed font-light text-base"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Trabajo con cuidado, honestidad y materiales de calidad.
          </p>

        </div>
      </div>
    </section>
  );
}
