import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra App - Zulia Dog",
  description: "Descubre cómo Zulia Dog te ayuda a gestionar la salud de tu mascota. Historial clínico digital, emergencias 24/7, recursos y más.",
};

export default function NuestraAppPage() {
  const appFeatures = [
    {
      title: "Inicio personalizado",
      description:
        "Ve tus mascotas, citas pendientes y recursos educativos todo en un vistazo. La pantalla se adapta a ti.",
      image: "/assets/phoneimg/phoneimg (3).png",
      badge: {
        src: "/assets/images/float-card-mascota.png",
        alt: "Card mascota",
        width: 180,
      },
      reverse: false,
    },
    {
      title: "Emergencias 24/7",
      description:
        "En caso de emergencia, accede rápidamente a las instrucciones, ubicación de la clínica y contacto directo por chat o llamada. Servicios como consulta, cirugía, laboratorio y rayos X disponibles.",
      image: "/assets/phoneimg/phoneimg (2).png",
      badge: {
        src: "/assets/images/float-card-cita.png",
        alt: "Card cita",
        width: 200,
      },
      reverse: true,
    },
    {
      title: "Recursos veterinarios",
      description:
        "Explora guías y consejos organizados por categoría: medicina preventiva, bienestar, emergencias, nutrición y prevención. Contenido creado por profesionales para cuidar mejor a tu mascota.",
      image: "/assets/phoneimg/phoneimg (1).png",
      badge: {
        src: "/assets/images/float-card-articulo.png",
        alt: "Card artículo",
        width: 200,
      },
      reverse: false,
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Descarga la app",
      description: "Disponible gratis en Google Play. Instálala en segundos.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Crea tu cuenta",
      description: "Regístrate como tutor e inicia sesión con tu correo.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Vincula tu mascota",
      description: "Tu veterinario vinculará a tu mascota para acceder a su historial.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.006a4.5 4.5 0 00-6.364-6.364L4.5 8.257" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "¡Listo!",
      description: "Consulta historiales, agenda citas y recibe alertas de salud.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="pt-24">
      {/* Header — this is the base template for all inner pages */}
      <section className="py-20 mesh-gradient text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-[var(--zd-blue-pale)] text-[var(--zd-blue-deep)] text-xs font-semibold px-4 py-2 rounded-full mb-6">
            🐾 Conoce Zulia Dog
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--zd-text-dark)] mb-4">
            La app que tu mascota{" "}
            <span className="gradient-text">necesita</span>
          </h1>
          <p className="text-lg text-[var(--zd-text-gray)] max-w-2xl mx-auto">
            Diseñada para dueños de mascotas que quieren lo mejor. Toda la información clínica, recursos y emergencias en un solo lugar.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[var(--zd-text-dark)] mb-3">
              ¿Cómo funciona?
            </h2>
            <p className="text-[var(--zd-text-gray)]">Cuatro pasos para comenzar</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[var(--zd-blue-pale)] text-[var(--zd-blue)] flex items-center justify-center group-hover:bg-[var(--zd-blue)] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <div className="text-xs font-bold text-[var(--zd-blue)] mb-2 tracking-widest">{item.step}</div>
                <h3 className="text-lg font-bold text-[var(--zd-text-dark)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--zd-text-gray)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App showcase sections — half phone + static badge */}
      {appFeatures.map((feature, idx) => (
        <section
          key={feature.title}
          className={`py-16 ${idx % 2 === 0 ? "bg-[var(--zd-bg)]" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
              {/* Text side */}
              <div className={feature.reverse ? "lg:order-2" : ""}>
                <h2 className="text-3xl font-extrabold text-[var(--zd-text-dark)] mb-4">
                  {feature.title}
                </h2>
                <p className="text-[var(--zd-text-gray)] leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>

              {/* Phone side — half visible (No badges as requested) */}
              <div className={`relative flex justify-center ${feature.reverse ? "lg:order-1" : ""}`}>
                {/* Half phone — clipped at bottom */}
                <div className="relative w-[240px] sm:w-[260px] h-[320px] sm:h-[360px] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 phone-shadow">
                    <div className="bg-[var(--zd-text-dark)] rounded-t-[2.5rem] p-1.5">
                      <div className="rounded-t-[2.2rem] overflow-hidden">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          width={560}
                          height={1200}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Fade out at bottom */}
                  <div className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t ${idx % 2 === 0 ? "from-[var(--zd-bg)]" : "from-white"} to-transparent`} />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--zd-blue)] to-[var(--zd-blue-deep)] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            ¿Listo para cuidar mejor a tu mascota?
          </h2>
          <p className="text-blue-100 mb-8">
            Descarga Zulia Dog gratis y empieza hoy.
          </p>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full overflow-hidden transition-transform duration-300 hover:scale-110"
          >
            <Image
              src="/assets/images/google-play-badge-white.png"
              alt="Disponible en Google Play"
              width={200}
              height={60}
              className="h-[50px] w-auto"
            />
          </a>
        </div>
      </section>
    </div>
  );
}
