import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Zulia Dog - El bienestar de tu mascota en un solo lugar',
  description:
    'Zulia Dog es la app para dueños de mascotas. Lleva el historial clínico, vacunas, citas y emergencias de tu mascota desde tu teléfono. Disponible en Google Play.',
  keywords: ['veterinaria', 'mascotas', 'historial clínico', 'perros', 'gatos', 'app veterinaria', 'zulia dog'],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/assets/images/appicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Zulia Dog - El bienestar de tu mascota en un solo lugar',
    description: 'Gestiona la salud de tu mascota con Zulia Dog. Historial clínico digital, citas, emergencias y más.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
