import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eliminación de Datos - Zulia Dog",
  description: "Solicita la eliminación de tus datos personales de Zulia Dog. Instrucciones y plazos del proceso.",
};

export default function EliminacionPage() {
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
            <h1>Eliminación de Datos del Usuario</h1>
            <p><strong>Última actualización:</strong> Marzo 2026</p>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
              <h3 className="text-[var(--zd-blue-deep)] mt-0">Su derecho a eliminar sus datos</h3>
              <p className="mb-0">
                Usted tiene el derecho de solicitar la eliminación completa de su cuenta y todos los datos asociados en cualquier momento. Este proceso es <strong>irreversible</strong>.
              </p>
            </div>

            <h2>¿Qué datos se eliminan?</h2>
            <p>Al solicitar la eliminación, se borrarán permanentemente:</p>
            <ul>
              <li>✅ Su cuenta de usuario y credenciales</li>
              <li>✅ Información personal (nombre, email, teléfono)</li>
              <li>✅ Datos de sus mascotas vinculadas</li>
              <li>✅ Historial de citas y consultas</li>
              <li>✅ Preferencias y configuraciones</li>
              <li>✅ Todas las imágenes asociadas</li>
            </ul>

            <h2>¿Cómo solicitar la eliminación?</h2>
            <p>Puede solicitar la eliminación de sus datos de las siguientes maneras:</p>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-[var(--zd-text-dark)] mt-0">Opción 1: Desde la App</h3>
                <ol className="mb-0">
                  <li>Abra Zulia Dog</li>
                  <li>Vaya a <strong>Configuración</strong> → <strong>Cuenta</strong></li>
                  <li>Seleccione <strong>&quot;Eliminar mi cuenta&quot;</strong></li>
                  <li>Confirme la eliminación</li>
                </ol>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-[var(--zd-text-dark)] mt-0">Opción 2: Por Correo Electrónico</h3>
                <p className="mb-0">
                  Envíe un correo a <strong>zuliadogvet@gmail.com</strong> con el asunto &quot;Solicitud de eliminación de datos&quot; incluyendo el correo electrónico asociado a su cuenta. Procesaremos su solicitud en un máximo de <strong>30 días</strong>.
                </p>
              </div>
            </div>

            <h2>Plazo de Procesamiento</h2>
            <ul>
              <li><strong>Eliminación desde la app:</strong> Inmediata</li>
              <li><strong>Eliminación por correo:</strong> Hasta 30 días hábiles</li>
              <li><strong>Purga completa de respaldos:</strong> Hasta 30 días adicionales</li>
            </ul>

            <h2>Datos que podemos retener</h2>
            <p>
              Por obligaciones legales o regulatorias, podemos retener ciertos datos anonimizados con fines estadísticos. Estos datos no podrán ser asociados a su identidad.
            </p>

            <h2>Contacto</h2>
            <p>
              Para cualquier duda sobre la eliminación de datos: <strong>zuliadogvet@gmail.com</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
