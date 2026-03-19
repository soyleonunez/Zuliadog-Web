import Image from "next/image";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--zd-blue)] to-[var(--zd-blue-deep)]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-white/15 rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Descarga Zulia Dog hoy
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
          Únete a los tutores que ya gestionan la salud de sus mascotas de forma inteligente, rápida y segura.
        </p>
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full overflow-hidden transition-transform duration-300 hover:scale-110 active:scale-95"
        >
          <Image
            src="/assets/images/google-play-badge-white.png"
            alt="Disponible en Google Play"
            width={220}
            height={66}
            className="h-[50px] w-auto"
          />
        </a>
      </div>
    </section>
  );
}
