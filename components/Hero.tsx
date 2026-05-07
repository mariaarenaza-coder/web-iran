import Image from "next/image";
import OrnamentLine from "./OrnamentLine";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-[#F8F3E8] relative overflow-hidden"
    >

      {/* Corner botanical ornaments */}
      <BotanicalTL />
      <BotanicalTR />

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-end gap-0">

          {/* ── LEFT CHAIR ── */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/silla_izq.png"
            alt="Silla antigua restaurada por Irantzu"
            className="hidden lg:block flex-shrink-0 self-end drop-shadow-2xl"
            style={{ height: "520px", width: "auto" }}
          />

          {/* ── CENTER TEXT ── */}
          <div className="flex flex-col items-center text-center flex-1 py-8 px-6 lg:px-10">
            <OrnamentLine className="w-full max-w-[220px] mb-6" />

            <p
              className="text-base text-[#6B4226] mb-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Especialista en
            </p>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D1A0E] leading-tight mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              restauración de<br />sillas antiguas
            </h1>
            <p
              className="text-[#6B4226] text-sm lg:text-base leading-relaxed font-light mb-4 max-w-xs"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Devuelvo belleza, funcionalidad y vida a cada silla,
              respetando su esencia original.
            </p>
            <p
              className="text-4xl lg:text-5xl text-[#C9A96E] mb-6"
              style={{ fontFamily: "var(--font-great-vibes)" }}
            >
              Irantzu
            </p>

            <OrnamentLine className="w-full max-w-[220px] mb-7" />

            <a
              href="https://wa.me/34626407048"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#2A5C1B] hover:bg-[#1E4414] text-[#F8F3E8] font-medium px-6 py-3 rounded transition-colors text-sm"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              <WhatsAppIcon />
              WhatsApp · 626 407 048
            </a>
          </div>

          {/* ── RIGHT CHAIR ── */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/silla_der.png"
            alt="Silla rústica restaurada por Irantzu"
            className="hidden lg:block flex-shrink-0 self-end drop-shadow-2xl"
            style={{ height: "520px", width: "auto" }}
          />

        </div>

      </div>

      {/* ── MOBILE chair ── */}
      <div className="lg:hidden flex justify-center pb-10 pt-4">
        <Image
          src="/images/silla_izq.png"
          alt="Silla antigua restaurada"
          width={389}
          height={700}
          style={{ width: "55vw", height: "auto" }}
        />
      </div>
    </section>
  );
}

/* ─── Botanical corner ornaments ─── */

function BotanicalTL() {
  return (
    <svg
      className="absolute top-0 left-0 pointer-events-none"
      width="200"
      height="180"
      viewBox="0 0 200 180"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 170 C25 130 55 85 100 55 C140 32 175 22 198 8" stroke="#C9A96E" strokeWidth="1" opacity="0.4"/>
      <path d="M55 100 C38 78 18 68 2 70" stroke="#C9A96E" strokeWidth="0.8" opacity="0.35"/>
      <path d="M100 58 C92 38 80 24 64 14" stroke="#C9A96E" strokeWidth="0.8" opacity="0.35"/>
      <path d="M148 28 C142 14 133 6 120 2" stroke="#C9A96E" strokeWidth="0.8" opacity="0.35"/>
      <ellipse cx="10" cy="82" rx="9" ry="4" fill="#C9A96E" opacity="0.2" transform="rotate(-38 10 82)"/>
      <ellipse cx="68" cy="20" rx="9" ry="4" fill="#C9A96E" opacity="0.2" transform="rotate(-58 68 20)"/>
      <ellipse cx="124" cy="6" rx="8" ry="4" fill="#C9A96E" opacity="0.2" transform="rotate(-18 124 6)"/>
      <ellipse cx="80" cy="76" rx="7" ry="3" fill="#C9A96E" opacity="0.18" transform="rotate(-48 80 76)"/>
    </svg>
  );
}

function BotanicalTR() {
  return (
    <svg
      className="absolute top-0 right-0 pointer-events-none"
      width="200"
      height="180"
      viewBox="0 0 200 180"
      fill="none"
      aria-hidden="true"
      style={{ transform: "scaleX(-1)" }}
    >
      <path d="M0 170 C25 130 55 85 100 55 C140 32 175 22 198 8" stroke="#C9A96E" strokeWidth="1" opacity="0.4"/>
      <path d="M55 100 C38 78 18 68 2 70" stroke="#C9A96E" strokeWidth="0.8" opacity="0.35"/>
      <path d="M100 58 C92 38 80 24 64 14" stroke="#C9A96E" strokeWidth="0.8" opacity="0.35"/>
      <path d="M148 28 C142 14 133 6 120 2" stroke="#C9A96E" strokeWidth="0.8" opacity="0.35"/>
      <ellipse cx="10" cy="82" rx="9" ry="4" fill="#C9A96E" opacity="0.2" transform="rotate(-38 10 82)"/>
      <ellipse cx="68" cy="20" rx="9" ry="4" fill="#C9A96E" opacity="0.2" transform="rotate(-58 68 20)"/>
      <ellipse cx="124" cy="6" rx="8" ry="4" fill="#C9A96E" opacity="0.2" transform="rotate(-18 124 6)"/>
      <ellipse cx="80" cy="76" rx="7" ry="3" fill="#C9A96E" opacity="0.18" transform="rotate(-48 80 76)"/>
    </svg>
  );
}

function OrnamentDiamond() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 1 L13 7 L7 13 L1 7 Z" fill="#C9A96E" opacity="0.8"/>
      <path d="M7 4 L10 7 L7 10 L4 7 Z" fill="#F8F3E8"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  );
}
