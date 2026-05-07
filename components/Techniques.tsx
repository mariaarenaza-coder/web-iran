import Image from "next/image";

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
      title: "Trabajo",
      subtitle: "asientos de cincha",
    },
    {
      icon: "/images/icon5.png",
      title: "Acabo y protejo",
      subtitle: "la madera",
    },
  ];

  return (
    <section className="bg-white/60 py-20 px-6 relative">
      {/* Top ornament */}
      <div className="flex items-center gap-4 max-w-xs mx-auto mb-10">
        <span className="flex-1 h-px bg-[#C9A96E]" />
        <span className="text-[#C9A96E] text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-lato)" }}>
          ✦
        </span>
        <span className="flex-1 h-px bg-[#C9A96E]" />
      </div>

      <h2
        className="text-3xl md:text-4xl font-bold text-[#2D1A0E] text-center mb-14"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Mis técnicas
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {techniques.map((tech, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-4">
            <Image
              src={tech.icon}
              alt={`${tech.title} ${tech.subtitle}`}
              width={100}
              height={100}
              className="object-contain"
            />
            <div>
              <p
                className="font-bold text-[#2D1A0E] text-sm"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                {tech.title}
              </p>
              <p
                className="text-[#6B4226] text-xs leading-snug mt-1 font-light"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                {tech.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom separator */}
      <div className="h-px w-full max-w-4xl mx-auto bg-[#D4C5A9] mt-16" />
    </section>
  );
}
