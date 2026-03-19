import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones - Zulia Dog",
  description: "Términos y condiciones de uso de la aplicación Zulia Dog.",
};

export default function TerminosPage() {
  return (
    <div className="pt-24">
      <section className="py-6 mesh-gradient">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/legal"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--zd-blue)] hover:text-[var(--zd-blue-deep)] transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Volver a Legal
          </Link>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none prose-headings:text-[var(--zd-text-dark)] prose-p:text-[var(--zd-text-gray)] prose-p:leading-relaxed prose-li:text-[var(--zd-text-gray)]">
            <h1>Términos y Condiciones de Uso</h1>
            <p><strong>Última actualización:</strong> Marzo 2026</p>

            <h2>1. Aceptación de los Términos</h2>
            <p>
              Al descargar, instalar o usar la aplicación Zulia Dog (&quot;la App&quot;), usted acepta estar sujeto a estos Términos y Condiciones de Uso. Si no está de acuerdo con estos términos, por favor no utilice la App.
            </p>

            <h2>2. Descripción del Servicio</h2>
            <p>
              Zulia Dog es una aplicación móvil diseñada para permitir a los tutores de mascotas gestionar información relacionada con la salud y el bienestar de sus animales, incluyendo:
            </p>
            <ul>
              <li>Acceso al historial clínico digital de mascotas</li>
              <li>Consulta de citas veterinarias</li>
              <li>Gestión de vacunas y tratamientos</li>
              <li>Acceso a recursos educativos sobre cuidado animal</li>
              <li>Contacto de emergencia veterinaria</li>
            </ul>

            <h2>3. Registro de Usuario</h2>
            <p>
              Para usar la App, debe crear una cuenta proporcionando información veraz y actualizada. Usted es responsable de mantener la confidencialidad de su cuenta y contraseña.
            </p>

            <h2>4. Uso Aceptable</h2>
            <p>Usted se compromete a:</p>
            <ul>
              <li>Usar la App únicamente para fines legítimos relacionados con el cuidado de mascotas</li>
              <li>No compartir sus credenciales de acceso con terceros</li>
              <li>Proporcionar información veraz sobre sus mascotas</li>
              <li>No intentar acceder a datos de otros usuarios</li>
            </ul>

            <h2>5. Propiedad Intelectual</h2>
            <p>
              Todo el contenido de la App, incluyendo diseños, textos, gráficos, logos y software, es propiedad de Zulia Dog y está protegido por las leyes de propiedad intelectual aplicables.
            </p>

            <h2>6. Limitación de Responsabilidad</h2>
            <p>
              La información proporcionada en la App tiene carácter informativo y no sustituye la consulta veterinaria profesional. Zulia Dog no se responsabiliza por decisiones médicas tomadas basándose únicamente en la información de la App.
            </p>

            <h2>7. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán notificados a través de la App o por correo electrónico.
            </p>

            <h2>8. Contacto</h2>
            <p>
              Para consultas sobre estos términos, contáctenos en: <strong>zuliadogvet@gmail.com</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
