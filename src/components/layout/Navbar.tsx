
"use client"

import Link from "next/link"
import { PawPrint } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
      <div className="container mx-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-slate-800/20 rounded-full shadow-2xl h-16 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="bg-primary p-1.5 rounded-xl group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-primary/20">
            <PawPrint className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-primary font-headline">Zuliadog</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          <Link href="#features" className="text-sm font-bold text-foreground/70 hover:text-primary transition-colors">Funciones</Link>
          <Link href="#privacy" className="text-sm font-bold text-foreground/70 hover:text-primary transition-colors">Privacidad</Link>
          <Button size="sm" className="rounded-full px-6 font-bold bg-primary text-white hover:shadow-lg hover:shadow-primary/30 transition-all">
            App Store
          </Button>
        </nav>

        {/* Mobile menu button could go here if needed, keeping it simple for now as requested */}
      </div>
    </header>
  )
}
