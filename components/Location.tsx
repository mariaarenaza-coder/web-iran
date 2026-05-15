import Image from "next/image";

export default function Location() {
  return (
    <section id="contacto" className="bg-[#2D1A0E] text-[#F8F3E8] py-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Text */}
        <div className="flex flex-col justify-center gap-6 px-8 md:px-16 py-16">
          {/* Ornament */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#C9A96E]" />
            <span
              className="text-xs tracking-widest uppercase text-[#C9A96E]"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Dónde encontrarme
            </span>
          </div>

          <div className="flex items-start gap-3">
            <PinIcon />
            <h2
              className="text-2xl md:text-3xl font-bold text-[#F8F3E8] leading-snug"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Trae tu silla a mi taller
            </h2>
          </div>

          <p
            className="text-[#D4C5A9] leading-relaxed font-light text-base"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Puedes traerme tu mueble a cualquiera de mis dos talleres. Te
            atiendo con cita previa.
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <PinIcon />
              <div style={{ fontFamily: "var(--font-lato)" }}>
                <p className="text-[#F8F3E8] text-base font-medium">Zuia</p>
                <p className="text-[#D4C5A9] text-base font-light">Álava</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <PinIcon />
              <div style={{ fontFamily: "var(--font-lato)" }}>
                <p className="text-[#F8F3E8] text-base font-medium">Bilbao</p>
                <p className="text-[#D4C5A9] text-base font-light">Bizkaia</p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/34626407048"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#2A5C1B] hover:bg-[#1E4414] text-[#F8F3E8] font-medium px-6 py-3 rounded transition-colors w-fit text-sm"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            <WhatsAppIcon />
            Solicitar valoración
          </a>
        </div>

        {/* Photo */}
        <div className="relative h-72 md:h-auto md:min-h-[400px]">
          <Image
            src="/images/irantzu-working-2.jpg"
            alt="Irantzu sonriendo en su taller de restauración"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Overlay for cohesion */}
          <div className="absolute inset-0 bg-[#2D1A0E]/20" />
        </div>
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C9A96E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 mt-1"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
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
