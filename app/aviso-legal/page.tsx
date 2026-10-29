import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aviso legal y privacidad | Irantzu Rejilla",
  description: "Datos de contacto, privacidad y uso de la web de Irantzu Rejilla.",
  alternates: {
    canonical: "/aviso-legal",
  },
};

const sections = [
  {
    title: "Titular",
    paragraphs: [
      "Esta web pertenece a Irantzu Castillo Zubiaga, que se dedica a la restauración de sillas, especializada en rejilla y asientos artesanales.",
      "Contacto: irantzucastillo@gmail.com · WhatsApp 626 407 048.",
    ],
  },
  {
    title: "Tus datos",
    paragraphs: [
      "Esta web no tiene formularios ni te pide datos personales.",
      "Si me escribes por WhatsApp o por email, uso tus datos solo para responderte y preparar tu presupuesto o tu trabajo. No los comparto con nadie ni los uso para publicidad.",
      "Puedes pedirme en cualquier momento que consulte, corrija o borre tus datos escribiendo a irantzucastillo@gmail.com. Si crees que no se han respetado tus derechos, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).",
    ],
  },
  {
    title: "Cookies y estadísticas",
    paragraphs: [
      "Esta web no usa cookies. Para saber cuántas personas la visitan uso Vercel Web Analytics, que cuenta las visitas de forma anónima, sin cookies y sin identificar a nadie. La web está alojada en Vercel.",
    ],
  },
  {
    title: "Opiniones de clientes",
    paragraphs: [
      "Las opiniones que aparecen en esta web son de clientes reales y se publican con su permiso, solo con su nombre y la inicial del apellido.",
    ],
  },
  {
    title: "Textos y fotos",
    paragraphs: [
      "Los textos y las fotos de esta web muestran trabajos reales y no se pueden copiar ni usar sin permiso.",
    ],
  },
];

export default function LegalNotice() {
  return (
    <>
      <main className="bg-[#F8F3E8] min-h-screen px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/"
            className="text-sm text-[#2A5C1B] hover:underline"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            ← Volver a la web
          </Link>

          <h1
            className="text-3xl md:text-4xl font-bold text-[#2D1A0E] mt-8 mb-10"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Aviso legal y privacidad
          </h1>

          <div className="flex flex-col gap-8">
            {sections.map((section) => (
              <section key={section.title} className="flex flex-col gap-3">
                <h2
                  className="text-xl font-bold text-[#2D1A0E]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {section.title}
                </h2>
                {section.paragraphs.map((p) => (
                  <p
                    key={p}
                    className="text-[#6B4226] text-base font-light leading-relaxed"
                    style={{ fontFamily: "var(--font-lato)" }}
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <p
            className="text-xs text-[#C9A96E] mt-12"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Última actualización: octubre de 2026
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
