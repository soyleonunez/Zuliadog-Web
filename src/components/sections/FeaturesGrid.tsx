export function FeaturesGrid() {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      title: "Tu clínica en tu bolsillo",
      description: "Agenda citas, revisa historiales y recibe notificaciones de tu mascota en tiempo real.",
      color: "from-blue-500/10 to-cyan-500/10",
      iconBg: "bg-blue-50",
      iconColor: "text-[var(--zd-blue)]",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      title: "Historial clínico digital",
      description: "Accede a exámenes, vacunas y documentos médicos de tu mascota desde cualquier lugar.",
      color: "from-emerald-500/10 to-teal-500/10",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-500",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
      title: "Emergencias 24/7",
      description: "Contacto directo con la clínica, ubicación y servicios disponibles en todo momento.",
      color: "from-red-500/10 to-orange-500/10",
      iconBg: "bg-red-50",
      iconColor: "text-red-400",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      title: "Cuidado excepcional",
      description: "Vincula a tus mascotas y comienza a gestionar su salud con inteligencia y amor.",
      color: "from-pink-500/10 to-rose-500/10",
      iconBg: "bg-pink-50",
      iconColor: "text-pink-400",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--zd-blue)] rounded-full opacity-[0.02] blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--zd-blue-accent)] rounded-full opacity-[0.02] blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[var(--zd-blue-pale)] text-[var(--zd-blue-deep)] text-xs font-semibold px-4 py-2 rounded-full mb-4">
            ✨ Funcionalidades
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--zd-text-dark)] mb-4">
            Todo lo que necesitas para{" "}
            <span className="gradient-text">tu mascota</span>
          </h2>
          <p className="text-[var(--zd-text-gray)] max-w-2xl mx-auto">
            Diseñada para hacer la vida de los tutores más fácil. Cada función pensada con amor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-[var(--zd-blue-light)]/50 hover:shadow-[0_20px_60px_rgba(101,154,229,0.12)] transition-all duration-500 cursor-default"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} ${feature.iconColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[var(--zd-text-dark)] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[var(--zd-text-gray)] leading-relaxed">
                {feature.description}
              </p>
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
