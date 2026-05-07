import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-[#F8F3E8] flex items-center relative overflow-hidden"
    >
      {/* Ornamental top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A96E] opacity-50" />

      <div className="max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-end">

          {/* Left chair */}
          <div className="hidden lg:flex justify-center items-end h-full min-h-[520px]">
            <div className="relative w-full max-w-[380px] h-[520px]">
              <Image
                src="/images/silla_izq.png"
                alt="Silla antigua restaurada por Irantzu"
                fill
                className="object-contain drop-shadow-xl"
                sizes="(max-width: 1024px) 0px, 380px"
                priority
              />
            </div>
          </div>

          {/* Center text */}
          <div className="flex flex-col items-center text-center gap-6 lg:gap-8 order-first lg:order-none">
            {/* Ornamental element */}
            <div className="flex items-center gap-3 w-full max-w-xs">
              <span className="flex-1 h-px bg-[#C9A96E]" />
              <OrnamentIcon />
              <span className="flex-1 h-px bg-[#C9A96E]" />
            </div>

            <div>
              <p
                className="text-lg text-[#6B4226] mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Especialista en
              </p>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D1A0E] leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                restauración de sillas antiguas
              </h1>
            </div>

            <p
              className="text-[#6B4226] text-base lg:text-lg max-w-sm leading-relaxed font-light"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Devuelvo belleza, funcionalidad y vida a cada silla, respetando su
              esencia original.
            </p>

            <p
              className="text-5xl lg:text-6xl text-[#C9A96E]"
              style={{ fontFamily: "var(--font-great-vibes)" }}
            >
              Irantzu
            </p>

            <div className="flex items-center gap-3 w-full max-w-xs">
              <span className="flex-1 h-px bg-[#C9A96E]" />
              <OrnamentIcon />
              <span className="flex-1 h-px bg-[#C9A96E]" />
            </div>

            <a
              href="https://wa.me/34626407048"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#2A5C1B] hover:bg-[#1E4414] text-[#F8F3E8] font-medium px-6 py-3 rounded transition-colors"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              <WhatsAppIcon />
              WhatsApp · 626 407 048
            </a>
          </div>

          {/* Right chair */}
          <div className="hidden lg:flex justify-center items-end h-full min-h-[520px]">
            <div className="relative w-full max-w-[380px] h-[520px]">
              <Image
                src="/images/silla_der.png"
                alt="Silla clásica restaurada por Irantzu"
                fill
                className="object-contain drop-shadow-xl"
                sizes="(max-width: 1024px) 0px, 380px"
                priority
              />
            </div>
          </div>
        </div>

        {/* Mobile: chair illustration */}
        <div className="lg:hidden flex justify-center mt-8">
          <div className="relative w-52 h-64 opacity-80">
            <Image
              src="/images/silla_izq.png"
              alt="Silla antigua restaurada"
              fill
              className="object-contain"
              sizes="208px"
            />
          </div>
        </div>
      </div>

      {/* Ornamental bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#C9A96E] opacity-50" />
    </section>
  );
}

function OrnamentIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 2C10 2 8 6 4 8C8 8 10 12 10 12C10 12 12 8 16 8C12 8 10 2 10 2Z"
        fill="#C9A96E"
      />
      <path
        d="M10 9C10 9 8.5 11 6 12C8.5 12 10 15 10 15C10 15 11.5 12 14 12C11.5 12 10 9 10 9Z"
        fill="#C9A96E"
        opacity="0.5"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}
