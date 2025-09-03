"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Building2, Users, Award, Target, Eye, Heart, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { AnimatedSection } from "@/components/animated-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/business-hero-bg.png"
            alt="Modern business district with professional office buildings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gx-navy/90 via-gx-navy/70 to-gx-teal/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <AnimatedSection animation="fade-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Integrating Projects,
                <br />
                Procurement &<br />
                <span className="text-gx-teal">Property</span> - Seamlessly.
              </h1>

              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
                Your trusted partner in delivering professional, reliable, and innovative solutions in South Africa.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/contact">
                  <Button className="bg-gx-teal hover:bg-gx-teal/90 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium transform hover:scale-105 transition-all duration-300 group w-full sm:w-auto">
                    Get in Touch
                    <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gx-navy px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium transform hover:scale-105 transition-all duration-300 bg-transparent w-full sm:w-auto"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300 group"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white transition-colors group-hover:border-gx-teal">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse group-hover:bg-gx-teal"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-4xl font-bold text-gx-navy mb-1 sm:mb-2 group-hover:text-gx-teal transition-colors">
                  2+
                </div>
                <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-4xl font-bold text-gx-navy mb-1 sm:mb-2 group-hover:text-gx-teal transition-colors">
                  25+
                </div>
                <div className="text-sm sm:text-base text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-4xl font-bold text-gx-navy mb-1 sm:mb-2 group-hover:text-gx-teal transition-colors">
                  15+
                </div>
                <div className="text-sm sm:text-base text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-4xl font-bold text-gx-navy mb-1 sm:mb-2 group-hover:text-gx-teal transition-colors">
                  95%
                </div>
                <div className="text-sm sm:text-base text-gray-600">Success Rate</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 sm:py-20 bg-gx-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gx-navy mb-6 sm:mb-8 text-center">
                About Us
              </h2>
              <p className="text-lg sm:text-xl text-center text-gray-600 mb-12 sm:mb-16 max-w-3xl mx-auto">
                GX Integrated Services Pty Ltd is a trusted service provider delivering exceptional solutions.
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center mb-12 sm:mb-16">
              <AnimatedSection animation="slide-left">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gx-navy mb-4 sm:mb-6">Our Story</h3>
                  <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                    GX Integrated Services Pty Ltd is an emerging service provider specializing in Project Management,
                    Procurement, and Real Estate Management. Our dedicated team combines fresh expertise with an
                    innovative approach to ensure projects are delivered on time, within budget, and to the highest
                    standard.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                    We are committed to building strong and lasting business relationships while providing exceptional
                    service, cost efficiency, and sustainable solutions for our growing client base.
                  </p>
                  <Link href="/about">
                    <Button className="bg-gx-teal hover:bg-gx-teal/90 text-white group w-full sm:w-auto">
                      Learn More About Us
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-right">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <Award className="w-6 sm:w-8 h-6 sm:h-8 text-gx-teal mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-base sm:text-lg font-semibold text-gx-navy mb-1 sm:mb-2">Quality</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Excellence in every project</p>
                  </div>
                  <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <Heart className="w-6 sm:w-8 h-6 sm:h-8 text-gx-teal mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-base sm:text-lg font-semibold text-gx-navy mb-1 sm:mb-2">Integrity</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Honest and transparent</p>
                  </div>
                  <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <CheckCircle className="w-6 sm:w-8 h-6 sm:h-8 text-gx-teal mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-base sm:text-lg font-semibold text-gx-navy mb-1 sm:mb-2">Reliability</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Dependable results</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <AnimatedSection animation="fade-up">
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 sm:p-8">
                    <Eye className="w-10 sm:w-12 h-10 sm:h-12 text-gx-teal mb-3 sm:mb-4" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gx-navy mb-3 sm:mb-4">Our Vision</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      To be the most trusted partner in delivering professional, reliable, and innovative solutions in
                      project management, procurement, and real estate management.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up">
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 sm:p-8">
                    <Target className="w-10 sm:w-12 h-10 sm:h-12 text-gx-teal mb-3 sm:mb-4" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gx-navy mb-3 sm:mb-4">Our Mission</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      To provide exceptional service, cost efficiency, and sustainable solutions while fostering strong
                      and lasting business relationships with our clients and partners.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gx-navy mb-6 sm:mb-8 text-center">
                Our Services
              </h2>
              <p className="text-lg sm:text-xl text-center text-gray-600 mb-12 sm:mb-16 max-w-3xl mx-auto">
                Comprehensive solutions tailored to meet your project management, procurement, and real estate needs.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <AnimatedSection animation="fade-up">
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <div className="h-32 sm:h-48 bg-gradient-to-br from-gx-navy to-gx-teal relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building2 className="w-12 sm:w-16 h-12 sm:h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gx-navy mb-3 sm:mb-4">Project Management</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                      End-to-end project execution solutions covering all phases from planning to delivery.
                    </p>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                      <li>• Project Planning & Scheduling</li>
                      <li>• Budget Management & Cost Control</li>
                      <li>• Quality Assurance & Risk Management</li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up">
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <div className="h-32 sm:h-48 bg-gradient-to-br from-gx-teal to-gx-orange relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="w-12 sm:w-16 h-12 sm:h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gx-navy mb-3 sm:mb-4">Procurement Services</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                      Strategic sourcing and vendor management with strong supplier relationships.
                    </p>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                      <li>• Strategic Sourcing & Vendor Evaluation</li>
                      <li>• Contract Negotiation & Management</li>
                      <li>• Supply Chain Optimization</li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up">
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <div className="h-32 sm:h-48 bg-gradient-to-br from-gx-orange to-gx-navy relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building2 className="w-12 sm:w-16 h-12 sm:h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gx-navy mb-3 sm:mb-4">Real Estate Management</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                      Comprehensive property management including marketing, maintenance, and reporting.
                    </p>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                      <li>• Property Marketing & Leasing</li>
                      <li>• Tenant Relations & Management</li>
                      <li>• Financial Reporting & Analysis</li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            <div className="text-center">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-gx-teal hover:bg-gx-teal/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group w-full sm:w-auto"
                >
                  View All Services
                  <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gx-navy to-gx-teal text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Ready to Get Started?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how we can help integrate your projects, procurement, and property needs seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-gx-navy hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gx-navy px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent w-full sm:w-auto"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gx-navy border-t border-white/10 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="sm:col-span-2">
                <Link href="/" className="flex items-center gap-3 mb-3 sm:mb-4 group">
                  <div className="flex items-center">
                    <span className="text-xl sm:text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                      G
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-gx-teal group-hover:scale-110 transition-transform">
                      X
                    </span>
                  </div>
                  <span className="text-white font-medium text-sm sm:text-base">Integrated Services Pty Ltd</span>
                </Link>
                <p className="text-white/70 mb-3 sm:mb-4 max-w-md text-sm sm:text-base">
                  Integrating Projects, Procurement & Property - Seamlessly. Your trusted partner for professional
                  solutions.
                </p>
                <p className="text-white/50 text-xs sm:text-sm">ABN: 12 345 678 901</p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
                <ul className="space-y-1 sm:space-y-2 text-white/70 text-xs sm:text-sm">
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">
                      Project Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">
                      Procurement Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">
                      Real Estate Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Consultation
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
                <ul className="space-y-1 sm:space-y-2 text-white/70 text-xs sm:text-sm">
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/50 text-xs sm:text-sm">
                © 2024 GX Integrated Services Pty Ltd. All rights reserved.
              </p>
              <div className="flex gap-4 sm:gap-6 mt-3 md:mt-0">
                <a href="#" className="text-white/50 hover:text-white text-xs sm:text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/50 hover:text-white text-xs sm:text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
