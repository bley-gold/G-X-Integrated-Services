import { Navigation } from "@/components/navigation"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Eye, Heart, Users, Award, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gx-navy via-gx-navy to-gx-teal text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About <span className="text-gx-teal">GX Integrated Services</span>
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed opacity-90">
                A trusted service provider specializing in Project Management, Procurement, and Real Estate Management.
                Our team of professionals combines years of experience with an innovative approach to ensure projects
                are delivered on time, within budget, and to the highest standard.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gx-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gx-teal/20">
                  <Users className="w-10 h-10 text-gx-teal" />
                </div>
                <div className="text-4xl font-bold text-gx-navy mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gx-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gx-teal/20">
                  <Award className="w-10 h-10 text-gx-teal" />
                </div>
                <div className="text-4xl font-bold text-gx-navy mb-2">200+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gx-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gx-teal/20">
                  <TrendingUp className="w-10 h-10 text-gx-teal" />
                </div>
                <div className="text-4xl font-bold text-gx-navy mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gx-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gx-teal/20">
                  <CheckCircle className="w-10 h-10 text-gx-teal" />
                </div>
                <div className="text-4xl font-bold text-gx-navy mb-2">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gx-teal/10 rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-8 h-8 text-gx-teal" />
                  </div>
                  <h2 className="text-3xl font-bold text-gx-navy">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the most trusted partner in delivering professional, reliable, and innovative solutions in
                  project management, procurement, and real estate management.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gx-teal/10 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-gx-teal" />
                  </div>
                  <h2 className="text-3xl font-bold text-gx-navy">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide exceptional service, cost efficiency, and sustainable solutions while fostering strong and
                  lasting business relationships.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gx-navy mb-6">
                Our <span className="text-gx-teal">Core Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-gray-50 p-8 rounded-lg hover:bg-gx-navy hover:text-white transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gx-teal rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gx-navy group-hover:text-white">Integrity</h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  Conducting all business with transparency and honesty, building trust through ethical practices.
                </p>
              </div>

              <div className="group bg-gray-50 p-8 rounded-lg hover:bg-gx-navy hover:text-white transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gx-teal rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gx-navy group-hover:text-white">Excellence</h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  Striving to exceed client expectations in every project, delivering superior quality results.
                </p>
              </div>

              <div className="group bg-gray-50 p-8 rounded-lg hover:bg-gx-navy hover:text-white transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gx-teal rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gx-navy group-hover:text-white">Innovation</h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  Adopting modern tools and approaches to stay ahead of industry trends and challenges.
                </p>
              </div>

              <div className="group bg-gray-50 p-8 rounded-lg hover:bg-gx-navy hover:text-white transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gx-teal rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gx-navy group-hover:text-white">Collaboration</h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  Fostering teamwork and open communication to achieve the best outcomes for all stakeholders.
                </p>
              </div>

              <div className="group bg-gray-50 p-8 rounded-lg hover:bg-gx-navy hover:text-white transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gx-teal rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gx-navy group-hover:text-white">Sustainability</h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  Considering environmental and social impacts in all operations for a better future.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gx-navy to-gx-teal text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how our experience and values can benefit your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-gx-navy hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 group"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gx-navy px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
