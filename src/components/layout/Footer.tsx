
"use client"

import Link from "next/link"
import { PawPrint } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1 rounded-lg">
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary font-headline">Zuliadog</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              La aplicación líder en el cuidado integral de mascotas, diseñada por y para amantes de los animales.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-foreground">Empresa</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre nosotros</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Política de Privacidad</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Términos y Condiciones</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Zuliadog, Compañía Anónima. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Hecho con amor para tus peluditos</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
