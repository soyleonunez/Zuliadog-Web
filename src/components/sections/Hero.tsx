
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Sparkles } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  const mockup = PlaceHolderImages.find(img => img.id === 'app-mockup')
  
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden hero-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-fade-in text-center lg:text-left">
            <div className="space-y-6">
              <Badge variant="secondary" className="px-4 py-1.5 rounded-full bg-primary/10 text-primary border-primary/20 gap-2 text-sm font-semibold inline-flex">
                <Sparkles className="w-4 h-4" />
                Nueva Versión 2.0 disponible
              </Badge>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-foreground">
                Cuida a tu mascota <br />
                <span className="gradient-text">como se merece</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Zuliadog es la súper-app para tutores que buscan lo mejor. Gestiona salud, vacunas y momentos inolvidables en un solo lugar.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              <Button size="lg" className="rounded-full h-16 px-10 text-lg font-bold gap-3 shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1.5 active:scale-95 bg-primary">
                <Download className="w-6 h-6" />
                Obtener la App
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-16 px-10 text-lg font-bold border-2 hover:bg-secondary transition-all">
                Ver funciones
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground font-medium pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-4 border-background bg-muted overflow-hidden shadow-sm">
                    <img src={`https://picsum.photos/seed/${i + 20}/40/40`} alt="User avatar" />
                  </div>
                ))}
              </div>
              <p className="text-foreground/80">
                <span className="font-bold text-primary">★ 4.9/5</span> por más de 1,000 familias felices
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in delay-300">
            <div className="relative z-10 mx-auto max-w-[320px] md:max-w-[380px]">
              {/* Device Frame */}
              <div className="relative bg-slate-950 rounded-[3.5rem] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[8px] border-slate-900/50 overflow-hidden">
                <div className="aspect-[9/19] rounded-[2.5rem] overflow-hidden bg-white relative">
                  {mockup && (
                    <Image 
                      src={mockup.imageUrl} 
                      alt={mockup.description} 
                      width={400} 
                      height={850}
                      className="object-cover w-full h-full"
                      data-ai-hint={mockup.imageHint}
                      priority
                    />
                  )}
                </div>
              </div>
              
              {/* Floating elements for more dynamism */}
              <div className="absolute -right-8 top-1/4 glass-card p-5 rounded-3xl animate-bounce duration-[4000ms] shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-white shadow-lg">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Recordatorio</p>
                    <p className="text-xs text-muted-foreground font-medium">Vacuna mañana 09:00</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-12 bottom-1/4 glass-card p-5 rounded-3xl animate-pulse duration-[3000ms] shadow-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="text-xl font-bold">🐾</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Pipo está sano</p>
                    <p className="text-xs text-muted-foreground font-medium">Control al día</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/5 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
