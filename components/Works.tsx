import Image from "next/image";
import OrnamentLine from "./OrnamentLine";

export default function Works() {
  const works = [
    {
      src: "/images/silla-thonet.jpg",
      name: "Silla Thonet",
      description: "Restauración de rejilla en respaldo y asiento",
    },
    {
      src: "/images/silla-isabelina.jpg",
      name: "Silla Isabelina",
      description: "Restauración de asiento de cincha",
    },
    {
      src: "/images/silla-rustica.jpg",
      name: "Silla Rústica",
      description: "Restauración de estructura y asiento de enea",
    },
  ];

  return (
    <section id="trabajos" className="bg-[#F0EAD8] py-20 px-6 relative">
      <OrnamentLine className="max-w-xs mx-auto mb-10" />

      <h2
        className="text-3xl md:text-4xl font-bold text-[#2D1A0E] text-center mb-14"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Mis trabajos
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work, i) => (
          <div
            key={i}
            className="bg-[#F8F3E8] border border-[#C9A96E] rounded-lg overflow-hidden flex flex-col"
          >
            {/* Photo */}
            <div className="relative aspect-[3/2]">
              <Image
                src={work.src}
                alt={work.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span
                className="absolute bottom-2 left-2 text-[10px] tracking-widest uppercase bg-[#F8F3E8]/80 text-[#6B4226] px-2 py-0.5 rounded"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                Antes · Después
              </span>
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
          Ver mis trabajos
        </a>
      </div>

    </section>
  );
}
