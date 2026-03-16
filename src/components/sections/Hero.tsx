
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Hero() {
  const mockup = PlaceHolderImages.find(img => img.id === 'app-mockup')
  
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-foreground">
                El mejor aliado para el <span className="gradient-text">bienestar de tu mascota</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Zuliadog es la app diseñada para tutores responsables. Gestiona su historia clínica, vacunas y vida diaria de forma sencilla y segura.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full h-14 px-8 text-lg font-bold gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1 active:scale-95">
                <Download className="w-5 h-5" />
                Descargar en Google Play
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
              <span className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <img src={`https://picsum.photos/seed/${i + 10}/32/32`} alt="User" />
                  </div>
                ))}
              </span>
              <span>+1,000 tutores ya confían en Zuliadog</span>
            </div>
          </div>

          <div className="relative animate-fade-in delay-200">
            <div className="relative z-10 mx-auto max-w-[300px] md:max-w-[350px]">
              <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl border-4 border-slate-900">
                <div className="aspect-[9/19.5] rounded-[2.2rem] overflow-hidden bg-white">
                  {mockup && (
                    <Image 
                      src={mockup.imageUrl} 
                      alt={mockup.description} 
                      width={350} 
                      height={760}
                      className="object-cover w-full h-full"
                      data-ai-hint={mockup.imageHint}
                    />
                  )}
                </div>
              </div>
              {/* Floating element */}
              <div className="absolute -right-12 top-1/4 glass-card p-4 rounded-2xl animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Vacuna aplicada</p>
                    <p className="text-[10px] text-muted-foreground">Hace 2 minutos</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-accent/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
