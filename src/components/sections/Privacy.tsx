
"use client"

import { Button } from "@/components/ui/button"
import { ShieldCheck, Mail, Trash2 } from "lucide-react"

export function Privacy() {
  return (
    <section id="privacy" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-border/50">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="md:w-1/3 flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Gestión de tus Datos y Privacidad</h2>
            </div>
            <div className="md:w-2/3 space-y-6">
              <p className="text-lg text-muted-foreground">
                En Zuliadog, tu privacidad y la de tus mascotas es nuestra prioridad. Creemos en la transparencia total y te garantizamos que tienes el control absoluto sobre toda tu información.
              </p>
              
              <div className="bg-muted/50 p-6 rounded-2xl space-y-4 border border-border">
                <h3 className="flex items-center gap-2 font-bold text-foreground">
                  <Trash2 className="w-5 h-5 text-destructive" />
                  Instrucciones para eliminación de datos
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Para solicitar la eliminación permanente de tu cuenta, perfil y todos los datos de tus mascotas asociados a Zuliadog, por favor envía un correo a <span className="font-bold text-primary">zuliadogvet@gmail.com</span> con el asunto <span className="italic">"Eliminar cuenta Zuliadog"</span> o utiliza la opción de eliminación dentro de la app.
                </p>
                <div className="pt-4">
                  <Button asChild variant="outline" className="rounded-full gap-2 hover:bg-destructive hover:text-white hover:border-destructive transition-colors">
                    <a href="mailto:zuliadogvet@gmail.com?subject=Eliminar%20cuenta%20Zuliadog">
                      <Mail className="w-4 h-4" />
                      Contactar para eliminación
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
