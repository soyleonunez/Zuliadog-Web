
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Syringe, UserRound, Heart, Bell, ShieldCheck } from "lucide-react"

const features = [
  {
    title: "Historial Médico",
    description: "Cada visita al veterinario, diagnóstico y receta guardada de forma segura y accesible en la nube.",
    icon: Stethoscope,
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Alertas de Vacunas",
    description: "Sistema inteligente de notificaciones para que nunca se te pase una dosis importante de salud.",
    icon: Syringe,
    color: "bg-accent/10 text-accent"
  },
  {
    title: "Identidad Única",
    description: "Perfiles personalizados con toda la información vital: alergias, peso, edad y necesidades especiales.",
    icon: UserRound,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Bienestar Diario",
    description: "Monitoriza su actividad, alimentación y estado de ánimo para detectar cambios a tiempo.",
    icon: Heart,
    color: "bg-red-500/10 text-red-500"
  },
  {
    title: "Recordatorios",
    description: "Desde desparasitaciones hasta baños. Configura cualquier hábito recurrente para tu mascota.",
    icon: Bell,
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "Datos Seguros",
    description: "Privacidad total. Tú decides con quién compartir la información médica de tus compañeros.",
    icon: ShieldCheck,
    color: "bg-emerald-500/10 text-emerald-500"
  }
]

export function Features() {
  return (
    <section id="features" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            Diseñado para <span className="text-primary underline decoration-accent/30 decoration-8 underline-offset-4">dueños modernos</span>
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            Hemos condensado lo que necesitas para que la salud de tu mascota sea transparente, organizada y siempre disponible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} className="border-border/50 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 group bg-card overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full transition-all group-hover:scale-150" />
              <CardHeader className="pb-4 relative">
                <div className={`w-16 h-16 rounded-[1.25rem] ${feature.color} flex items-center justify-center mb-6 group-hover:rotate-6 transition-all duration-500 shadow-sm`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground text-lg leading-relaxed">
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
