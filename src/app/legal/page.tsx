import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Información Legal - Zulia Dog",
  description: "Términos y condiciones, política de privacidad, manejo de datos y eliminación de datos de Zulia Dog.",
};

export default function LegalPage() {
  const legalCards = [
    {
      title: "Términos y Condiciones",
      description: "Reglas y condiciones de uso de la aplicación Zulia Dog. Conoce tus derechos y obligaciones como usuario.",
      href: "/legal/terminos",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
      iconBg: "bg-blue-50",
      iconColor: "text-[var(--zd-blue)]",
    },
    {
      title: "Política de Privacidad",
      description: "Cómo recopilamos, usamos y protegemos tu información personal y datos de tus mascotas.",
      href: "/legal/privacidad",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-500",
    },
    {
      title: "Manejo de Datos",
      description: "Conoce qué datos procesamos, cómo los almacenamos, períodos de retención y medidas de seguridad.",
      href: "/legal/datos",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      ),
      iconBg: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      title: "Eliminación de Datos",
      description: "Solicita la eliminación completa de tu cuenta y todos tus datos. Conoce el proceso y los plazos.",
      href: "/legal/eliminacion",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      ),
      iconBg: "bg-red-50",
      iconColor: "text-red-400",
    },
  ];

  return (
    <div className="pt-24">
      {/* Header — normalized to match Nuestra App */}
      <section className="py-20 mesh-gradient text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-[var(--zd-blue-pale)] text-[var(--zd-blue-deep)] text-xs font-semibold px-4 py-2 rounded-full mb-6">
            📋 Confianza y Transparencia
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--zd-text-dark)] mb-4">
            Todo claro,{" "}
            <span className="gradient-text">sin letra pequeña</span>
          </h1>
          <p className="text-lg text-[var(--zd-text-gray)] max-w-2xl mx-auto">
            Conoce nuestras políticas, términos de uso y cómo protegemos tus datos y los de tu mascota.
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalCards.map((card) => (
              <div
                key={card.title}
                className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-[var(--zd-blue-light)]/50 hover:shadow-[0_20px_60px_rgba(101,154,229,0.1)] transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl ${card.iconBg} ${card.iconColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--zd-text-dark)] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--zd-text-gray)] leading-relaxed mb-6">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--zd-blue)] hover:text-[var(--zd-blue-deep)] transition-colors duration-300"
                >
                  Ver más
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
