import Image from "next/image";
import OrnamentLine from "./OrnamentLine";

export default function Techniques() {
  const techniques = [
    {
      icon: "/images/icon1.png",
      title: "Analizo",
      subtitle: "cada pieza",
    },
    {
      icon: "/images/icon2.png",
      title: "Reparo",
      subtitle: "estructuras y uniones",
    },
    {
      icon: "/images/icon3.png",
      title: "Restauro",
      subtitle: "rejilla, alga marina, enea y trenzados",
    },
    {
      icon: "/images/icon4.png",
      title: "Acabo y protejo",
      subtitle: "la madera",
    },
  ];

  return (
    <section className="bg-white/60 py-20 px-6 relative">
      <OrnamentLine className="max-w-xs mx-auto mb-10" />

      <h2
        className="text-3xl md:text-4xl font-bold text-[#2D1A0E] text-center mb-14"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Mis técnicas
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {techniques.map((tech, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-4">
            <Image
              src={tech.icon}
              alt={`${tech.title} ${tech.subtitle}`}
              width={140}
              height={140}
              className="object-contain"
            />
            <div>
              <p
                className="font-bold text-[#2D1A0E] text-base"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                {tech.title}
              </p>
              <p
                className="text-[#6B4226] text-sm leading-snug mt-1 font-light"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                {tech.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
