import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manejo de Datos - Zulia Dog",
  description: "Información sobre cómo Zulia Dog procesa, almacena y protege los datos de sus usuarios.",
};

export default function DatosPage() {
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
            <h1>Manejo de Datos</h1>
            <p><strong>Última actualización:</strong> Marzo 2026</p>

            <h2>1. Tipos de Datos Procesados</h2>
            <p>Zulia Dog procesa las siguientes categorías de datos:</p>

            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Categoría</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Datos</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Propósito</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200">Identidad</td>
                  <td className="p-3 border border-gray-200">Nombre, email</td>
                  <td className="p-3 border border-gray-200">Autenticación y gestión de cuenta</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Mascota</td>
                  <td className="p-3 border border-gray-200">Nombre, especie, raza, edad</td>
                  <td className="p-3 border border-gray-200">Registro y vinculación veterinaria</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Clínico</td>
                  <td className="p-3 border border-gray-200">Historiales, vacunas, exámenes</td>
                  <td className="p-3 border border-gray-200">Historial clínico digital</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Contacto</td>
                  <td className="p-3 border border-gray-200">Teléfono (opcional)</td>
                  <td className="p-3 border border-gray-200">Comunicación y soporte</td>
                </tr>
              </tbody>
            </table>

            <h2>2. Base Legal del Procesamiento</h2>
            <p>El procesamiento de datos se basa en:</p>
            <ul>
              <li><strong>Consentimiento:</strong> Al crear su cuenta, usted otorga su consentimiento para el procesamiento de sus datos.</li>
              <li><strong>Ejecución contractual:</strong> El procesamiento es necesario para proveer los servicios solicitados.</li>
              <li><strong>Interés legítimo:</strong> Mejora y seguridad de nuestros servicios.</li>
            </ul>

            <h2>3. Período de Retención</h2>
            <ul>
              <li>Datos de cuenta: mientras la cuenta esté activa</li>
              <li>Historial clínico: mientras la cuenta esté activa o según regulaciones veterinarias</li>
              <li>Datos eliminados: se purgan completamente en un plazo de 30 días</li>
            </ul>

            <h2>4. Transferencia de Datos</h2>
            <p>
              Sus datos se almacenan en servidores ubicados en Estados Unidos (Supabase). Utilizamos medidas de protección apropiadas para garantizar la seguridad de sus datos en la transferencia internacional.
            </p>

            <h2>5. Seguridad</h2>
            <p>Implementamos las siguientes medidas:</p>
            <ul>
              <li>Cifrado SSL/TLS en todas las comunicaciones</li>
              <li>Cifrado en reposo para datos sensibles</li>
              <li>Autenticación segura con tokens JWT</li>
              <li>Políticas de acceso basadas en roles (Row Level Security)</li>
              <li>Auditoría y monitoreo continuo</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
