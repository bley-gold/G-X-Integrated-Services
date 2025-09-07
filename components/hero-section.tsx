"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { ScrollToAboutButton } from "@/components/scroll-to-about-button"

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
          alt="Professional Black business team discussing project management and procurement strategies"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gx-navy/95 via-gx-navy/80 to-gx-electric-blue/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gx-navy/50 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Integrating Projects,
              <br />
              Procurement &<br />
              <span className="text-gx-teal animate-neon-flicker drop-shadow-[0_0_10px_rgba(0,212,170,0.8)]">Property</span> - Seamlessly.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
              Your trusted partner in delivering professional, reliable, and innovative solutions in South Africa.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-gx-teal hover:bg-gx-teal/90 text-white px-6 sm:px-8 py-3 sm:py-6 text-sm sm:text-base md:text-lg font-medium transform hover:scale-110 transition-all duration-300 group w-full sm:w-auto hover:shadow-[0_0_25px_rgba(0,212,170,0.7)] hover:animate-pulse-glow border border-gx-teal/50">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gx-navy px-6 sm:px-8 py-3 sm:py-6 text-sm sm:text-base md:text-lg font-medium transform hover:scale-110 transition-all duration-300 bg-transparent w-full sm:w-auto hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:border-gx-teal"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <ScrollToAboutButton />
    </section>
  )
}
