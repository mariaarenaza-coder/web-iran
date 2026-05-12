export default function Footer() {
  return (
    <footer className="bg-[#2D1A0E] text-[#F8F3E8]">
      {/* Gold separator */}
      <div className="h-px w-full bg-[#C9A96E]" />

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Col 1: Logo */}
        <div className="flex flex-col gap-3">
          <div>
            <p
              className="text-xl font-bold text-[#F8F3E8]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Irantzu
            </p>
            <p
              className="text-[10px] tracking-widest uppercase text-[#C9A96E]"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              RESTAURACIÓN
            </p>
          </div>
          <p
            className="text-[#D4C5A9] text-sm font-light leading-relaxed"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Restauración de sillas · especializada en rejilla
          </p>
        </div>

        {/* Col 2: WhatsApp */}
        <div className="flex flex-col gap-3">
          <p
            className="text-xs tracking-widest uppercase text-[#C9A96E]"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Contacto
          </p>
          <a
            href="https://wa.me/34626407048"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#D4C5A9] hover:text-[#F8F3E8] transition-colors text-sm"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            <WhatsAppIcon />
            626 407 048
          </a>
        </div>

        {/* Col 3: Location */}
        <div className="flex flex-col gap-3">
          <p
            className="text-xs tracking-widest uppercase text-[#C9A96E]"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Talleres
          </p>
          <div className="flex items-start gap-3">
            <CityIcon />
            <div className="flex flex-col gap-1" style={{ fontFamily: "var(--font-lato)" }}>
              <p className="text-[#D4C5A9] text-sm font-light">Zuia · Álava</p>
              <p className="text-[#D4C5A9] text-sm font-light">Bilbao · Bizkaia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#6B4226]/40 px-6 py-4">
        <p
          className="text-center text-[#6B4226] text-xs"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          © 2025 Irantzu Restauración · Todos los derechos reservados ·{" "}
          <a href="#" className="hover:text-[#C9A96E] transition-colors">
            Política de privacidad
          </a>
        </p>
      </div>
    </footer>
  );
}

function CityIcon() {
  return (
    <svg width="38" height="32" viewBox="0 0 38 32" fill="none" aria-hidden="true">
      {/* Mountains background */}
      <path d="M0 28 L8 14 L14 22 L19 10 L24 22 L30 14 L38 28 Z" fill="#C9A96E" opacity="0.2"/>
      {/* Mountain peaks */}
      <path d="M12 28 L19 12 L26 28 Z" fill="#C9A96E" opacity="0.35"/>
      {/* Building/tower left */}
      <rect x="3" y="18" width="6" height="10" rx="0.5" fill="#C9A96E" opacity="0.5"/>
      <rect x="5" y="16" width="2" height="3" rx="0.5" fill="#C9A96E" opacity="0.5"/>
      {/* Building/tower right */}
      <rect x="29" y="20" width="6" height="8" rx="0.5" fill="#C9A96E" opacity="0.5"/>
      <rect x="31" y="17" width="2" height="4" rx="0.5" fill="#C9A96E" opacity="0.5"/>
      {/* Ground line */}
      <line x1="0" y1="28" x2="38" y2="28" stroke="#C9A96E" strokeWidth="1" opacity="0.4"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}
