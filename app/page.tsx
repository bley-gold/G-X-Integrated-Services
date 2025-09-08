import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Building2, Users, Home, Award, Target, Eye, Heart, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { AnimatedSection } from "@/components/animated-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/hero-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <WhatsAppButton />

      <HeroSection />

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-xl sm:text-2xl md:text-4xl font-bold text-gx-navy mb-1 sm:mb-2 group-hover:text-gx-teal transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,212,170,0.6)]">
                  2+
                </div>
                <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-xl sm:text-2xl md:text-4xl font-bold text-gx-navy mb-1 sm:mb-2 group-hover:text-gx-teal transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,212,170,0.6)]">
                  25+
                </div>
                <div className="text-sm sm:text-base text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-xl sm:text-2xl md:text-4xl font-bold text-gx-navy mb-1 sm:mb-2 group-hover:text-gx-teal transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,212,170,0.6)]">
                  15+
                </div>
                <div className="text-sm sm:text-base text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-xl sm:text-2xl md:text-4xl font-bold text-gx-navy mb-1 sm:mb-2 group-hover:text-gx-teal transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,212,170,0.6)]">
                  95%
                </div>
                <div className="text-sm sm:text-base text-gray-600">Success Rate</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gx-navy mb-6 sm:mb-8 text-center relative">
                About Us
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-gx-teal to-gx-electric-blue rounded-full"></span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-12 sm:mb-16 max-w-3xl mx-auto">
                GX Integrated Services Pty Ltd is a trusted service provider delivering exceptional solutions.
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center mb-12 sm:mb-16">
              <AnimatedSection animation="slide-left">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gx-navy mb-4 sm:mb-6">Our Story</h3>
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
                    <Button className="bg-gx-teal hover:bg-gx-teal/90 text-white group w-full sm:w-auto hover:shadow-[0_0_20px_rgba(0,212,170,0.6)] hover:scale-105 transition-all duration-300">
                      Learn More About Us
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-right">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-[0_0_25px_rgba(0,212,170,0.3)] transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-transparent hover:border-gx-teal/30">
                    <Award className="w-6 sm:w-8 h-6 sm:h-8 text-gx-teal mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gx-navy mb-1 sm:mb-2">Quality</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Excellence in every project</p>
                  </div>
                  <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-[0_0_25px_rgba(0,212,170,0.3)] transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-transparent hover:border-gx-teal/30">
                    <Heart className="w-6 sm:w-8 h-6 sm:h-8 text-gx-teal mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gx-navy mb-1 sm:mb-2">Integrity</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Honest and transparent</p>
                  </div>
                  <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-[0_0_25px_rgba(0,212,170,0.3)] transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-transparent hover:border-gx-teal/30">
                    <CheckCircle className="w-6 sm:w-8 h-6 sm:h-8 text-gx-teal mx-auto mb-2 sm:mb-3" />
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gx-navy mb-1 sm:mb-2">Reliability</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Dependable results</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <AnimatedSection animation="fade-up">
                <Card className="h-full border-0 shadow-lg hover:shadow-[0_0_30px_rgba(0,212,170,0.4)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-white to-blue-50/30">
                  <CardContent className="p-6 sm:p-8">
                    <Eye className="w-10 sm:w-12 h-10 sm:h-12 text-gx-teal mb-3 sm:mb-4 drop-shadow-[0_0_8px_rgba(0,212,170,0.5)]" />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gx-navy mb-3 sm:mb-4">Our Vision</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      To be the most trusted partner in delivering professional, reliable, and innovative solutions in
                      project management, procurement, and real estate management.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up">
                <Card className="h-full border-0 shadow-lg hover:shadow-[0_0_30px_rgba(0,212,170,0.4)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-white to-blue-50/30">
                  <CardContent className="p-6 sm:p-8">
                    <Target className="w-10 sm:w-12 h-10 sm:h-12 text-gx-teal mb-3 sm:mb-4 drop-shadow-[0_0_8px_rgba(0,212,170,0.5)]" />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gx-navy mb-3 sm:mb-4">Our Mission</h3>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gx-navy mb-6 sm:mb-8 text-center">
                Our Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-12 sm:mb-16 max-w-3xl mx-auto">
                Comprehensive solutions tailored to meet your project management, procurement, and real estate needs.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <AnimatedSection animation="fade-up">
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-[0_0_35px_rgba(0,212,170,0.5)] transition-all duration-500 group hover:-translate-y-3 hover:scale-105">
                  <div className="h-32 sm:h-40 md:h-48 relative overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                      alt="Project management team working on construction blueprints and planning"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gx-navy/80 via-gx-electric-blue/60 to-gx-teal/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building2 className="w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 text-white group-hover:scale-125 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gx-navy mb-2 sm:mb-3 md:mb-4">Project Management</h3>
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
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-[0_0_35px_rgba(0,212,170,0.5)] transition-all duration-500 group hover:-translate-y-3 hover:scale-105">
                  <div className="h-32 sm:h-40 md:h-48 relative overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/1181360/pexels-photo-1181360.jpeg"
                      alt="Business professionals analyzing procurement data and supply chain logistics"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gx-teal/80 via-gx-neon-green/60 to-gx-orange/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 text-white group-hover:scale-125 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gx-navy mb-2 sm:mb-3 md:mb-4">Procurement Services</h3>
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
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-[0_0_35px_rgba(0,212,170,0.5)] transition-all duration-500 group hover:-translate-y-3 hover:scale-105">
                  <div className="h-32 sm:h-40 md:h-48 relative overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg"
                      alt="Modern real estate property management and commercial building development"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gx-orange/80 via-gx-cyber-purple/60 to-gx-navy/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Home className="w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 text-white group-hover:scale-125 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gx-navy mb-2 sm:mb-3 md:mb-4">Real Estate Management</h3>
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
                  className="bg-gx-teal hover:bg-gx-teal/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg group w-full sm:w-auto hover:shadow-[0_0_25px_rgba(0,212,170,0.7)] hover:scale-110 transition-all duration-300 border border-gx-teal/50"
                >
                  View All Services
                  <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gx-navy mb-6 sm:mb-8 text-center relative">
                What Our Clients Say
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-gx-teal to-gx-electric-blue rounded-full"></span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-12 sm:mb-16 max-w-3xl mx-auto">
                Hear from our satisfied clients across South Africa who trust us with their projects.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <AnimatedSection animation="fade-up">
                <Card className="h-full border-0 shadow-lg hover:shadow-[0_0_30px_rgba(0,212,170,0.4)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-white to-blue-50/30">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gx-teal rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        T
                      </div>
                      <div>
                        <h4 className="font-semibold text-gx-navy">Thabo Mthembu</h4>
                        <p className="text-sm text-gray-600">Construction Manager, Johannesburg</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      "GX Integrated Services delivered our office complex project on time and within budget. Their project management expertise is exceptional."
                    </p>
                    <div className="flex text-gx-teal">
                      ★★★★★
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up">
                <Card className="h-full border-0 shadow-lg hover:shadow-[0_0_30px_rgba(0,212,170,0.4)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-white to-blue-50/30">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gx-teal rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        N
                      </div>
                      <div>
                        <h4 className="font-semibold text-gx-navy">Nomsa Dlamini</h4>
                        <p className="text-sm text-gray-600">Property Developer, Cape Town</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      "Their real estate management services transformed our property portfolio. Professional, reliable, and results-driven."
                    </p>
                    <div className="flex text-gx-teal">
                      ★★★★★
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up">
                <Card className="h-full border-0 shadow-lg hover:shadow-[0_0_30px_rgba(0,212,170,0.4)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-white to-blue-50/30">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gx-teal rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        S
                      </div>
                      <div>
                        <h4 className="font-semibold text-gx-navy">Sipho Ndaba</h4>
                        <p className="text-sm text-gray-600">Operations Director, Durban</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      "Outstanding procurement services that saved us 20% on costs while improving quality. Highly recommend GX Integrated Services."
                    </p>
                    <div className="flex text-gx-teal">
                      ★★★★★
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up">
                <Card className="h-full border-0 shadow-lg hover:shadow-[0_0_30px_rgba(0,212,170,0.4)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-white to-blue-50/30">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gx-teal rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        L
                      </div>
                      <div>
                        <h4 className="font-semibold text-gx-navy">Lerato Molefe</h4>
                        <p className="text-sm text-gray-600">CEO, Pretoria Manufacturing</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      "From planning to execution, GX handled our factory expansion flawlessly. Their attention to detail is remarkable."
                    </p>
                    <div className="flex text-gx-teal">
                      ★★★★★
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up">
                <Card className="h-full border-0 shadow-lg hover:shadow-[0_0_30px_rgba(0,212,170,0.4)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-white to-blue-50/30">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gx-teal rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        M
                      </div>
                      <div>
                        <h4 className="font-semibold text-gx-navy">Mandla Khumalo</h4>
                        <p className="text-sm text-gray-600">Retail Chain Owner, Bloemfontein</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      "Their procurement team secured better suppliers at lower costs. Our partnership continues to grow stronger each year."
                    </p>
                    <div className="flex text-gx-teal">
                      ★★★★★
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up">
                <Card className="h-full border-0 shadow-lg hover:shadow-[0_0_30px_rgba(0,212,170,0.4)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-white to-blue-50/30">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gx-teal rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        Z
                      </div>
                      <div>
                        <h4 className="font-semibold text-gx-navy">Zanele Mahlangu</h4>
                        <p className="text-sm text-gray-600">Hotel Owner, Port Elizabeth</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      "Excellent property management services. They handle everything professionally while maximizing our rental income."
                    </p>
                    <div className="flex text-gx-teal">
                      ★★★★★
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-cyber-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 drop-shadow-[0_0_15px_rgba(0,212,170,0.8)]">Ready to Get Started?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how we can help integrate your projects, procurement, and property needs seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-gx-navy hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:scale-110 group w-full sm:w-auto hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] border-2 border-transparent hover:border-gx-teal"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gx-navy px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:scale-110 bg-transparent w-full sm:w-auto hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:border-gx-teal"
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
              <div className="flex flex-wrap gap-4 sm:gap-6 mt-3 md:mt-0 justify-center md:justify-end">
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
