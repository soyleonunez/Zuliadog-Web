import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto - Zulia Dog",
  description: "Contáctanos para cualquier consulta sobre Zulia Dog. Estamos disponibles por WhatsApp, llamada, correo y redes sociales.",
};

export default function ContactoPage() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      title: "WhatsApp",
      description: "Escríbenos directamente",
      value: "0412 641 1380",
      href: "https://wa.me/584126411380",
      color: "bg-green-50 text-green-600 hover:bg-green-100",
      buttonLabel: "Abrir Chat",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      title: "Teléfono",
      description: "Llámanos directamente",
      value: "0412 662 3432",
      href: "tel:+584126623432",
      color: "bg-blue-50 text-[var(--zd-blue)] hover:bg-blue-100",
      buttonLabel: "Llamar",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      title: "Correo",
      description: "Escríbenos por email",
      value: "zuliadogvet@gmail.com",
      href: "mailto:zuliadogvet@gmail.com",
      color: "bg-purple-50 text-purple-600 hover:bg-purple-100",
      buttonLabel: "Enviar Email",
    },
  ];

  const socials = [
    {
      name: "Instagram",
      href: "https://instagram.com/zuliadog",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com/zuliadog",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      ),
    },
  ];

  return (
    <div className="pt-24">
      {/* Header — normalized to match Nuestra App */}
      <section className="py-20 mesh-gradient text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-[var(--zd-blue-pale)] text-[var(--zd-blue-deep)] text-xs font-semibold px-4 py-2 rounded-full mb-6">
            📍 Estamos cerca
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--zd-text-dark)] mb-4">
            Hablemos de{" "}
            <span className="gradient-text">tu mascota</span>
          </h1>
          <p className="text-lg text-[var(--zd-text-gray)] max-w-2xl mx-auto">
            ¿Tienes dudas? Estamos aquí para ayudarte. Elige el medio que prefieras.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-[0_20px_60px_rgba(101,154,229,0.1)] transition-all duration-500 text-center group"
              >
                <div className={`w-14 h-14 rounded-2xl ${method.color} flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110`}>
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--zd-text-dark)] mb-1">{method.title}</h3>
                <p className="text-sm text-[var(--zd-text-light)] mb-1">{method.description}</p>
                <p className="text-sm font-semibold text-[var(--zd-text-dark)] mb-5">{method.value}</p>
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[var(--zd-blue)] bg-[var(--zd-blue-pale)] rounded-full hover:bg-[var(--zd-blue)] hover:text-white transition-all duration-300"
                >
                  {method.buttonLabel}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Social */}
      <section className="py-16 bg-[var(--zd-bg)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Location */}
            <div>
              <h2 className="text-2xl font-extrabold text-[var(--zd-text-dark)] mb-6">
                Nuestra ubicación
              </h2>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--zd-blue-pale)] text-[var(--zd-blue)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--zd-text-dark)]">Clínica Zulia Dog</h3>
                    <p className="text-sm text-[var(--zd-text-gray)]">Av. Circunvalación 2, Maracaibo, Venezuela</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-50 text-green-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--zd-text-dark)]">Horario</h3>
                    <p className="text-sm text-[var(--zd-text-gray)]">Abierto 24/7 - Emergencias siempre disponibles</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h2 className="text-2xl font-extrabold text-[var(--zd-text-dark)] mb-6">
                Síguenos
              </h2>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <p className="text-[var(--zd-text-gray)] mb-6">
                  Sigue nuestras redes para tips de cuidado animal, novedades y mucho más.
                </p>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3 bg-gray-50 rounded-xl hover:bg-[var(--zd-blue-pale)] hover:text-[var(--zd-blue)] transition-all duration-300 group"
                    >
                      <span className="group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                      <span className="font-medium text-sm">{social.name}</span>
                    </a>
                  ))}
                </div>

                {/* App download */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm text-[var(--zd-text-gray)] mb-4">Descarga la app</p>
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border border-gray-200 overflow-hidden transition-transform duration-300 hover:scale-105"
                  >
                    <Image
                      src="/assets/images/google-play-badge.png"
                      alt="Disponible en Google Play"
                      width={150}
                      height={45}
                      className="h-[38px] w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
