import Image from "next/image";
import { FloatingElement } from "@/components/ui/FloatingElement";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-[var(--zd-blue-pale)] text-[var(--zd-blue-deep)] text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Disponible en Google Play
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--zd-text-dark)] leading-[1.1] mb-6">
              El bienestar de{" "}
              <span className="gradient-text">tu mascota</span>{" "}
              en un solo lugar
            </h1>

            <p className="text-lg text-[var(--zd-text-gray)] leading-relaxed mb-8 max-w-lg">
              Agenda citas, revisa historiales clínicos y recibe notificaciones de tu mascota en tiempo real. Todo desde tu teléfono.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-gray-200 overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <Image
                  src="/assets/images/google-play-badge.png"
                  alt="Disponible en Google Play"
                  width={200}
                  height={60}
                  className="h-[44px] w-auto"
                />
              </a>
              <a
                href="/nuestra-app"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[var(--zd-blue)] bg-white border-2 border-[var(--zd-blue-pale)] rounded-full hover:bg-[var(--zd-blue-pale)] transition-all duration-300"
              >
                Descubre más
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-[var(--zd-blue-pale)]">
              {[
                { value: "24/7", label: "Emergencias" },
                { value: "100%", label: "Digital" },
                { value: "Gratis", label: "Para tutores" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[var(--zd-blue)]">{stat.value}</div>
                  <div className="text-xs text-[var(--zd-text-light)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone mockup + floating elements */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--zd-blue)] rounded-full opacity-[0.06] blur-[80px]" />

            {/* Phone — z-10, between back and front elements */}
            <div className="relative animate-scale-in z-10">

              {/* Floating elements — Anchored to the phone! */}
              {/* 1. Top-Left: Dog Illustration (Touching phone) */}
              <FloatingElement
                src="/assets/images/Dog.png"
                alt="Perrito"
                size={75}
                position="top-8 -left-8 lg:-left-12"
                animation="float"
                delay={0.1}
                className="z-30"
              />

              {/* 2. Top-Right: Rosita Card */}
              <FloatingElement
                src="/assets/images/float-card-mascota.png"
                alt="Card mascota"
                size={230}
                position="top-12 -right-28 lg:-right-40"
                animation="float-slow"
                delay={0.2}
                className="hidden sm:block rounded-3xl z-30"
              />

              {/* 3. Mid-Right: Admin Illustration */}
              <FloatingElement
                src="/assets/images/Admin.png"
                alt="Admin"
                size={80}
                position="top-[35%] -right-10 lg:-right-12"
                animation="float-reverse"
                delay={0.3}
                className="z-30"
              />

              {/* 4. Mid-Left: Cita card (TOUCHING phone) */}
              <FloatingElement
                src="/assets/images/float-card-cita.png"
                alt="Card cita"
                size={220}
                position="top-[48%] -left-28 lg:-left-36"
                animation="float"
                delay={0.4}
                className="hidden sm:block rounded-3xl z-30"
              />

              {/* 5. Bottom-Right: Artículo Card */}
              <FloatingElement
                src="/assets/images/float-card-articulo.png"
                alt="Card artículo"
                size={210}
                position="bottom-16 -right-24 lg:-right-32"
                animation="float-reverse"
                delay={0.5}
                className="hidden sm:block rounded-3xl z-30"
              />

              {/* Phone Image Container */}
              <div className="relative w-[280px] sm:w-[300px] lg:w-[320px] phone-shadow">
                <div className="bg-[var(--zd-text-dark)] rounded-[2.5rem] p-1.5">
                  <div className="rounded-[2.2rem] overflow-hidden">
                    <Image
                      src="/assets/phoneimg/phoneimg (3).png"
                      alt="Zulia Dog App Home"
                      width={600}
                      height={1300}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
