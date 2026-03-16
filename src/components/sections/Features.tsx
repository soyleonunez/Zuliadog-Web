
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Syringe, UserRound } from "lucide-react"

const features = [
  {
    title: "Registro Médico",
    description: "Lleva el historial detallado de consultas, diagnósticos y tratamientos de tus mascotas siempre contigo.",
    icon: Stethoscope,
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Control de Vacunas",
    description: "Nunca olvides una dosis. Calendario de vacunación inteligente con recordatorios personalizados.",
    icon: Syringe,
    color: "bg-accent/10 text-accent"
  },
  {
    title: "Perfil de la Mascota",
    description: "Crea perfiles individuales para cada uno de tus peluditos con fotos, datos básicos y necesidades especiales.",
    icon: UserRound,
    color: "bg-blue-500/10 text-blue-500"
  }
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Todo bajo control</h2>
          <p className="text-muted-foreground text-lg">
            Diseñamos herramientas intuitivas para que el cuidado de tu mascota sea un placer, no una tarea.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group bg-white/80">
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
