
"use client"

import Link from "next/link"
import { PawPrint } from "lucide-react"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg group-hover:bg-accent transition-colors duration-300">
            <PawPrint className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary font-headline">Zuliadog</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">Características</Link>
          <Link href="#privacy" className="text-sm font-medium hover:text-primary transition-colors">Privacidad</Link>
        </nav>
      </div>
    </header>
  )
}
