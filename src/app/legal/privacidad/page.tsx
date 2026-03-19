import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad - Zulia Dog",
  description: "Política de privacidad de la aplicación Zulia Dog. Cómo recopilamos, usamos y protegemos tu información.",
};

export default function PrivacidadPage() {
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
            <h1>Política de Privacidad</h1>
            <p><strong>Última actualización:</strong> Marzo 2026</p>

            <h2>1. Información que Recopilamos</h2>
            <p>Zulia Dog recopila la siguiente información:</p>

            <h3>Datos personales del usuario:</h3>
            <ul>
              <li>Nombre y apellido</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono (opcional)</li>
            </ul>

            <h3>Datos de mascotas:</h3>
            <ul>
              <li>Nombre, especie, raza, edad, peso</li>
              <li>Historial clínico, vacunas, tratamientos</li>
              <li>Fotografías (opcional)</li>
            </ul>

            <h2>2. Cómo Usamos su Información</h2>
            <p>Utilizamos su información para:</p>
            <ul>
              <li>Proveer y mejorar nuestros servicios</li>
              <li>Gestionar su cuenta y vinculación con la clínica veterinaria</li>
              <li>Enviar notificaciones de citas y recordatorios de salud</li>
              <li>Generar historiales clínicos digitales</li>
              <li>Brindar soporte al usuario</li>
            </ul>

            <h2>3. Almacenamiento y Seguridad</h2>
            <p>
              Sus datos se almacenan de forma segura en servidores de Supabase con cifrado en tránsito y en reposo. Implementamos medidas de seguridad técnicas y organizativas para proteger su información.
            </p>

            <h2>4. Compartir Información</h2>
            <p>
              <strong>No vendemos ni compartimos su información personal con terceros</strong> para fines publicitarios. Su información solo se comparte con la clínica veterinaria asociada para proporcionar los servicios solicitados.
            </p>

            <h2>5. Derechos del Usuario</h2>
            <p>Usted tiene derecho a:</p>
            <ul>
              <li>Acceder a sus datos personales</li>
              <li>Rectificar datos incorrectos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Revocar su consentimiento en cualquier momento</li>
            </ul>

            <h2>6. Contacto</h2>
            <p>
              Para ejercer sus derechos o consultas sobre privacidad: <strong>zuliadogvet@gmail.com</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
