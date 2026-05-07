import Image from "next/image";

export default function Works() {
  const works = [
    {
      src: "/images/trabajo1.jpg",
      name: "Silla Colonial",
      description: "Restauración de asiento de rejilla",
    },
    {
      src: "/images/trabajo2.jpg",
      name: "Silla Victoriana",
      description: "Restauración de respaldo de rejilla",
    },
    {
      src: "/images/trabajo3.jpg",
      name: "Rejilla artesanal",
      description: "Tejido tradicional en mimbre",
    },
    {
      src: "/images/trabajo4.jpg",
      name: "Trabajo en curso",
      description: "Restauración de respaldo de gran formato",
    },
  ];

  return (
    <section id="trabajos" className="bg-[#F0EAD8] py-20 px-6 relative">
      {/* Top separator */}
      <div className="h-px w-full max-w-4xl mx-auto bg-[#D4C5A9] mb-16" />

      {/* Ornament */}
      <div className="flex items-center gap-4 max-w-xs mx-auto mb-10">
        <span className="flex-1 h-px bg-[#C9A96E]" />
        <span className="text-[#C9A96E] text-xs" aria-hidden="true">✦</span>
        <span className="flex-1 h-px bg-[#C9A96E]" />
      </div>

      <h2
        className="text-3xl md:text-4xl font-bold text-[#2D1A0E] text-center mb-14"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Mis trabajos
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {works.map((work, i) => (
          <div
            key={i}
            className="bg-[#F8F3E8] border border-[#C9A96E] rounded-lg overflow-hidden flex flex-col"
          >
            {/* Photo */}
            <div className="relative aspect-[4/5]">
              <Image
                src={work.src}
                alt={work.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Card text */}
            <div className="p-4 flex flex-col gap-1">
              <h3
                className="text-[#2D1A0E] font-bold text-base"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {work.name}
              </h3>
              <p
                className="text-[#6B4226] text-xs font-light"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA button */}
      <div className="flex justify-center mt-12">
        <a
          href="https://wa.me/34626407048"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#2A5C1B] text-[#2A5C1B] hover:bg-[#2A5C1B] hover:text-[#F8F3E8] px-6 py-2.5 rounded transition-colors text-sm font-medium"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          Ver mis trabajos →
        </a>
      </div>

      {/* Bottom separator */}
      <div className="h-px w-full max-w-4xl mx-auto bg-[#D4C5A9] mt-16" />
    </section>
  );
}
